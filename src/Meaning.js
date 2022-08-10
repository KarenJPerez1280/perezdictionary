import React from "react";
import Synonyms from "./Synonyms";


export default function Meaning(props) {

    return (
        <div className="Meaning">
            <div> synonym: <Synonyms synonyms={props.meaning.synonyms} /> </div>
            <h3> {props.meaning.partOfSpeech}   </h3>




            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>
                        <p> definition: {definition.definition}
                        </p>

                        <em>
                            example: {definition.example}
                        </em>

                        <br />

                    </div>

                );
            })}



        </div >
    );
}