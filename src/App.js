import React from "react";
import { Routes, Route } from 'react-router-dom';
import BrowseCourse from "./BrowseCourse.js";
import ReviewForm from "./ReviewForm.js";
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BrowseCourse />} />
        <Route path="form" element={<ReviewForm />} />
      </Routes>
    </div>
  );
}

export default App;

