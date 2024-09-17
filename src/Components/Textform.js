import React, { useState } from "react";

export default function Textform(props) {
const handleUpClick = () => {
// console.log("upper case is clicked : " + text);
let newText = text.toUpperCase();
setText(newText)
props.showAlert("converted to uppercase","success");
};

const handleLoClick = () => {
// console.log("upper case is clicked : " + text);
let newText = text.toLowerCase();
setText(newText)
props.showAlert("converted to lowercase","success");
};

const handleClearClick = () => {
// console.log("upper case is clicked : " + text);
let newText = "";
setText(newText);
props.showAlert("Text will be clear","success");
};

const handleOnChange = (event) => {
// console.log("on change");
setText(event.target.value);
};

const handleCopy = () =>{
    // console.log("text copied");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text will be copied","success");
}

const handleExtraSpaces = () =>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "))
    props.showAlert("Extra spaces removed","success");
}


const [text, setText] = useState("");
return (
<>
<div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
<h1>{props.heading}</h1>
<div className="mb-3">
<textarea
className="form-control"
value={text}
onChange={handleOnChange}
style={{backgroundColor: props.mode==='dark'?'#083460':'white',color: props.mode==='dark'?'white':'black'}}
id="myBox"
rows="8"
></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>
Convert to Uppercase
</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>
Convert to Lowercase
</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>
Clear Text
</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>
Copy Text
</button>
<button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
Remove Extra Space
</button>
</div>
<div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
<h2>Your text summary</h2>
<p>
<b>
{text.split(" ").length} words and {text.length} characters
</b>
</p>
<p>
<b>Reading Time {0.008 * text.split(" ").length}</b>
</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something in above texetbox to preview here"}</p>
</div>
</>
);
}
