import React from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import useStyles from '../themes/CTAstyles';

const CTAPricing = () => {
  const classes = useStyles();

  return (
    <div className={classes.rootCTA}>
      <Typography className={classes.heading}>Lorem Ipsum is simply dummy text</Typography>
      <Typography className={classes.text}>
        Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book.
      </Typography>
      <div>
        <TextField variant="outlined" placeholder="Enter your Email Work..." className={classes.textField} />
        <Button className={classes.btnPricing} endIcon={<ArrowForwardIcon />} disableTouchRipple>
          Try it Free
        </Button>
      </div>
    </div>
  );
};

export default CTAPricing;
