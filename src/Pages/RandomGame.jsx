import { useEffect, useState } from "react";
import axios from "axios";
import Board from "../components/Board";

function RandomGame() {
  const [randomGrid, setRandomGrid] = useState([]);

  const randomUrl = "https://prog2700.onrender.com/threeinarow/random";

  useEffect(() => {
    axios.get(randomUrl).then((response) => {
      setRandomGrid(response.data.rows);
    });
    console.log("useEffect executed.");
  }, []);

  const handleNewGameClick = () => {
    axios.get(randomUrl).then((response) => {
      setRandomGrid(response.data.rows);
    });
  };

  return (
    <>
      <Board data={randomGrid} newGameClick={handleNewGameClick} />
    </>
  );
}

export default RandomGame;
