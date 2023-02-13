import React, { Fragment } from "react";
import Header from "./Components/layouts/Header/Header.js";
import Dropdown from "./Components/UI/dropdown";
import Searchbar from "./Components/UI/searchBar";
import abac from "./assets/abac.png";
import Card from "./Components/layouts/Card/card.js";

function BrowseCourse() {
  fetch('http://20.219.131.156:8000/api/get-course')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });

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
  return (
    <Fragment>
      <Header />
      <div className="image-container">
        <img className="image" src={abac} alt="abac" />
      </div>
      <main>
        <Dropdown placeHolder="Choose Faculty" options={options} />
        <Searchbar />
        <Card />
      </main>
    </Fragment>
  );
}

export default BrowseCourse;
