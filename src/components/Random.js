import React, { useState } from "react";
import "./Random.css";

const Random = () => {
  const [gif, setGif] = useState("");

  const clickHandler = () => {};
  return (
    <div className="random-gif-container">
      <h2>
        <u> A Random GIFS</u>
      </h2>

      <img src={gif} alt="" width={450} />
      <button onClick={clickHandler}>Generate</button>
    </div>
  );
};

export default Random;
