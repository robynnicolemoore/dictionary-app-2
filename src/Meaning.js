import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props);
  return (
    <div className="Meaning">
      <h4 className="PartOfSpeech">{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function(definition, index) {
        return (
          <div key={index}>
            <p className="Definition">{definition.definition}</p>
            <em className="Example">{definition.example}</em>
          </div>
        );
      })}
    </div>
  );
}
