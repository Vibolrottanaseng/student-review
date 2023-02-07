import React from "react";
import Header from "./Components/layouts/Header/Header";
import Rating from "@mui/material/Rating";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Questions from "./questions.json";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";

// import "./tailwind.css";
import "./App.css";

export default function ReviewForm() {
  const [value, setValue] = React.useState(2);
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
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
          <p className="question">Choose 3 tags to describe the course</p>
          <Stack direction="row" spacing={1}>
            {Questions.chips.map((chip) => {
              return <Chip label={chip.chip} onClick={handleClick} />;
            })}
          </Stack>
          <p className="question">Write a review</p>
          {/* <TextField id="filled-basic" label="What would you like other student to know about this course?" variant="filled" /> */}

          <textarea placeholder="     What would you like other student to know about this course?"></textarea>
          <div className="anonymous">
            <Switch />
            <p>Review anonymously</p>
          </div>
          <div className="button-position">
            <button className="button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
