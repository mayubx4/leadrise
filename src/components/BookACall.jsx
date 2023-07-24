import React from 'react';
import { Paper, TextField, Typography, Button } from '@material-ui/core';
import useStyles from '../themes/BookCallStyles';

const BookACall = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.mainTextDiv}>
        <Typography className={classes.mainHead}>Lorem Ipsum</Typography>
        <Typography className={classes.subText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book.
        </Typography>
      </div>
      <div>
        <Paper className={classes.bookPaper}>
          <div className={classes.bookCallDiv}>
            <div className={classes.textFieldDiv}>
              <Typography className={classes.bookCall}>Book a call</Typography>
              <Typography className={classes.bookText}>
                Lorem Ipsum is simply
                <br /> dummy text of the printing
              </Typography>
              <TextField variant="outlined" className={classes.textField} placeholder="Email" type="text" />
              <TextField variant="outlined" className={classes.textField} placeholder="Name" type="text" />
              <TextField variant="outlined" className={classes.textField} placeholder="Phone Number" type="text" />
            </div>
            <div className={classes.tableDiv}>
              <table className={classes.tableTime}>
                <tbody>
                  <tr>
                    <td className={classes.tdTime}>3pm</td>
                  </tr>
                  <tr>
                    <td className={classes.tdTime}>4pm</td>
                  </tr>
                  <tr>
                    <td className={classes.tdTime}>5pm</td>
                  </tr>
                  <tr>
                    <td className={classes.tdTime}>6pm</td>
                  </tr>
                  <tr>
                    <td className={classes.tdTime}>7pm</td>
                  </tr>
                  <tr>
                    <td className={classes.tdTime}>8pm</td>
                  </tr>
                  <tr>
                    <td className={classes.tdTime}>9pm</td>
                  </tr>
                </tbody>
              </table>
              <table className={classes.table}>
                <tbody>
                  <tr>
                    <td className={classes.td}> </td>
                    <td className={classes.td2}> </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <Button className={classes.bookBtn}>Book</Button>
                    </td>
                    <td className={classes.td2}>
                      <Button className={classes.bookBtn1} disabled>
                        {' '}
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}> </td>
                    <td className={classes.td2}> </td>
                  </tr>
                  <tr>
                    <td className={classes.td}> </td>
                    <td className={classes.td2}> </td>
                  </tr>
                  <tr>
                    <td className={classes.td}> </td>
                    <td className={classes.td2}> </td>
                  </tr>
                  <tr>
                    <td className={classes.td}> </td>
                    <td className={classes.td2}> </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default BookACall;
