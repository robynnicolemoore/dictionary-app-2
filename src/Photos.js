import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos)
    return (
      <div>
        {props.photos.map(function(photos, index) {
          return <img src={photos.src.tiny} alt="keyword" key={index} />;
        })}
      </div>
    );
  else {
    return null;
  }
}
