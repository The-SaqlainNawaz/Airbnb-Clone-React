import React from "react";
import img from "../logo1.png";
import "./style.css";

export default function Joke({ setup, punchline }) {
  return (
    <div className="nav">
      <img src={img} alt="logo" className="nav--logo"></img>
      {/* <p className="nav--logo--text">WizShop</p> */}
    </div>
  );
}
