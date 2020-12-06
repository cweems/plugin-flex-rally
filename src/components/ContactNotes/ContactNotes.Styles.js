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

    .note-scroll {
        height: 560px;
        overflow-y: scroll;
    }

    .note-compose {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;

        label {
            font-size: 10px;
            letter-spacing: 2px
            font-weight: 800;
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
        }

        input {
            width: 100%;
            box-sizing: border-box;
            border: 2px solid #ccc;
            border-radius: 4px;
            background-color: #f8f8f8;
            padding: 12px 12px;
            font-family: sans-serif;
            font-size: 16px;
        }

        textarea {
            width: 100%;
            height: 120px;
            padding: 12px 12px;
            box-sizing: border-box;
            border: 2px solid #ccc;
            border-radius: 4px;
            background-color: #f8f8f8;
            resize: none;
            font-family: sans-serif;
            font-size: 16px;
        }

        button {
            cursor: pointer;
            padding: 0px 16px;
            border: none;
            background: linear-gradient(to top, rgb(25, 118, 210), rgb(25, 118, 210));
            outline: none;
            align-self: center;
            height: 28px;
            font-size: 10px;
            font-weight: bold;
            letter-spacing: 2px;
            white-space: nowrap;
            border-radius: 100px;
            color: rgb(255, 255, 255);

            :hover {
            background-color: rgba(0, 0, 0, 0.2);
            background-blend-mode: color;
            }

            :active {
            background-color: rgba(0, 0, 0, 0.3);
            background-blend-mode: color;
            }

            :disabled {
            background: #bbb;
            cursor: not-allowed;
            }
        }
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
