import { useEffect, useState } from "react";
import "./Tag.css";
import axios from "axios";
import Loader from "./Loader";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  const [gif, setGif] = useState("");
  const [tag, setTag] = useState("");

  const [loading, setLoading] = useState(false);
  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);
    const gifSource = data.data.images.downsized_large.url;
    console.log(gifSource);
    setGif(gifSource);
    setLoading(false);
  }
  const changeHandler = (event) => {
    setTag(event.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const clickHandler = () => {
    fetchData();
  };
  return (
    <div className="tag-gif-container">
      <h2>
        <u> A Random {tag} GIFS</u>
      </h2>
      {loading ? (
        <Loader />
      ) : (
        <img src={gif} alt="RandomGIFS" width={450} height={290} />
      )}

      <input type="text" onChange={changeHandler} value={tag} />
      <button onClick={clickHandler} className="">
        Generate
      </button>
    </div>
  );
};

export default Tag;
