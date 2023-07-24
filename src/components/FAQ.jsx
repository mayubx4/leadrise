import React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import useStyles from '../themes/FAQstyles';

const FAQ = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.heading}>Frequently Asked Questions</Typography>
      <Accordion elevation={0}>
        <AccordionSummary>
          <Typography className={classes.credit}>Do I need a credit card to sign up?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.text}>
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary>
          <Typography className={classes.paymentTxt}>How is the payment processed?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.text}>
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary>
          <Typography className={classes.paymentTxt}>How is the payment processed?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.text}>
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary>
          <Typography className={classes.paymentTxt}>Still have questions?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.text}>
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FAQ;
