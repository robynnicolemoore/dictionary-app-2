import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <h2 className="word">{props.results.word}</h2>
        <div className="card">
          <div className="card-body">
            <h3 className="Definition">
              {props.results.meanings.map(function(meaning, index) {
                return (
                  <div key={index}>
                    <Meaning meaning={meaning} />
                  </div>
                );
              })}
            </h3>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
