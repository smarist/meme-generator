import React from "react";
import ReactDOM from "react-dom";


export default function Input() {
    return (
        <main>
           <form>
                <input 
                    className="input1" 
                    placeholder="top-text"
                    type="text"/>
                <input 
                    className="input2"
                    placeholder="bottom-text"
                    type="text"/>
                <button>Get a new meme image</button>
           </form>
        </main>
        
    )
}