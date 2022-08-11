import React from "react";
import Synonyms from "./Synonyms";
import "./Dictionary.css";


export default function Meaning(props) {
    console.log(props.meaning);
    return (
        <div className="Meaning">

            <h3 className="Word"> {props.meaning.partOfSpeech}   </h3>



            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>
                        <p><span className="Definition">definition:</span><span className="DefinitionDef"> {definition.definition}</span>
                        </p>

                        <span className="ExampleDef">{definition.example}</span>



                    </div>

                );
            })}

            <div><p className="Syn"> synonym: </p> <Synonyms synonyms={props.meaning.synonyms} /> </div>


        </div >
    );
}