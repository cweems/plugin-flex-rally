import { default as styled } from 'react-emotion';

export const CallButtonStyles = styled('div')`  
  button {
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
`;
