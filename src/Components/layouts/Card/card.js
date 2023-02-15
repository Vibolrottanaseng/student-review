import React from "react";
import "./card.css";
import Rating from '@mui/material/Rating';

function Card({ courses }) {
    return (
        <div className="container">
            {courses.map(course => (
                <div className="card">
                    <div className="course">
                        {course.course_code}
                    </div>
                    <div className="course-title">
                        {course.course_name}
                    </div>
                    <div className="faculty">
                        {course.faculty_name}
                    </div>
                    <div className="row">
                        <div className="rating">
                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                        </div>
                        <button className="see-details">
                            See Details
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card;