import React, { Fragment, useState } from "react";
import "./searchBar.css";

function Searchbar({ search, placeHolder, data }) {
  const [query, setQuery] = useState('');

  const inputChangeHandler = (event) => {
    setQuery(event.target.value);
    search(event.target.value);
  }

  const keyUpHandler = (event) => {
    if (event.key === 'Enter') {
      search(query);
    }
  }

  return (
    <Fragment>
      <div className="container-search">
        <div className="search">
          <div className="searchInput">
            <input placeholder="Search Courses" value={query} onChange={inputChangeHandler} onKeyUp={keyUpHandler} />
            <div className="searchIcon"></div>
            <div className="dataResult"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );

}

export default Searchbar;

