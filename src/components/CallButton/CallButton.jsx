import React from "react";
import { Actions } from "@twilio/flex-ui";
import { CallButtonStyles } from "./CallButton.Styles";

export default function CallButton(props) {
    function call() {
        Actions.invokeAction("StartOutboundCall", {
            destination: props.phone,
            taskAttributes: {
                recordId: props.recordId,
            },
        });
    }

    return (
        <CallButtonStyles>
            <button
                onClick={call}
                disabled={
                    !props.workerAvailability ||
                    props.phone === "" ||
                    props.phone === undefined
                }
            >
                CALL
            </button>
        </CallButtonStyles>
    );
}
