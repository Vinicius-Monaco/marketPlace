import React from "react";
import ReactDOM from "react-dom";
import Introduction from "./components/initialView/Introduction";
import Header from "./components/header/Header";
import CarouselPromoArea from "./components/carouselPromo/CarouselPromoArea"
import './index.css'

const root = document.querySelector('#root');

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <Introduction />
        <CarouselPromoArea />
    </React.StrictMode>
,root);
