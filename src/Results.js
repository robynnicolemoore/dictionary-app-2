import React from "react";
import Meaning from "./Meaning";
import "./Results.css";
import Phonetics from "./Phonetics";
import Photos from "./Photos";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h1 className="word">{props.results.word}</h1>
        <section>
          <div className="phoneticsAudio">
            <div className="row">
              <div className="col">
                {props.results.phonetics.map(function(phonetics, index) {
                  return (
                    <div key={index} className="Phonetics">
                      <Phonetics phonetics={phonetics} />
                    </div>
                  );
                })}
              </div>
              <div className="Phonetics">{props.results.phonetic}></div>
              <div className="col">
                <Photos photos={props.photos} />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="Definition">
            {props.results.meanings.map(function(meaning, index) {
              return (
                <div key={index}>
                  <br />
                  <Meaning meaning={meaning} />
                </div>
              );
            })}
          </h3>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
