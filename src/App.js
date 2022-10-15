import React from "react";
import Nav from "./components/Nav";
import Cover from "./components/Cover";
import Card from "./components/Card";
import Footer from "./components/Footer";
import data from "./data";

export default function App() {
  const cards = data.map((dt) => {
    return <Card key={dt.id} {...dt} />;
  });
  console.log(cards);
  return (
    <div>
      <Nav />
      <Cover />
      <section className="card-section"> {cards}</section>
      <Footer />
    </div>
  );
}

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/
