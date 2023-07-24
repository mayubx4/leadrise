import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '185.5px',
    marginLeft: '120px',
    marginRight: '120px',
    marginBottom: '191.5px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
      marginBottom: '100px',
    },
  },
  heading: {
    fontFamily: 'Raleway',
    fontSize: '46px',
    fontWeight: 'bold',
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '28px',
      textAlign: 'center',
    },
  },
  credit: {
    fontFamily: 'Quicksand',
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#888888',
    marginTop: '40px',
    marginBottom: '40px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
      textAlign: 'center',
    },
  },
  text: {
    fontFamily: 'Quicksand',
    fontSize: '20px',
    marginBottom: '61.5px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      textAlign: 'center',
    },
  },
  border: {
    border: '1px solid #888888',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  paymentTxt: {
    fontFamily: 'Quicksand',
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#888888',
    marginTop: '50.5px',
    marginBottom: '51.5px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
      width: '324px',
    },
  },
}));

export default useStyles;
