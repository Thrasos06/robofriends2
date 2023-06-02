import "./App.css";
import Scroll from "./components/Scroll";
import CardList from "./components/CardList";
import Searchbar from "./components/Searchbar";
import { useState, useEffect } from "react";

function App() {
  const [robots, setRobots] = useState();
  const [searchfield, setSearchfield] = useState("");
  const [buttonText, setButtonText] = useState("set=set1");
  const [bgColor1, setBgColor1] = useState("#4880EC");
  const [bgColor2, setBgColor2] = useState("#019CAD");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots?.filter((robot) => {
    return robot?.name?.toLowerCase()?.includes(searchfield?.toLowerCase());
  });

  return (
    <div
      className="tc App"
      style={{
        backgroundImage:
          "linear-gradient(to right," + bgColor1 + "," + bgColor2 + ")",
      }}
    >
      <div className="button-container">
        <button
          onClick={() => {
            setButtonText("set=set1");
            setBgColor1("#4880EC");
            setBgColor2("#019CAD");
          }}
        >
          ROBOTS
        </button>
        <button
          onClick={() => {
            setButtonText("set=set2");
            setBgColor1("#1f1f1f");
            setBgColor2("#3f1819");
          }}
        >
          MONSTERS
        </button>
        <button
          onClick={() => {
            setButtonText("set=set4");
            setBgColor1("#f25f70");
            setBgColor2("#a25075");
          }}
        >
          KITTENS
        </button>
      </div>
      <h1 className="f1">RoboFriends</h1>
      <Searchbar onSearchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} buttonText={buttonText} />
      </Scroll>
    </div>
  );
}

export default App;
