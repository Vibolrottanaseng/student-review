import React from "react";
import { Routes, Route } from 'react-router-dom';
import BrowseCourse from "./BrowseCourse.js";
import ReviewForm from "./ReviewForm.js";
import './App.css';
import SignIn from "./SignIn.js";
import SignUp from "./SignUp.js";
import Result from '../src/Components/layouts/Result'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BrowseCourse />} />
        <Route path="form" element={<ReviewForm />} />
        <Route path='SignIn' element={<SignIn />} />
        <Route path='SignUp' element={<SignUp />} />
        <Route path='Result' element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;

