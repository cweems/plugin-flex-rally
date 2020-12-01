import React from "react";
import { ContactNoteStyles } from "./ContactNotes.Styles";

export default function ContactNotes(props) {
    let notes = [];

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
        <ContactNoteStyles>
            <div className="contact-notes">
                <h3 className="section-head">NOTES</h3>
                <hr></hr>
                <ul>{notes}</ul>
            </div>
        </ContactNoteStyles>
    );
}
