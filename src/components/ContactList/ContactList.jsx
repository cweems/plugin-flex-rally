import React from "react";

import { Manager } from "@twilio/flex-ui";
import CallButton from "../CallButton/CallButton";
import { ContactListStyles } from "./ContactList.Styles";

export default class ContactList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            token: Manager.getInstance().store.getState().flex.session
                .ssoTokenPayload.token,
            workerAvailable: Manager.getInstance().workerClient.activity
                .available,
            contacts: [],
        };

        Manager.getInstance().workerClient.on("activityUpdated", (worker) => {
            this.setState({
                workerAvailable: worker.available,
            });
            console.log("activity updated ", worker);
        });

        this.fetchContacts = this.fetchContacts.bind(this);
        this.fetchContacts();
    }

    fetchContacts() {
        const body = {
            Token: this.state.token,
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
                this.setState({
                    contacts: data,
                });
            });
    }

    render() {
        return (
            <ContactListStyles>
                <div className="header">
                    <h1>CONTACTS</h1>
                    <span>
                        <a href="hello">Open Airtable</a>
                    </span>
                </div>
                <ul>
                    {this.state.contacts.map((item) => {
                        console.log(item);
                        return (
                            <li key={item.id}>
                                <span className="contact-name">
                                    {item.fields.Name}
                                </span>
                                <span>{item.fields.Phone}</span>
                                <span>
                                    <CallButton
                                        phone={item.fields.Phone}
                                        agentStatus={this.state.workerAvailable}
                                    />
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </ContactListStyles>
        );
    }
}
