import React from "react";
import ReactDOM from "react-dom";
import Meme from "../images/meme.png";

export default function Header() {
    return (
        <header>
            <img src={Meme}/>
            <h1>Meme Generator</h1>
            <p>React Course - Project 3</p>
        </header>
    )
}