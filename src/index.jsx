import React from "react";
import ReactDOM from "react-dom";
import Introduction from "./components/Introduction";
import './index.css'

const root = document.querySelector('#root');

ReactDOM.render(
    <React.StrictMode>
        <Introduction />
    </React.StrictMode>
,root);
