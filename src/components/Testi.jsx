import React from 'react';
import { Typography } from '@material-ui/core';
import hyundai from '../assets/images/hyundai.svg';
import testiImage from '../assets/images/img.webp';
import useStyles from '../themes/TestiStyles';

const Testi = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.mainHeading}>Lorem Ipsum is simply dummy text</Typography>
        <Typography className={classes.subText}>
          Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
        </Typography>
      </div>
      <div className={classes.imgTextDiv}>
        <div className={classes.textDiv}>
          <img src={hyundai} alt="hyundai" width="107.5px" height="65px" />
          <Typography className={classes.text}>
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially unchanged.
          </Typography>
          <Typography className={classes.smallText}>Lorem Ipsum</Typography>
        </div>
        <img src={testiImage} alt="testiImg" className={classes.Img} height="300px" width="300px" />
      </div>
    </div>
  );
};

export default Testi;
