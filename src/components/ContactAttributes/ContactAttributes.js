import React from 'react';
import {ContactAttributeStyles} from './ContactAttributes.Styles';

export default function ContactAttributes (props) {
    let attributes = [];
    for (let value in props.fields) {
        if (value !== "Phone" && value !== "Name" && value !== "Notes") {
            attributes.push(<li key={value}>{value}: {props.fields[value]}</li>);
        }
    }
    
    return(
        <ContactAttributeStyles>
            <div className="contact-attributes">
                <h2>{props.fields.Name}</h2>
                <h2>{props.fields.Phone}</h2>
                <hr></hr>
                <ul>
                    {attributes}
                </ul>
            </div>
        </ContactAttributeStyles> 
    )
}