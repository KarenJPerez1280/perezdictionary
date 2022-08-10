import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
    console.log(props.phonetic);
    return (
        <div className="phonetics">
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">listen</a>
            <span className="phoneticText">  {props.phonetic.text}</span>

        </div>);
}