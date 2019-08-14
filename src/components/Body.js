import React from "react";

const MovieCard = props => {
  return (
    <div className="film-list" key={props.id}>
      <h2> Film title: {props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default MovieCard;
