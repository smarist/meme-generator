import React from "react";
import ReactDOM from "react-dom";
import Meme from "../memeData"


export default function Input() {
    const [url, setUrl] = React.useState("");  


        function getMemeImg(){
            const Meme2 = Meme.data.memes
            const index = Math.floor(Math.random()* Meme2.length);
            setUrl(Meme2[index].url);
        
              
    } 


    return (
        <main>
           <div className="form">
                <input 
                    className="input1" 
                    placeholder="top-text"
                    type="text"/>
                <input 
                    className="input2"
                    placeholder="bottom-text"
                    type="text"/>
                <button onClick={getMemeImg}>Get a new meme image 🖼</button>
           </div>
           <img src={url} className="meme-img"></img>
               
        </main>
        
    )
}