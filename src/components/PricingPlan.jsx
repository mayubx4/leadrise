import React from 'react';
import { Button, Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ClearIcon from '@material-ui/icons/Clear';
import clsx from 'clsx';
import useStyles from '../themes/PricingPlanStyles';

const PricingPlan = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handlePopUp = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <div className={classes.firstBox}>
        <div className={classes.dollarDiv}>
          <Typography className={classes.dollar}>$0</Typography>
          <Typography className={classes.dollarTxt}>for teams up to 5 people</Typography>
        </div>
        <div className={classes.border} />
        <div className={classes.btnTxtDiv}>
          <Typography className={classes.Text}>
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
          </Typography>
          <Button className={classes.btn}>Try if Free</Button>
        </div>
      </div>
      <div className={classes.tabCookie}>
        <div className={clsx(classes.cookiePopup, { [classes.hidePopup]: open })}>
          <Typography className={classes.cookieText}>
            We use Cookies to improve your experience using this website.
          </Typography>
          <Typography className={classes.cookie}>Cookies Policy</Typography>
          <ClearIcon className={classes.clearIcon} onClick={handlePopUp} />
        </div>
      </div>
      <div className={classes.secondBox}>
        <div className={classes.dollarTxtDiv}>
          <div className={classes.dollarUserDiv}>
            <Typography className={classes.dollar1}>$9</Typography>
            <Typography className={classes.user}>user / month</Typography>
          </div>
          <Typography className={classes.dollarTxt2}>for teams up to 25 people</Typography>
        </div>
        <div className={classes.border2} />
        <div>
          <Typography className={classes.Text2}>
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an
          </Typography>
          <Button disableTouchRipple endIcon={<ArrowForwardIcon />} className={classes.pricingBtn}>
            Try it Free
          </Button>
        </div>
      </div>
      <div className={classes.secondBox}>
        <div className={classes.dollarTxtDiv}>
          <div className={classes.dollarUserDiv}>
            <Typography className={classes.dollar1}>$4</Typography>
            <Typography className={classes.user}>user / month</Typography>
          </div>
          <Typography className={classes.dollarTxt2}>for teams up to 50 people</Typography>
        </div>
        <div className={classes.border2} />
        <div>
          <Typography className={classes.Text2}>
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an
          </Typography>
          <Button disableTouchRipple endIcon={<ArrowForwardIcon />} className={classes.pricingBtn}>
            Try it Free
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
