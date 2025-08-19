import { useEffect, useState } from "react";
import "./Tag.css";
import axios from "axios";
import Loader from "./Loader";
import toast from "react-hot-toast";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  const [gif, setGif] = useState("");
  const [tag, setTag] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
      const { data } = await axios.get(url);
      const gifSource = data.data.images.downsized_large.url;
      setGif(gifSource);
    } catch (err) {
      if (err.response?.status === 429) {
        toast.error("Too many requests! Please wait a bit.");
      } else {
        console.error(err);
      }
    } finally {
      setLoading(false);
    }
  }

  const changeHandler = (event) => setTag(event.target.value);

  useEffect(() => {
    fetchData(); // only once when component mounts
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <button onClick={fetchData}>Generate</button>
    </div>
  );
};

export default Tag;
