import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import AddWord from "./pages/AddWord";
import "../src/styles/app.css";

const App = () => {

  const [secretWordList, setWordList] = useState(["always", "language", "search", "straight", "student", "complete", "university"]);

  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/game" element={<Game secretWordList={secretWordList}/>} />

        <Route path="/addWord" element={<AddWord secretWordList={secretWordList} setWordList={setWordList}/>} />

      </Routes>
    </Router>
  );
}
export default App;