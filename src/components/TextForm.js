import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const buttonOnClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    console.log("button is clicked" + text);
    {
      props.showAlert("success! ", "text converted to uppercase");
    }
  };;
  const buttonlowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    console.log("button is clicked" + text);
    {props.showAlert('success! ','text converted to lowercase')};
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const clearText = () => {
    setText("");
    {
      props.showAlert("success! ", "text is removed");
    }
  };
  const buttonInvClick = () => {
    console.log("inverse");
    var i = 0;
    let text2='';
    while (i < text.length) {
   let character = text.charAt(i);
      if (character === character.toUpperCase()) {
        character = character.toLowerCase();
      } else {
        character=character.toUpperCase();
      }
      text2 += character;
      i++;
    }
    setText(text2);
  };
  return (
    <div>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
      </div>
      <button
        className="btn btn-primary mx-2"
        style={{ backgroundColor: props.clr }}
        onClick={buttonOnClick}
      >
        Convert to uppercase
      </button>
      <button
        className="btn btn-primary mx-2"
        onClick={buttonlowClick}
        style={{ backgroundColor: props.clr }}
      >
        Convert to lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={buttonInvClick} style={{ backgroundColor: props.clr }}>
        InverseCase
      </button>
      <button className="btn btn-primary mx-2" onClick={clearText} style={{ backgroundColor: props.clr }}>
        Clear text
      </button>
      <div className="container my-3">
        <h3>Words and Character Count</h3>
        <p>
          {text === "" ? 0 : text.trim().split(" ").length} words,{text.length}{" "}
          characters and {text.split(".").length - 1} sentences.
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
