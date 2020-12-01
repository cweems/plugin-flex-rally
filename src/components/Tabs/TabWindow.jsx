import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { TabWindowStyles } from "./TabWindow.Styles";
import ContactListContainer from "../ContactList/ContactList.Container";
import FormContainer from "../Form/Form.Container";
import { Manager } from "@twilio/flex-ui";

export default class TabWindow extends Component {
    constructor() {
        super();

        let initialTabs = new Map([]);
        this.state = {
            tablist: initialTabs,
            currentTab: 0,
        };

        this.fetchContacts = this.fetchContacts.bind(this);
        this.getWorkerAvailability = this.getWorkerAvailability.bind(this);
    }

    fetchContacts() {
        if (this.props.contacts.length == 0) {
            const body = {
                Token: Manager.getInstance().store.getState().flex.session
                    .ssoTokenPayload.token,
            };

            const options = {
                method: "POST",
                body: new URLSearchParams(body),
                headers: {
                    "Content-Type":
                        "application/x-www-form-urlencoded;charset=UTF-8",
                },
            };

            fetch("http://localhost:3001/getcontacts", options)
                .then((resp) => resp.json())
                .then((data) => {
                    let airtableBaseId = data[0]._table._base._id;

                    this.props.contactsLoaded(data);
                    this.props.setAirtableBaseId(airtableBaseId);
                });
        }
    }

    getWorkerAvailability() {
        this.props.setWorkerAvailability(
            Manager.getInstance().workerClient.activity.available
        );
    }

    componentDidMount() {
        Manager.getInstance().workerClient.on("activityUpdated", (worker) => {
            this.props.setWorkerAvailability(worker.available);
        });

        this.fetchContacts();
        this.getWorkerAvailability();
    }

    componentWillReceiveProps(props) {
        let currentTabs = props.workerTasks;

        let tabIndex;
        if (currentTabs.size > 1) {
            tabIndex = currentTabs.size - 1;
        } else {
            tabIndex = 0;
        }

        let tablist = new Map([]);

        props.workerTasks.forEach((task) => {
            tablist.set(task.sid, task.attributes);
        });

        this.setState({
            tablist: tablist,
            currentTab: tabIndex,
        });
    }

    createTabs() {
        let tabs = [];

        for (let [key, value] of this.state.tablist.entries()) {
            let name;
            if (value.channelType === "sms") {
                name = value.name;
            } else {
                name = value.from;
            }

            tabs.push(<Tab key={key}>{name}</Tab>);
        }
        return tabs;
    }

    createPanels() {
        let panels = [];

        for (let [key, value] of this.state.tablist.entries()) {
            panels.push(
                <TabPanel key={key} forceRender={true}>
                    <FormContainer taskSid={key} task={value} />
                </TabPanel>
            );
        }

        return panels;
    }

    render() {
        return (
            <TabWindowStyles>
                <Tabs
                    selectedIndex={this.state.currentTab}
                    onSelect={(tabIndex) =>
                        this.setState({ currentTab: tabIndex })
                    }
                >
                    <TabList>
                        {this.createTabs()}
                        <Tab>Contacts</Tab>
                    </TabList>
                    {this.createPanels()}
                    <TabPanel>
                        <ContactListContainer key="contact-list-container" />
                    </TabPanel>
                </Tabs>
            </TabWindowStyles>
        );
    }
}
