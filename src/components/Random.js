import { useState } from "react";
import "./Random.css";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  const [gif, setGif] = useState("");
  async function fetchData() {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const output = await axios.get(url);
  }

  const clickHandler = () => {};
  return (
    <div className="random-gif-container">
      <h2>
        <u> A Random GIFS</u>
      </h2>

      <img src={gif} alt="" width={450} />
      <button onClick={clickHandler} className="">
        Generate
      </button>
    </div>
  );
};

export default Random;
