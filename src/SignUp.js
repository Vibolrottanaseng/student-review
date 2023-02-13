import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl'
import { InputLabel } from '@mui/material';
import NativeSelect from '@mui/material/NativeSelect'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const theme = createTheme();

export default function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const [Faculty, setFaculty] = React.useState('');

    const handleChange = (event) => {
        setFaculty(event.target.value);
    }
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'error.main' }}>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="lastName"
                                    label="First Name"
                                    // type="last"
                                    type="text"
                                    id="lastName"
                                    autoComplete="family-name"
                                    variant='standard'
                                    autoFocus
                                    color="error"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="lastName"
                                    label="Last Name"
                                    // type="last"
                                    type="text"
                                    id="lastName"
                                    autoComplete="family-name"
                                    variant='standard'
                                    autoFocus
                                    color="error"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="id"
                                    label="ID"
                                    type="text"
                                    id="email"
                                    autoComplete="id"
                                    variant='standard'
                                    autoFocus
                                    color="error"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl required variant="standard" sx={{ minWidth: 420 }}>
                                    <InputLabel id="demo-simple-select-standard-label">Faculty</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={Faculty}
                                        onChange={handleChange}
                                        label="Faculty"
                                        color="error"
                                    >
                                        <MenuItem value={'MSME'}>School of Management and Economics</MenuItem>
                                        <MenuItem value={'AR'}>School of Architechture and Desing</MenuItem>
                                        <MenuItem value={'VMS'}>School of Science and Technlogy</MenuItem>
                                        <MenuItem value={'CA'}>School of Communication Art</MenuItem>
                                        <MenuItem value={'NS'}>School of Nursing Science</MenuItem>
                                        <MenuItem value={'VME'}>School of Engineering</MenuItem>
                                        <MenuItem value={'BA'}>School of Business</MenuItem>
                                        <MenuItem value={'ART'}>School of Art</MenuItem>
                                        <MenuItem value={'MU'}>School of Music</MenuItem>
                                        <MenuItem value={'LA'}>School of Law</MenuItem>
                                    </Select>
                                </FormControl>
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
                                    autoComplete="current-password"
                                    variant="standard"
                                    color="error"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="error"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>

                    </Box>
                </Box>
            </Container>
        </ThemeProvider >
    );
}