import { default as styled } from 'react-emotion';

export const MessageButtonStyles = styled('div')`  
  button {
    padding: 0px 16px;
    border: none;
    background: rgb(216, 27, 96);
    outline: none;
    align-self: center;
    height: 28px;
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 2px;
    white-space: nowrap;
    border-radius: 100px;
    color: rgb(255, 255, 255);

    margin-left: 10px;

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
`;
