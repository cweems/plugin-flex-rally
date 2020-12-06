import React from "react";
import { Manager } from "@twilio/flex-ui";
import ContactAttributes from "../ContactAttributes/ContactAttributes";

import { FormStyles } from "./Form.Styles";
import ContactNotes from "../ContactNotes/ContactNotes";

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: null,
        };

        this.getContactData = this.getContactData.bind(this);
        this.getNotes = this.getNotes.bind(this);
    }

    getContactData(nextProps) {
        let props = nextProps || this.props;

        let contact = [];
        if (props.task) {
            if (props.task.hasOwnProperty("recordId")) {
                contact = props.contacts.filter((ct) => {
                    return ct.id === props.task.recordId;
                });
            }
        }

        if (contact.length > 0) {
            contact = contact[0];
        } else {
            return;
        }

        if (
            contact.fields.hasOwnProperty("Notes") &&
            contact.fields.Notes.length > 0
        ) {
            this.getNotes(contact.fields.Notes);
        }

        this.setState({
            contact: contact,
        });
    }

    getNotes(noteIds) {
        let notePromises = noteIds.map((note) => {
            return new Promise((resolve, reject) => {
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

                fetch(
                    `${
                        Manager.getInstance().configuration.serviceBaseUrl
                    }/getnotesbycontact?note=${note}`,
                    options
                )
                    .then((resp) => resp.json())
                    .then((data) => {
                        resolve(data);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        });

        Promise.all(notePromises).then((notes) => {
            this.setState({
                notes: notes,
            });
        });
    }

    componentWillMount() {
        this.getContactData();
    }

    componentWillReceiveProps(nextProps) {
        this.getContactData(nextProps);
    }

    render() {
        let contact;
        if (this.state.contact) {
            contact = (
                <div>
                    <ContactAttributes fields={this.state.contact.fields} />
                    <ContactNotes
                        notes={this.state.notes}
                        contactId={this.state.contact.id}
                    />
                </div>
            );
        } else {
            contact = "new contact";
        }
        return <FormStyles>{contact}</FormStyles>;
    }
}
