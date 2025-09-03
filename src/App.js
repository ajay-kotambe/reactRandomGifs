import { useEffect } from "react";
import "./App.css";
import RandomWithHook from "./components/RandomWithHook";
import TagWithHook from "./components/TagWithHook";
import Random from "./components/Random"
import Tag from "./components/Tag"
import toast from "react-hot-toast";

function App() {
  useEffect(()=>{
    toast("Have to click on btns to generate GIFs...!")

  },[])
  return (
    <div className="app">
      <h1 className="heading">RANDOM GIFS</h1>
      <div className="gifs-container">
        <Random />
        {/* <RandomWithHook /> */}
        <Tag />
        {/* <TagWithHook /> */}
      </div>
    </div>
  );
}

export default App;
