import React, { Fragment, useEffect, useState } from "react";
import Header from "./Components/layouts/Header/Header.js";
import Dropdown from "./Components/UI/dropdown";
import Searchbar from "./Components/UI/searchBar";
import abac from "./assets/abac.png";
import Card from "./Components/layouts/Card/card.js";

const options = [
  { value: "NUR", label: "Vincent Mary School of Management and Economics" },
  { value: "ARC", label: "Montfort Del Rosario School of Architecture and Design" },
  { value: "VMS", label: "Vincent Mary School of Science and Technology" },
  { value: "CA", label: "Albert Laurance School of Communication Art" },
  { value: "NUR", label: "Bernadette de Lourdes School of Nursing Science" },
  { value: "VME", label: "Vincent Mary School of Engineering" },
  { value: "MSME", label: "Martin de Tours School of Management and Economics" },
  { value: "Art", label: "Theodore Maria School of Arts" },
  { value: "MU", label: "Louis Nobiron School of Music" },
  { value: "LAW", label: "Thomas Aquinas chool of Law" },
];

function BrowseCourse() {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchedCourses, setSearchedCourses] = useState([]);

  useEffect(() => {
    fetch('http://20.219.131.156:8000/api/v1/get-course')
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
        setFilteredCourses(data);
        setSearchedCourses(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const filterFaculty = (option) => {
    const filteredCourses = courses.filter(course => course.faculty_name.toLowerCase() === option.toLowerCase());
    setFilteredCourses(filteredCourses);
    search('');
  }

  const search = (query) => {
    const result = [];
    filteredCourses.forEach(course => {
      if (course.course_name.toLowerCase().includes(query) || course.course_code.toLowerCase().includes(query)) {
        result.push(course);
      }
    });
    setSearchedCourses(result);
  }

  return (
    <Fragment>
      <Header />
      <div className="image-container">
        <img className="image" src={abac} alt="abac" />
      </div>
      <main>
        <Dropdown placeHolder="Choose Faculty" options={options} filterFaculty={filterFaculty} />
        <Searchbar search={search} />
        <Card courses={searchedCourses} />
      </main>
    </Fragment>
  );
}

export default BrowseCourse;
