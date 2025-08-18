import { useEffect, useState } from "react";
import "./Random.css";
import axios from "axios";
import Loader from "./Loader";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);
  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    const gifSource = data.data.images.downsized_large.url;
    console.log(gifSource);
    setGif(gifSource);
    setLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, []);
  const clickHandler = () => {
    fetchData();
  };
  return (
    <div className="random-gif-container">
      <h2>
        <u> A Random GIFS</u>
      </h2>
      {loading ? (
        <Loader />
      ) : (
        <img src={gif} alt="RandomGIFS" width={450} height={290} />
      )}

      <button onClick={clickHandler} className="">
        Generate
      </button>
    </div>
  );
};

export default Random;
