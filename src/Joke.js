import React from "react";

export default function Joke({ setup, punchline }) {
  return (
    <>
      <h2>{setup}</h2>
      <h1>{punchline}</h1>
    </>
  );
}
