import "./Random.css";
import Loader from "./Loader";
import useGif from "../hooks/useGif";


const RandomWithHook = () => {
  const { gif, loading, fetchData } = useGif();

  

  function clickHandler() {
    fetchData();
  }
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

      <button onClick={clickHandler}>Generate</button>
    </div>
  );
};

export default RandomWithHook;
