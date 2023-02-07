import React, { Fragment } from "react";
import "./searchBar.css";


function Searchbar({ placeHolder, data }) {
  return (
    <Fragment>
      <div className="container-search">
        <div className="search">
          <div className="searchInput">
            <input placeholder="Search Courses" />
            <div className="searchIcon">

            </div>
            <div className="dataResult"></div>


          </div>
        </div>
      </div>
    </Fragment>
  );

}

export default Searchbar;

