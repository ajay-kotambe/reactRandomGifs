import { useEffect, useState } from "react";
import "./Tag.css";
import axios from "axios";
import Loader from "./Loader";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const tagMemeUrl =
  "https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}";
const randomMemeUrl = "https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}";

const Tag = ({ tag }) => {
  const [gif, setGif] = useState("");
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

  useEffect(() => {
    fetchData();
  }, []);

  return { gif, loading, fetchData };
};

export default Tag;
