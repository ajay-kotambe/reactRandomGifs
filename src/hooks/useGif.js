import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function useGif(tag) {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);

      // build URL correctly
      const url = tag
        ? `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
        : `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

      const { data } = await axios.get(url);
      const gifSource = data.data.images.downsized_large.url;
      setGif(gifSource);
    } catch (err) {
      if (err.response?.status === 429) {
        toast.error("Too many requests! Please wait a bit.");
      } else {
        console.error("GIF fetch error:", err);
      }
    } finally {
      setLoading(false);
    }
  }

  // fetch whenever tag changes (or on mount)
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tag]);

  return { gif, loading, fetchData };
}

export default useGif;
