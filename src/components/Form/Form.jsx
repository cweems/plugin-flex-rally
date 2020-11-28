import React from "react";
import ContactAttributes from "../ContactAttributes/ContactAttributes";

import { FormStyles } from "./Form.Styles";

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contact: null,
        };

        this.getContactData = this.getContactData.bind(this);
    }

    componentWil;

    componentDidMount() {
        this.getContactData();
    }

    getContactData() {
        let contact;
        if (this.props.task.hasOwnProperty("recordId")) {
            contact = this.props.contacts.filter((ct) => {
                return ct.id === this.props.task.recordId;
            });
        }

        if (contact.length > 0) {
            contact = contact[0];
        }

        this.setState({
            contact: contact,
        });
    }

    getNotes() {}

    saveNote() {}

    render() {
        let contact;
        if (this.state.contact) {
            contact = <ContactAttributes fields={this.state.contact.fields} />;
        } else {
            contact = "new contact";
        }
        return <FormStyles>{contact}</FormStyles>;
    }
}
