import "./App.css";
import Random from "./components/Random";
import RandomWithHook from "./components/RandomWithHook";
import Tag from "./components/Tag";
import TagWithHook from "./components/TagWithHook";

function App() {
  return (
    <div className="app">
      <h1 className="heading">RANDOM GIFS</h1>
      <div className="gifs-container">
        {/* <Random /> */}
        <RandomWithHook />
        {/* <Tag /> */}
        <TagWithHook />
      </div>
    </div>
  );
}

export default App;
