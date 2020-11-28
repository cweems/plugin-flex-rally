import { default as styled } from 'react-emotion';
import {defaultPadding} from '../shared/styles';

const borderColor = 'rgb(198, 202, 215)'

export const ContactListStyles = styled('div')`
  padding: ${defaultPadding};
  margin: 0px;
  font-size: 16px;

  .header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    h1 {
      font-size: 12px;
      letter-spacing: 2px;
      color: rgb(34,34,34);
      font-weight: bold;
    }

    span {
      flex-grow: 2;
      
      a {
        float: right;
        font-size: 14px;
        color: linear-gradient(to top, rgb(25, 118, 210), rgb(25, 118, 210));
      }
    }
  }

  ul {
    border: 1px solid ${borderColor};
    background: #fff;
  }

  li {
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${borderColor};
    padding: 10px;

    span:first-child {
      width: 20%;
    }

    span:nth-child(2) {
      width: 20%;
    }

    span:last-child {
      flex-grow: 2;
      button {
        cursor: pointer;
        float: right;
      }
    }
  }

  li:last-child {
        border-bottom: none;
  }

  .contact-name {
    font-weight: 600
  }
  .accented {
    color: red;
    cursor: pointer;
    float: right;
  }
`;
