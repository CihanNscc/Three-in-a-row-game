import "./App.css";
import { Routes, Route } from "react-router-dom";
import SampleGame from "./Pages/SampleGame";
import RandomGame from "./Pages/RandomGame";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sample" element={<SampleGame />} />
        <Route path="/random" element={<RandomGame />} />
      </Routes>
    </>
  );
}

export default App;
