import { useEffect, useState } from "react";
import CardList from "../components/CardList";
import { IRobot } from "../types/Data.types";
import "./App.css";

function App() {
  const [robots, setRobots] = useState<IRobot[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  return !robots.length ? (
    <h1 className='tc'>Loading...</h1>
  ) : (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <CardList robots={robots} />
    </div>
  );
}

export default App;
