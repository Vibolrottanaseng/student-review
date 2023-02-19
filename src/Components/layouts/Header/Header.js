import React, { Fragment } from "react";
import classes from './Header.module.css'
import BrowseCourse from "./browse-course";
import { Link } from "react-router-dom";


const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Review</h1>
            <BrowseCourse />
            <nav>
                <Link
                    href='/'
                    to='/SignUp'>
                    Register
                </Link>
            </nav>
        </header>
        {/* <div className={classes['image-container']}>
            <img className={classes.image} src={abac} alt="abac" />
        </div> */}
    </Fragment>
};

export default Header;