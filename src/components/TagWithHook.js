import {  useState } from "react";
import "./Tag.css";
import Loader from "./Loader";
import useGif from "../hooks/useGif";

// import useGif from "../hooks/useGif";

const TagWithHook = () => {
  const [tag, setTag] = useState("Car");
  const { gif, loading, fetchData } = useGif(tag);

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

      <input
        type="text"
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      />
      <button onClick={() => fetchData(tag)}>Generate</button>
    </div>
  );
};

export default TagWithHook;
