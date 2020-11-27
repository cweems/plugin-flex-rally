import React from "react";

import { FormStyles } from "./Form.Styles";

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contact: null,
        };
    }

    // if task attributes has airtable ID, pull in airtable data

    // if there is no airtable ID present, query airtable by phone number

    // if there is no result in airtable, create a new contact

    getNotes() {}

    saveNote() {}

    render() {
        return (
            <FormStyles>
                <p>{this.props.taskSid}</p>
            </FormStyles>
        );
    }
}
