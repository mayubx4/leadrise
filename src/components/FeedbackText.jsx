import React from 'react';
import { Typography, Paper, ButtonGroup, Button, TextField, InputAdornment } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import useStyles from '../themes/FeedbackTextStyles';
import R1 from '../assets/images/R1.png';
import R2 from '../assets/images/R2.png';
import R3 from '../assets/images/R3.png';
import R4 from '../assets/images/R4.png';
import R5 from '../assets/images/R5.png';
import analytics from '../assets/images/analytics.png';
import gmail from '../assets/images/gmail.png';
import stripe from '../assets/images/stripe.png';
import wave from '../assets/images/wave.png';
import popper from '../assets/images/popper.png';
import smile from '../assets/images/smile.png';

const FeedbackText = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.mainTextDiv}>
        <Typography className={classes.heading}>Lorem Ipsum is simply dummy text</Typography>
        <Typography className={classes.subText}>
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
        </Typography>
      </div>
      <div className={classes.feedbackDiv}>
        <div className={classes.textDiv}>
          <Typography className={classes.mainHead}>Lorem Ipsum</Typography>
          <Typography className={classes.secondaryText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Typography>
        </div>
        <Paper className={classes.paper} elevation={5}>
          <Typography className={classes.feedbackHead}>Feedback</Typography>
          <Typography className={classes.feedbackText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
          </Typography>
          <ButtonGroup className={classes.ratingsGroup}>
            <Button>
              <img src={R1} alt="r1-logo" width="23px" height="23px" />
            </Button>
            <Button>
              <img src={R2} alt="r2-logo" width="23px" height="23px" />
            </Button>
            <Button>
              <img src={R3} alt="r3-logo" width="23px" height="23px" />
            </Button>
            <Button>
              <img src={R4} alt="r4-logo" width="23px" height="23px" />
            </Button>
            <Button>
              <img src={R5} alt="r5-logo" width="23px" height="23px" />
            </Button>
          </ButtonGroup>
          <TextField
            className={classes.textField}
            placeholder="Add a comment"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" className={classes.addIcon}>
                  <AddIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button className={classes.button} disableTouchRipple>
            Send
          </Button>
        </Paper>
      </div>
      <div className={classes.paperTextDiv}>
        <div>
          <Paper className={classes.vistorPaper}>
            <div className={classes.analyticsImg}>
              <img src={analytics} alt="analytics" width="33px" height="37px" className={classes.Img} />
            </div>
            <div className={classes.visitorDiv}>
              <Typography className={classes.mainheading}>New visitor</Typography>
              <img src={wave} alt="wave" className={classes.Wave} width="38px" height="38px" />
              <Typography className={classes.time}>1:03 am</Typography>
              <Typography className={classes.text}>
                A new visitor is on your website on the <strong>Pricing page</strong>
              </Typography>
            </div>
          </Paper>
          <Paper className={classes.vistorPaper}>
            <div className={classes.stripeImg}>
              <img src={stripe} alt="stripe-logo" width="42px" height="18px" className={classes.strImg} />
            </div>
            <div className={classes.visitorDiv}>
              <Typography className={classes.mainheading}>New order</Typography>
              <img src={popper} alt="popper-logo" className={classes.Wave} width="38px" height="38px" />
              <Typography className={classes.time}>1:19 am</Typography>
              <Typography className={classes.text}>You converted this visitor!</Typography>
            </div>
          </Paper>
          <Paper className={classes.vistorPaper}>
            <div className={classes.gmailImg}>
              <img src={gmail} alt="gmail-logo" width="34px" height="25.7px" className={classes.mailImg} />
            </div>
            <div className={classes.visitorDiv}>
              <Typography className={classes.mainheading}>New email</Typography>
              <img src={smile} alt="smile-logo" className={classes.Wave} width="38px" height="38px" />
              <Typography className={classes.time}>1:23 am</Typography>
              <Typography className={classes.text}>The new customer just sent you an email</Typography>
            </div>
          </Paper>
        </div>
        <div className={classes.txtDiv}>
          <Typography className={classes.mainText}>Lorem Ipsum</Typography>
          <Typography className={classes.mainSubText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default FeedbackText;
