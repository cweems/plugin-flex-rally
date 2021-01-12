import React from "react";
import { Manager } from "@twilio/flex-ui";

import { NewContactStyles } from "./NewContact.Styles";
// import ContactNotes from "../ContactNotes/ContactNotes";

export default class NewContact extends React.Component {
    // Get first contact

    // For each field in contact,
    // Create an input of correct type

    iframe() {
        let iframe = `<iframe class="airtable-embed" src="https://airtable.com/embed/shreuFnJ7OTnU9jcP?backgroundColor=cyan" frameborder="0" onmousewheel="" width="100%" height="${
            window.innerHeight - 93
        } style="background: transparent;"></iframe>`;
        return {
            __html: iframe,
        };
    }

    render() {
        return <div dangerouslySetInnerHTML={this.iframe()}></div>;
    }
}
