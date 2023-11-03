import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { addData } from '../../services/axios.service';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logedin } from './auth.Slice';
import SignInWithGoogle from '../../components/SignIn.With.google';
import Navlogo from '../../components/Navlogo/Navlogo';

const defaultTheme = createTheme();


export default function SignIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [data, setdata] = useState({
    email: '',
    password: ''
  })


  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await addData('users/login', data)
    console.log(response)
    dispatch(logedin(response))
    navigate('/')
  }


  return (
    <>
      <Navlogo />
      <ThemeProvider theme={defaultTheme}>
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
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setdata({ ...data, email: e.target.value })}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setdata({ ...data, password: e.target.value })}

              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <SignInWithGoogle />

                </Grid>
                <Grid  className='text-center mt-[20px]  ms-20'>
                  <NavLink to="/signUp">
                    Dont Have an Account ? Sign up
                  </NavLink>
                </Grid>



              </Grid>

            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>

  );
}