import { useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      const { data } = await axios.get(
        tag
          ? `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
          : `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
      );
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  // 👇 removed useEffect (no auto call)

  return { gif, loading, fetchData };
};

export default useGif;
