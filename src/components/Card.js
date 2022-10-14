import React from "react";
import "./style.css";
export default function Cover(props) {
  return (
    <div className="card">
      <img src={props.img} alt="logo" className="card--image"></img>
      <div className="card-stats">
        <span>
          <img src={props.star_image} alt="logo" className="star--image"></img>
        </span>
        <span className="rating--ob">{props.rating}</span>
        <span className="rating--number">{props.countreview}</span>
        <span className="card--country">{props.country}</span>
      </div>
      <p className="card-para">
        {props.title} <span className="bold">{props.price}</span> /person
      </p>
    </div>
  );
}
