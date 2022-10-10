import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import News from "./Components/News";
import Addition from "./Components/Addition";
import Header from "./Components/Header";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/addition" element={<Addition />} />
    </Routes>
  </Router>
);

export default App;