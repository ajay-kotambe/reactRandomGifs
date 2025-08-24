import { useEffect, useState } from "react";
import "./Tag.css";
import Loader from "./Loader";
import axios from "axios";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

// import useGif from "../hooks/useGif";

const TagWithHook = () => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState("");

  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }
  const changeHandler = (event) => {
    setTag(event.target.value);
  };
  useEffect(() => {
    fetchData();
  }, []);
  function clickHandler() {
    fetchData();
  }
  return (
    <div className="tag-gif-container">
      <h2>
        <u>A Random {tag || " "} GIF</u>
      </h2>

      {loading ? (
        <Loader />
      ) : (
        gif && <img src={gif} alt="Random GIF" width={450} height={290} />
      )}

      <input type="text" onChange={changeHandler} value={tag} />
      <button onClick={clickHandler}>Generate</button>
    </div>
  );
};

export default TagWithHook;
