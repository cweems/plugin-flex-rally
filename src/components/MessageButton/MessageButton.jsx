import React from "react";
import { Actions } from "@twilio/flex-ui";
import { MessageButtonStyles } from "./MessageButton.Styles";

export default function MessageButton(props) {
    function newMessage() {
        console.log("do it");
    }

    return (
        <MessageButtonStyles>
            <button className="message-button" onClick={newMessage}>
                SMS
            </button>
        </MessageButtonStyles>
    );
}
