import React from "react";
import { Actions } from "@twilio/flex-ui";
import { CallButtonStyles } from "./CallButton.Styles";

export default function CallButton(props) {
    function call() {
        Actions.invokeAction("StartOutboundCall", {
            destination: props.phone,
        });
    }

    return (
        <CallButtonStyles>
            <button onClick={call} disabled={!props.agentStatus}>
                CALL
            </button>
        </CallButtonStyles>
    );
}
