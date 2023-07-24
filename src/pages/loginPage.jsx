import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import {
  Paper,
  Typography,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Link,
  InputAdornment,
} from '@material-ui/core';
import useStyles from '../themes/LoginStyles';
import google from '../assets/images/google.svg';
import logo from '../assets/images/logo.svg';

const LoginPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  document.getElementsByTagName('body')[0].style.backgroundColor = '#F8F8F8';

  return (
    <div className={classes.root}>
      <Helmet>
        <title>SignIn - Leadrise by Template On Demand</title>
      </Helmet>
      <div>
        <Paper elevation={0} className={classes.paper}>
          <Typography className={classes.heading} onClick={() => {navigate('/')}}>
            <img src={logo} alt="logo" />
            leadrise
          </Typography>
          <Typography className={classes.signText}>Sign in</Typography>
          <div>
            <Typography className={classes.welcomeTxt}>👋 Welcome back. Lorem Ipsum is simply dummy text.</Typography>
          </div>
          <div>
            <Button variant="contained" disableTouchRipple className={classes.googleButton}>
              <img src={google} alt="google-logo" className={classes.googleImg} />
              Sign in with Google
            </Button>
          </div>
          <div className={classes.lineDiv}>
            <div className={classes.line} />
            <Typography className={classes.lineText}>or</Typography>
            <div className={classes.line} />
          </div>
          <div>
            <Typography className={classes.label}>Email</Typography>
            <TextField className={classes.textFields} variant="outlined" />
          </div>
          <div>
            <Typography className={classes.label}>Password</Typography>
            <TextField
              className={classes.textFields}
              variant="outlined"
              type="password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Link href="/" className={classes.signUpLnk}>
                      Forgot?
                    </Link>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className={classes.checkBox}>
            <FormControlLabel control={<Checkbox />} label="Remember me?" />
          </div>
          <div>
            <Button disableTouchRipple className={classes.signInButton}>
              Sign in
            </Button>
          </div>
        </Paper>
        <Typography className={classes.signUp}>
          No account?{' '}
          <Link href="/" className={classes.signUpLnk}>
            Sign up
          </Link>
        </Typography>
      </div>
    </div>
  );
};

export default LoginPage;
