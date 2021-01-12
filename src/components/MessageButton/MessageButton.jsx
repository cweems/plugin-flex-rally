import React from "react";
import { Manager } from "@twilio/flex-ui";
import { MessageButtonStyles } from "./MessageButton.Styles";

export default function MessageButton(props) {
    function newMessage() {
        const body = {
            Token: Manager.getInstance().store.getState().flex.session
                .ssoTokenPayload.token,
            to: props.phone,
            name: props.name,
            contact_uri: "client:cweems",
            record_id: props.recordId,
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
            }/outbound-sms`,
            options
        )
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                return data;
            })
            .catch((err) => {
                return err;
            });
    }

    return (
        <MessageButtonStyles>
            <button
                className="message-button"
                onClick={newMessage}
                disabled={
                    !props.agentStatus ||
                    props.phone === "" ||
                    props.phone === undefined
                }
            >
                SMS
            </button>
        </MessageButtonStyles>
    );
}
