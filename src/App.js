import React from "react";
import Nav from "./components/Nav";
import Cover from "./components/Cover";
import Card from "./components/Card";
import Footer from "./components/Footer";
import cardimage from "./images/car-photo.jpg";
import starimage from "./images/rating-star.png";

export default function App() {
  return (
    <div>
      <Nav />
      <Cover />
      <Card
        img={cardimage}
        star_image={starimage}
        rating="5.0"
        reviewcount="6"
        country="Asia"
        title="Life Lesson with Katie Zafarie"
        price="From $136"
      />
      <Footer />
    </div>
  );
}
