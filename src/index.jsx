import React from "react";
import ReactDOM from "react-dom";
import Introduction from "./components/Introduction";
import Header from "./components/Header";
import './index.css'

const root = document.querySelector('#root');

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <Introduction />
    </React.StrictMode>
,root);
