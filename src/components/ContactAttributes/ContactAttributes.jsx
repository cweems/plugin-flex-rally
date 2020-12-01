import React from "react";
import { ContactAttributeStyles } from "./ContactAttributes.Styles";

export default function ContactAttributes(props) {
    let attributes = [];
    let notes = [];

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

    if (props.notes !== null) {
        for (const note of props.notes) {
            let date = new Date(note.fields.Date);
            let formattDate = new Intl.DateTimeFormat("US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            });
            notes.push(
                <li className="note-item" key={note.fields.ID}>
                    <h3 className="note-heading">
                        <span className="note-title">{note.fields.Title}</span>{" "}
                        - {formattDate.format(date)}
                    </h3>
                    <p>{note.fields.Note}</p>
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
                <br></br>
                <h3 className="section-head">NOTES</h3>
                <hr></hr>
                <ul>{notes}</ul>
            </div>
        </ContactAttributeStyles>
    );
}
