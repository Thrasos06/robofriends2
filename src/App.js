import "./App.css";
import Scroll from "./components/Scroll";
import CardList from "./components/CardList";
import Searchbar from "./components/Searchbar";
import { useState, useEffect } from "react";

function App() {
  const [robots, setRobots] = useState();
  const [searchfield, setSearchfield] = useState("");
  const [buttonText, setButtonText] = useState("set=set1");
  const [bgColor1, setBgColor1] = useState();
  const [bgColor2, setBgColor2] = useState();

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
      className="App"
      style={{ backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)" }}
    >
      <div className="button-container">
        <button onClick={() => setButtonText("set=set1")}>ROBOTS</button>
        <button onClick={() => setButtonText("set=set2")}>MONSTERS</button>
        <button onClick={() => setButtonText("set=set4")}>KITTENS</button>
      </div>
      <h1 className="f1">RoboFriends</h1>
      <Searchbar onSearchChange={onSearchChange} />

      <CardList robots={filteredRobots} buttonText={buttonText} />
    </div>
  );
}

export default App;
