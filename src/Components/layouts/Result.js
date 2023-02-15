import * as React from 'react';
import { Fragment } from 'react';
import Header from './Header/Header';
import "./Result.css"


function Result() {
    return (
        <Fragment>
            <Header />
            <div className='course-container'>
                <div className='course-code'>
                    CSX 3001
                    <div className='course-title'>
                        Fundamental of Computer Programming
                    </div>
                </div>
                <div className='faculty'>
                    Vincent Mary School of Science and Technology
                </div>
                <hr className='hr1' />


                <div className='summary'>

                    Summary
                </div>
            </div>
        </Fragment >
    );
}

export default Result;