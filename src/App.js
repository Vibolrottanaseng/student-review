import React from "react";
import { Routes, Route } from 'react-router-dom';
import BrowseCourse from "./BrowseCourse.js";
import ReviewForm from "./ReviewForm.js";
import './App.css';
import SignInSide from "./SignIn.js";
import SignUp from "./SignUp.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BrowseCourse />} />
        <Route path="form" element={<ReviewForm />} />
        <Route path='SignIn' element={<SignInSide />} />
        <Route path='SignUp' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;

