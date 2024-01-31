import React, { useState } from "react";


export default function MyTextArea() {
    const onchangehandler = (event) => {
        console.log('onchange');
        setText(event.target.value)

    }
    const textupperCase = () => {
        console.log('onchange');
        let newText = text.toUpperCase();
        setText(newText);
    }
    const textLowerCase = () => {
        console.log('onchange');
        let newText = text.toLowerCase();
        setText(newText);
    }
    const textpreview = () => {
        document.getElementById('preheading').innerHTML = "Preview";
        document.getElementById('mytext').innerHTML = text;

    }
    const cleartext = () => {
        let newText = '';
        setText(newText);
    }
    // const textBold = () => {
    //     // setText((prevText) => {prevText { "font-weight: bold;"} });
    // }
    // const textItalic = () => {
    //     let newText = bold;
    //     setText(newText);

    // };
    const textCopy = () => {
        console.log('copied')
        let newText = document.getElementById('myBox');
        newText.select()
        navigator.clipboard.writeText(newText.value);
    }
    const removeSpace = () => {
        console.log('space removed')
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));


    }

    const [text, setText] = useState("");
    return (
        <>
            <div className="container">
                <h1 className="mt-5 mb-3">Analyze your text</h1>
                <div className="mb-3">
                    <div className="btn-group">
                        <button className="btn btn-primary" onClick={textupperCase}>UpperCase</button>
                        <button className="btn btn-primary" onClick={textLowerCase}>lowerCase</button>
                        <button className="btn btn-primary" onClick={textCopy}>Copy</button>
                        <button className="btn btn-primary" onClick={removeSpace}>Remove Space</button>
                        <button className="btn btn-success" onClick={textpreview}>Preview</button>
                        <button className="btn btn-danger" onClick={cleartext}>ClearText</button>
                    </div>
                    <textarea className="form-control shadow-lg" id="myBox"
                        rows="9" placeholder="Enter Text...." value={text} onChange={onchangehandler}></textarea>
                </div>
                <h6>{text.split(" ").filter((element)=>{
                   return element.length!==0
                }).length} words {text.length} character</h6>
                <p>{0.008 * text.split(" ").filter( (element)=>{
                    return element.length!==0

                }).length} Minutes to read</p>
            </div>
            <div className="container">
                <h2 id="preheading">.</h2>

                <p id="mytext"></p>

            </div>
        </>

    )
}