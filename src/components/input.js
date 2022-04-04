import React from "react";
import ReactDOM from "react-dom";
import Meme from "../memeData"


export default function Input() {
    const [memeImage, setMemeImage] = React.useState(
        {  topText: "",
           bottonText: "",
           randomImage: "https://i.imgflip.com/2wifvo.jpg"
        }
            );  

    const [allMemeImages, setAllMemeImages] = React.useState(Meme)

        function getMemeImg(){
            console.log("hi")
            const Meme2 = allMemeImages.data.memes
            const index = Math.floor(Math.random()* Meme2.length);
            const url = Meme2[index].url;
            setMemeImage(prevMemeImage => 
                ({
                    ...prevMemeImage,
                    randomImage:url
                }))              
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
           <img src={memeImage.randomImage} className="meme-img"></img>
               
        </main>
        
    )
}