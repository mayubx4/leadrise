import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '380px',
    backgroundColor: '#000000',
    display: 'flex',
    flexDirection: 'row',
    color: '#fff',
    marginTop: '310px',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: '59px',
      flexDirection: 'column-reverse',
      height: '1000px',
      padding: '20px',
    },
  },
  firstTxtDiv: {
    marginTop: '80px',
  },
  scndTxtDiv: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-between',
    },
  },
  scndTxtDiv1: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  logo: {
    fontFamily: 'Quicksand',
    fontSize: '26px',
    fontWeight: 'bold',
  },
  subText: {
    fontFamily: 'Quicksand',
    fontSize: '16px',
    marginTop: '26px',
    width: '275px',
  },
  socialDiv: {
    marginTop: '20px',
  },
  twitter: {
    marginRight: '15px',
  },
  copyrights: {
    fontFamily: 'Quicksand',
    fontSize: '16px',
    marginTop: '12px',
  },
  rightsTxt: {
    fontFamily: 'Quicksand',
    fontSize: '16px',
    marginTop: '12px',
  },
  buttonsDiv: {
    marginLeft: '90px',
    marginTop: '80px',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      margin: 0,
    },
  },
  firstDiv: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      margin: '20px 0',
    },
  },
  secondDiv: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      margin: '20px 0',
    },
  },
  heading: {
    fontFamily: 'Quicksand',
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '30px',
  },
  txt: {
    fontFamily: 'Quicksand',
    fontSize: '16px',
    marginBottom: '15px',
  },
  txt1: {
    fontFamily: 'Quicksand',
    fontSize: '16px',
  },
}));

export default useStyles;
