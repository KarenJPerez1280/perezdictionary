import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";




export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleResponseDictionary(response) {

        setResults(response.data[0]);
    }
    function handleResponsePexels(response) {

        setPhotos(response.data.photos);
    }
    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponseDictionary);

        let pexelsApiKey =
            "563492ad6f91700001000001c6a65a7fbce74795afea55dae492eca1";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handleResponsePexels);
    }
    function handleSubmit(event) {
        event.preventDefault();

        search();

    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                    <h1 className="Title">
                        What word do you want to look up?
                    </h1>
                    <form onSubmit={handleSubmit} className="engine" >
                        <input type="search" onChange={handleKeywordChange} className="engine" />

                    </form>
                </section>
                <Results results={results} />
                <Photos photos={photos} />
            </div>
        );

    } else {
        load();
        return "Loading..";

    }



}