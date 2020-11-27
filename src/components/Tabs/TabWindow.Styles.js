import { default as styled } from 'react-emotion';
const borderColor = 'rgb(198, 202, 215)'

export const TabWindowStyles = styled('div')`  
    .react-tabs {
        -webkit-tap-highlight-color: transparent;
    }

    .react-tabs__tab-list {
        border-bottom: 1px solid ${borderColor};
        margin: 0 0 10px;
        padding: 0;
    }

    .react-tabs__tab {
        display: inline-block;
        border: 1px solid transparent;
        border-bottom: none;
        bottom: -1px;
        position: relative;
        list-style: none;
        padding: 6px 12px;
        cursor: pointer;
    }

    .react-tabs__tab--selected {
        background: #fff;
        border-color: #aaa;
        color: black;
        border-radius: 5px 5px 0 0;
    }

    .react-tabs__tab--disabled {
        color: GrayText;
        cursor: default;
    }

    .react-tabs__tab:focus {
        box-shadow: 0 0 5px hsl(208, 99%, 50%);
        border-color: hsl(208, 99%, 50%);
        outline: none;
    }

    .react-tabs__tab:focus:after {
        content: "";
        position: absolute;
        height: 5px;
        left: -4px;
        right: -4px;
        bottom: -5px;
        background: #fff;
    }

    .react-tabs__tab-panel {
        display: none;
    }

    .react-tabs__tab-panel--selected {
        display: block;
        height: 100vh;
    }

    /* Custom for Flex */

    .react-tabs__tab-list {
        margin-bottom: 0px;
        border-color: rgb(198, 202, 215);
    }

    .react-tabs__tab {
        padding: 10px 30px;
        font-size: 18px;
        border-radius: 0px;
    }

    .react-tabs__tab:first-child {
        border-left: 0px;
    }

    .react-tabs__tab--selected {
        border-right-color: rgb(198, 202, 215);
        border-left-color: rgb(198, 202, 215);
        border-top: 4px solid rgb(25, 118, 210);
    }

    .react-tabs__tab-panel {
        background-color: #fff;
    }

    .button {
        background-color: #005191; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }

    .close {
        position: absolute;
        right: 0px;
        top: 14px;
        width: 32px;
        height: 32px;
        opacity: 0.3;
    }
    .close:hover {
        opacity: 1;
    }
    .close:before, .close:after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 20px;
        width: 2px;
        background-color: #333;
    }
    .close:before {
        transform: rotate(45deg);
    }
    .close:after {
        transform: rotate(-45deg);
    }
`;