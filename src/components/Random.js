import { useEffect, useState } from "react";
import "./Random.css";
import axios from "axios";
import Loader from "./Loader";
import toast from "react-hot-toast";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      const { data } = await axios.get(url);
      const gifSource = data.data.images.downsized_large.url;
      setGif(gifSource);
    } catch (err) {
      if (err.response?.status === 429) {
        toast.error("Too many requests! Please wait before trying again.");
      } else {
        console.error("Error fetching GIF:", err);
      }
    } finally {
      setLoading(false);
    }
  }

  // Initial fetch only once when component mounts
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="random-gif-container">
      <h2>
        <u>A Random GIF</u>
      </h2>

      {loading ? (
        <Loader />
      ) : (
        gif && <img src={gif} alt="Random GIF" width={450} height={290} />
      )}

      <button onClick={fetchData}>
        Generate
      </button>
    </div>
  );
};

export default Random;
