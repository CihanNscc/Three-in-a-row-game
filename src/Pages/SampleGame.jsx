import { useEffect, useState } from "react";
import axios from "axios";
import Board from "../components/Board";

function SampleGame() {
  const [sampleGrid, setsampleGrid] = useState([]);
  const sampleUrl = "https://prog2700.onrender.com/threeinarow/sample";

  useEffect(() => {
    axios.get(sampleUrl).then((response) => {
      setsampleGrid(response.data.rows);
    });
    console.log("useEffect executed.");
  }, []);

  return (
    <>
      <Board data={sampleGrid} />
    </>
  );
}

export default SampleGame;
