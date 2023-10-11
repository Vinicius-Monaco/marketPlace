import React from "react";
import ReactDOM from "react-dom";
import Introduction from "./components/Introduction";
import Header from "./components/Header";
import Main from "./components/Main";
import './index.css'

const root = document.querySelector('#root');

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <Introduction />
        <Main />
    </React.StrictMode>
,root);
