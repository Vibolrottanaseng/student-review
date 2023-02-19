import * as React from "react";
import { useState } from "react";
import axiosInstance from "./axios";
import { useNavigate } from "react-router-dom";
// Material UI
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import { InputLabel } from "@mui/material";
import NativeSelect from "@mui/material/NativeSelect";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Link from "@mui/material/Link";
import Alert from "@mui/material/Alert";

const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();

  const initialFormData = Object.freeze({
    firstName: "",
    lastName: "",
    studentId: "",
    email: "",
    password: "",
    confirmPassword: "",
    faculty: "",
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    console.log(Faculty);

    axiosInstance
      .post("register/", {
        email: formData.email,
        password: formData.password,
        password2: formData.confirmPassword,
        first_name: formData.firstName,
        last_name: formData.lastName,
        student_id: formData.studentId,
        faculty: "1",
      })
      .then((res) => {
        navigate("/SignIn");
        if (res.status == 201) {
          alert("Account Created Successfully.");
        }
        console.log(res);
        console.log(res.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          alert(JSON.stringify(error.response.data));
        }
      });
  };

  const [Faculty, setFaculty] = React.useState("");

  const handleFacultyChange = (event) => {
    setFaculty(event.target.value);
  };

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "error.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            // onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="firstName"
                  label="First Name"
                  id="firstName"
                  autoComplete="firstname"
                  variant="standard"
                  autoFocus
                  color="error"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="lastName"
                  label="Last Name"
                  id="lastName"
                  autoComplete="Family Name"
                  variant="standard"
                  autoFocus
                  color="error"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="studentId"
                  label="Student ID Number"
                  type="text"
                  id="studentId"
                  autoComplete="email"
                  variant="standard"
                  autoFocus
                  color="error"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl required variant="standard" sx={{ minWidth: 420 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Faculty
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={Faculty}
                    onChange={handleFacultyChange}
                    label="Faculty"
                    color="error"
                  >
                    <MenuItem value={"MSME"}>
                      School of Management and Economics
                    </MenuItem>
                    <MenuItem value={"AR"}>
                      School of Architechture and Desing
                    </MenuItem>
                    <MenuItem value={"VMS"}>
                      School of Science and Technlogy
                    </MenuItem>
                    <MenuItem value={"CA"}>
                      School of Communication Art
                    </MenuItem>
                    <MenuItem value={"NS"}>School of Nursing Science</MenuItem>
                    <MenuItem value={"VME"}>School of Engineering</MenuItem>
                    <MenuItem value={"BA"}>School of Business</MenuItem>
                    <MenuItem value={"ART"}>School of Art</MenuItem>
                    <MenuItem value={"MU"}>School of Music</MenuItem>
                    <MenuItem value={"LA"}>School of Law</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="email"
                  label="AU Email Address"
                  type="email"
                  id="email"
                  autoComplete="email"
                  variant="standard"
                  color="error"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="password"
                  variant="standard"
                  color="error"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="confirm-password"
                  variant="standard"
                  color="error"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="error"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
