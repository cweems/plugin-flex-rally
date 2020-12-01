import React from "react";
import { ContactAttributeStyles } from "./ContactAttributes.Styles";

export default function ContactAttributes(props) {
    let attributes = [];

    let hiddenAttributes = [
        "Phone",
        "Name",
        "Notes",
        "Agent",
        "ID",
        "Username (from Agent)",
    ];
    for (let value in props.fields) {
        if (hiddenAttributes.indexOf(value) === -1) {
            attributes.push(
                <li key={value}>
                    {value}: {props.fields[value]}
                </li>
            );
        }
    }

    return (
        <ContactAttributeStyles>
            <div className="contact-attributes">
                <h2 className="contact-name">{props.fields.Name}</h2>
                <h2>{props.fields.Phone}</h2>
                <ul>{attributes}</ul>
            </div>
        </ContactAttributeStyles>
    );
}
