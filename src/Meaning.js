import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <p className="PartOfSpeech">
        <strong>{props.meaning.partOfSpeech}</strong>
      </p>
      {props.meaning.definitions.map(function(definition, index) {
        return (
          <div key={index}>
            <p className="Definition">{definition.definition}</p>
            <em className="Example">{definition.example}</em>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
