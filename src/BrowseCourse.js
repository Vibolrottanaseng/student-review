import React, { Fragment, useEffect, useState } from "react";
import Header from "./Components/layouts/Header/Header.js";
import Dropdown from "./Components/UI/dropdown";
import Searchbar from "./Components/UI/searchBar";
import abac from "./assets/abac.png";
import Card from "./Components/layouts/Card/card.js";

const options = [
  { value: "NUR", label: "School of Management and Economics" },
  { value: "ARC", label: "School of Architecture and Design" },
  { value: "VMS", label: "School of Science and Technology" },
  { value: "CA", label: "School of Communication Art" },
  { value: "NUR", label: "School of Nursing Science" },
  { value: "VME", label: "School of Engineering" },
  { value: "MSME", label: "School of Business" },
  { value: "Art", label: "School of Arts" },
  { value: "MU", label: "School of Music" },
  { value: "LAW", label: "School of Law" },
];

function BrowseCourse() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://20.219.131.156:8000/api/get-course')
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const filterFaculty = (option) => {
    // const newCourses = courses.filter(course => course.faculty_name.toLowerCase() === option.toLowerCase());
    // setCourses(newCourses);
  }

  return (
    <Fragment>
      <Header />
      <div className="image-container">
        <img className="image" src={abac} alt="abac" />
      </div>
      <main>
        <Dropdown placeHolder="Choose Faculty" options={options} filterFaculty={filterFaculty} />
        <Searchbar />
        <Card courses={courses} />
      </main>
    </Fragment>
  );
}

export default BrowseCourse;
