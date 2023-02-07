import React from "react";
import "./card.css";

function Card() {
    return (
        <div className="container">
            <div className="card">
                <div className="course">
                    CSX3001
                </div>
                <div className="course-title">
                    Fundamental of Computer Programming
                </div>
                <div className="faculty">
                    Vincent Mary School of Science and Technology
                </div>
                <div className="row">
                    <div className="rating">
                        Rating
                    </div>
                    <button className="see-details">
                        See Details
                    </button>
                </div>
            </div>

            <div className="card">
                <div className="course">
                    CSX3001
                </div>
                <div className="course-title">
                    Fundamental of Computer Programming
                </div>
                <div className="faculty">
                    Vincent Mary School of Science and Technology
                </div>
                <div className="row">
                    <div className="rating">
                        Rating
                    </div>
                    <button className="see-details">
                        See Details
                    </button>
                </div>
            </div>

            <div className="card">
                <div className="course">
                    CSX3001
                </div>
                <div className="course-title">
                    Fundamental of Computer Programming
                </div>
                <div className="faculty">
                    Vincent Mary School of Science and Technology
                </div>
                <div className="row">
                    <div className="rating">
                        Rating
                    </div>
                    <button className="see-details">
                        See Details
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;