import React from "react";
import Header from "./Components/layouts/Header/Header";
import Rating from "@mui/material/Rating";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Questions from "./questions.json";

// import "./tailwind.css";
import "./App.css";

export default function ReviewForm() {
  const [value, setValue] = React.useState(2);
  const [selectedValue, setSelectedValue] = React.useState("a");
  console.log("questions it is", Questions);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <Header />
      <div className="form">
        <div className="form-header">Review Course</div>
        <hr />
        <div className="flex-container">
          <div>
            <p className="form-header">
              CSX3001 Fundamental of Computer Programming
            </p>

            <p className="sub-title">
              Vincent Mary School of Science and Technology
            </p>
          </div>

          <div className="detail">
            <p>Semester: 1/2021</p>
            <p>Professor : Dr. Kwankamol Nongpong</p>
            <p>Section: 541</p>
          </div>
        </div>
        <div className="questions">
          <p className="question">
            Overall experience <span>*</span>
          </p>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <p className="question">
            For your field of study, what type of course is it?
          </p>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              {Questions.fields.map((f) => {
                return (
                  <FormControlLabel
                    value={f.field}
                    control={<Radio color="default" />}
                    label={f.field}
                    key={f.id}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
          {Questions.questions.map((ques) => {
            return (
              <>
                <p className="question" key={ques.id}>
                  {ques.q}
                </p>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </>
            );
          })}
          <p className="question">
            Please rate level of difficulty in this course.
          </p>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              {Questions.difficulties.map((lev) => {
                return (
                  <FormControlLabel
                    value={lev.level}
                    control={<Radio color="default" />}
                    label={lev.level}
                    key={lev.id}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
          <p className="question">
            Evaluation Methods <span className="grey">(Please choose only 3 tags)</span>
          </p>
        </div>
      </div>
    </div>
  );
}
