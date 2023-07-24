import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    fontFamily: 'Raleway',
    fontSize: '56px',
    fontWeight: 'bold',
    marginBottom: '33px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '28px',
      textAlign: 'center',
    },
  },
  text: {
    fontFamily: 'Quicksand',
    fontSize: '20px',
    width: '940px',
    marginBottom: '33px',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '351px',
    },
  },
  textField: {
    width: '420px',
    '& .MuiOutlinedInput-root': {
      height: '55px',
      borderRadius: '6px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '334px',
      marginLeft: '25px',
    },
  },
  btn: {
    width: '150px',
    height: '55px',
    backgroundColor: '#F7C663',
    borderRadius: '6px',
    marginLeft: '20px',
    fontFamily: 'Quicksand',
    fontSize: '18px',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#F7C663',
    },
    [theme.breakpoints.down('sm')]: {
      width: '334px',
      marginTop: '12px',
      marginLeft: '25px',
    },
  },
  btnPricing: {
    width: '150px',
    height: '55px',
    backgroundColor: '#F7C663',
    borderRadius: '6px',
    marginLeft: '20px',
    fontFamily: 'Quicksand',
    fontSize: '18px',
    fontWeight: 'bold',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#F7C663',
    },
    [theme.breakpoints.down('sm')]: {
      width: '334px',
      marginTop: '12px',
      marginLeft: '25px',
    },
  },
  rootCTA: {
    marginTop: '120px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default useStyles;
