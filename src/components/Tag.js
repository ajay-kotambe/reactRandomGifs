import { useState } from "react";
import "./Tag.css";
import Loader from "./Loader";

import useGif from "../hooks/useGif";


const Tag = () => {
  const [tag, setTag] = useState("");
  const { gif, loading, fetchData } = useGif(tag);
  // const [loading, setLoading] = useState(false);
  // const [gif, setGif] = useState("");

  // async function fetchData() {
  //   try {
  //     setLoading(true);
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //     const { data } = await axios.get(url);
  //     const gifSource = data.data.images.downsized_large.url;
  //     setGif(gifSource);
  //   } catch (err) {
  //     if (err.response?.status === 429) {
  //       toast.error("Too many requests! Please wait a bit.");
  //     } else {
  //       console.error(err);
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  const changeHandler = (event) => setTag(event.target.value);

  // useEffect(() => {
  //   fetchData(); // only once when component mounts
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div className="tag-gif-container">
      <h2>
        <u>A Random {tag} GIF</u>
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
