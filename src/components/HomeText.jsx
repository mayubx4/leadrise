import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from '../themes/HomeTextStyles';
import logo1 from '../assets/images/1.png';
import logo2 from '../assets/images/2.png';
import logo3 from '../assets/images/3.png';

const HomeText = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.TextDiv}>
        <div className={classes.imgDiv}>
          <img src={logo1} alt="logo1" width="24px" height="24px" className={classes.Img} />
        </div>
        <Typography className={classes.heading}>Lorem Ipsum is simply dummy text of the printing.</Typography>
        <Typography className={classes.subText}>
          Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a
          galley of type and scrambled it to make a type specimen book.
        </Typography>
      </div>
      <div className={classes.TextDiv}>
        <div className={classes.imgDiv}>
          <img src={logo2} alt="logo1" width="24px" height="24px" className={classes.Img} />
        </div>
        <Typography className={classes.heading}>Lorem Ipsum is simply dummy text of the printing.</Typography>
        <Typography className={classes.subText}>
          Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a
          galley of type and scrambled it to make a type specimen book.
        </Typography>
      </div>
      <div className={classes.thirdTextDiv}>
        <div className={classes.imgDiv}>
          <img src={logo3} alt="logo1" width="24px" height="24px" className={classes.Img} />
        </div>
        <Typography className={classes.heading}>Lorem Ipsum is simply dummy text of the printing.</Typography>
        <Typography className={classes.subText}>
          Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a
          galley of type and scrambled it to make a type specimen book.
        </Typography>
      </div>
    </div>
  );
};

export default HomeText;
