import React, { Fragment } from "react";
import Header from "./Components/layouts/Header/Header.js"
import Dropdown from "./Components/UI/dropdown";
import Searchbar from "./Components/UI/searchBar";

function App() {
  const options = [
    {value: "NUR", label:"School of Management and Economics"},
    {value: "ARC", label:"School of Architecture and Design"},
    {value: "VMS", label:"School of Science and Technology"},
    {value: "CA", label:"School of Communication Art"},
    {value: "NUR", label:"School of Nursing Science"},
    {value: "VME", label:"School of Engineering"},
    {value: "MSME", label:"School of Business"},
    {value: "Art", label:"School of Arts"},
    {value: "MU", label:"School of Music"},
    {value: "LAW", label:"School of Law"}
  ]
  return (
    <Fragment>
      <Header />
      <main>
        <Dropdown placeHolder="Choose Faculty" options={options} />  
        <Searchbar />
      </main>
    </Fragment>
  );
}

export default App;

