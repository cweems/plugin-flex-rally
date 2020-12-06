import { default as styled } from 'react-emotion';
import {defaultPadding} from '../shared/styles';

const borderColor = 'rgb(198, 202, 215)'

export const ContactAttributeStyles = styled('div')`
    .contact-attributes {
        padding: ${defaultPadding};
        font-size: 16px;
    }

    .contact-name {
        font-weight: 600;
    }
    
    .section-head {
        font-size: 12px;
        letter-spacing: 2px;
        color: rgb(34,34,34);
        font-weight: bold;
    }
`;
