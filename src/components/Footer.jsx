import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from '../themes/FooterStyles';
import logo from '../assets/images/logo.svg';
import twitter from '../assets/images/twitter.png';
import linkedin from '../assets/images/linkedin.png';

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.firstTxtDiv}>
        <Typography className={classes.logo}>
          <img src={logo} alt="main-logo" width="35px" height="19px" />
          leadrise
        </Typography>
        <Typography className={classes.subText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Typography>
        <div className={classes.socialDiv}>
          <img src={twitter} alt="twitter-logo" width="25px" height="25px" className={classes.twitter} />
          <img src={linkedin} alt="linkedin-logo" width="25px" height="25px" />
        </div>
        <Typography className={classes.copyrights}>© 2021 Templateondemand.co.</Typography>
        <Typography className={classes.rightsTxt}>All rights reserved</Typography>
      </div>
      <div className={classes.scndTxtDiv}>
        <div className={classes.scndTxtDiv1}>
          <div className={classes.firstDiv}>
            <div className={classes.buttonsDiv}>
              <Typography className={classes.heading}>Lorem Ipsum</Typography>
              <div>
                <Typography className={classes.txt}>Lorem Ipsum</Typography>
                <Typography className={classes.txt}>Lorem Ipsum</Typography>
                <Typography className={classes.txt}>Lorem Ipsum</Typography>
                <Typography className={classes.txt}>Lorem Ipsum</Typography>
                <Typography className={classes.txt1}>Lorem Ipsum</Typography>
              </div>
            </div>
          </div>
          <div className={classes.firstDiv}>
            <div className={classes.buttonsDiv}>
              <Typography className={classes.heading}>Lorem Ipsum</Typography>
              <div>
                <Typography className={classes.txt}>Lorem Ipsum</Typography>
                <Typography className={classes.txt}>Lorem Ipsum</Typography>
                <Typography className={classes.txt}>Lorem Ipsum</Typography>
                <Typography className={classes.txt1}>Lorem Ipsum</Typography>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.scndTxtDiv1}>
          <div className={classes.secondDiv}>
            <div className={classes.buttonsDiv}>
              <Typography className={classes.heading}>Lorem Ipsum</Typography>
              <div>
                <Typography className={classes.txt}>Lorem Ipsum</Typography>
                <Typography className={classes.txt}>Lorem Ipsum</Typography>
                <Typography className={classes.txt}>Lorem Ipsum</Typography>
                <Typography className={classes.txt1}>Lorem Ipsum</Typography>
              </div>
            </div>
          </div>
          <div className={classes.secondDiv}>
            <div className={classes.buttonsDiv}>
              <Typography className={classes.heading}>Lorem Ipsum</Typography>
              <div>
                <Typography className={classes.txt}>Lorem Ipsum</Typography>
                <Typography className={classes.txt}>Lorem Ipsum</Typography>
                <Typography className={classes.txt}>Lorem Ipsum</Typography>
                <Typography className={classes.txt1}>Lorem Ipsum</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
