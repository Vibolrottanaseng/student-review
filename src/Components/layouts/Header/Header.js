import React, { Fragment } from "react";
import classes from './Header.module.css'
import BrowseCourse from "./browse-course";


const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Review</h1>
            <BrowseCourse />
        </header>
        {/* <div className={classes['image-container']}>
            <img className={classes.image} src={abac} alt="abac" />
        </div> */}
    </Fragment>
};

export default Header;