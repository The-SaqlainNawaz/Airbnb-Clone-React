import React from "react";
import "./style.css";
import star from "../images/rating-star.png";

export default function Cover(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  } else {
    badgeText = "";
  }

  /*
    Challenge:
    1. Display the correct text in the badge based on the logic above
    2. Only display the badge if badgeText has a value
    */

  return (
    <div className="card-main">
      <div className="card">
        {!(badgeText === "") && <div className="card--badge">{badgeText}</div>}
        <img src={props.coverImg} alt="logo" className="card--image"></img>
        <div className="card-stats">
          <span>
            <img src={star} alt="logo" className="star--image"></img>
          </span>
          <span className="rating--ob">{props.stats.rating}</span>
          <span className="rating--number">({props.stats.reviewCount})</span>
          <span className="card--country">{props.country}</span>
        </div>
        <p className="card-para">
          {props.title} <span className="bold">{props.price}</span> /person
        </p>
      </div>
    </div>
  );
}
