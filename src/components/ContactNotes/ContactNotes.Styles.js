import { default as styled } from 'react-emotion';
import {defaultPadding} from '../shared/styles';


export const ContactNoteStyles = styled('div')`  
  .contact-notes {
        padding: ${defaultPadding};
        font-size: 16px;
    }
    
    .section-head {
        font-size: 12px;
        letter-spacing: 2px;
        color: rgb(34,34,34);
        font-weight: bold;
    }

    .note-item {

        background: rgb(236, 237, 241);
        padding: 10px;
        border-radius: 4px;
        margin-bottom: 10px;

        .note-heading {
            margin-bottom: 10px;
    
            .note-title {
                font-weight: 600;
            }
        }
    }
`;
