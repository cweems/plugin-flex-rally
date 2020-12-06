import React from "react";
import { ContactNoteStyles } from "./ContactNotes.Styles";
import { Manager } from "@twilio/flex-ui";

export default function ContactNotes(props) {
    let notes = [];

    if (props.notes) {
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

    let noteTitle = React.createRef();
    let noteText = React.createRef();

    function saveNote() {
        const body = {
            Token: Manager.getInstance().store.getState().flex.session
                .ssoTokenPayload.token,
            noteTitle: noteTitle.current.value,
            noteText: noteText.current.value,
            contactId: props.contactId,
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
                Manager.getInstance().configuraton.serviceBaseUrl
            }/createnote?note`,
            options
        )
            .then((resp) => resp.json())
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            });
    }

    return (
        <ContactNoteStyles>
            <div className="contact-notes">
                <h3 className="section-head">NOTES</h3>
                <hr></hr>
                <div className="note-scroll">
                    <div className="note-compose">
                        <form>
                            <label>
                                TITLE
                                <input ref={noteTitle}></input>
                            </label>
                            <label>
                                BODY
                                <textarea ref={noteText}></textarea>
                            </label>
                            <button type="reset" onClick={saveNote}>
                                SAVE NOTE
                            </button>
                        </form>
                    </div>
                    <ul>{notes}</ul>
                </div>
            </div>
        </ContactNoteStyles>
    );
}
