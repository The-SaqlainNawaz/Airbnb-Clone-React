import React from "react";
import "./style.css";
import img from "../images/cover.png";
export default function Cover() {
  return (
    <div className="cover">
      <img src={img} alt="logo" className="cover--image"></img>
      <h1 className="cover--heading">Online Experiences</h1>
      <p className="cover--logo--para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique natus
        laudantium consequuntur officia, id accusamus ab soluta obcaecati eum
        molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Similique natus laudantium consequuntur officia.
      </p>
    </div>
  );
}
