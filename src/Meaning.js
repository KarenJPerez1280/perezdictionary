import React from "react";
import Synonyms from "./Synonyms";


export default function Meaning(props) {
    console.log(props.meaning);
    return (
        <div className="Meaning">

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

            <div> synonym: <Synonyms synonyms={props.meaning.synonyms} /> </div>


        </div >
    );
}