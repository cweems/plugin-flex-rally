import React from "react";

import { Manager } from "@twilio/flex-ui";
import CallButtonContainer from "../CallButton/CallButton.Container";
import { ContactListStyles } from "./ContactList.Styles";

export default class ContactList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let contacts = this.props.contacts.map((item) => {
            return (
                <li key={item.id}>
                    <span className="contact-name">{item.fields.Name}</span>
                    <span>{item.fields.Phone}</span>
                    <span>
                        <CallButtonContainer
                            phone={item.fields.Phone}
                            recordId={item.id}
                            agentStatus={this.props.workerAvailability}
                        />
                    </span>
                </li>
            );
        });

        return (
            <ContactListStyles>
                <div className="header">
                    <h1>CONTACTS</h1>
                    <span>
                        <a
                            href={`https://airtable.com/${this.props.airtableBaseId}`}
                            target="_blank"
                        >
                            Open Airtable
                        </a>
                    </span>
                </div>
                <ul>{contacts}</ul>
            </ContactListStyles>
        );
    }
}
