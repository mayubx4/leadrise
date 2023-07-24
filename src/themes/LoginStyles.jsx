import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    [theme.breakpoints.down('xl')]: {
      height: '100vh',
    },
  },
  paper: {
    width: '480px',
    height: '560px',
    marginBottom: '20px',
    marginTop: '40px',
    [theme.breakpoints.down('sm')]: {
      width: '352px',
      height: '700px',
      marginBottom: '10px',
      marginTop: '20px',
    },
  },
  heading: {
    fontFamily: 'Quicksand',
    fontSize: '26px',
    fontWeight: 'bold',
    paddingTop: '30px',
    cursor: 'pointer',
  },
  signText: {
    fontFamily: 'Quicksand',
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: '20px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '30px',
    },
  },
  welcomeTxt: {
    fontFamily: 'Quicksand',
    fontSize: '18px',
    fontWeight: '500',
    width: '400px',
    marginTop: '10px',
    marginLeft: '40px',
    [theme.breakpoints.down('sm')]: {
      width: '194px',
      marginLeft: '80px',
    },
  },
  googleButton: {
    fontFamily: 'Quicksand',
    fontSize: '14px',
    width: '400px',
    height: '40px',
    backgroundColor: '#fff',
    textTransform: 'capitalize',
    margin: '15px 0',
    '&:hover': {
      backgroundColor: '#fff',
    },
    [theme.breakpoints.down('sm')]: {
      width: '307px',
      margin: '30px 0',
    },
  },
  googleImg: {
    marginRight: '10px',
  },
  lineDiv: {
    marginBottom: '15px',
  },
  lineText: {
    fontFamily: 'Quicksand',
    fontSize: '14px',
    display: 'inline-block',
    margin: '5px 13px',
  },
  line: {
    height: '1px',
    width: '180px',
    display: 'inline-block',
    backgroundColor: '#EDEDED',
    marginBottom: '3px',
    [theme.breakpoints.down('sm')]: {
      width: '141px',
    },
  },
  signInButton: {
    width: '400px',
    height: '40px',
    fontFamily: 'Quicksand',
    fontWeight: 'bold',
    backgroundColor: '#F7C663',
    borderRadius: '6px',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: '#F7C663',
    },
    [theme.breakpoints.down('sm')]: {
      width: '308px',
      marginTop: '25px',
    },
  },
  label: {
    fontFamily: 'Quicksand',
    fontSize: '14px',
    textAlign: 'left',
    marginLeft: '40px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '25px',
      marginTop: '20px',
    },
  },
  textFields: {
    width: '400px',
    marginBottom: '10px',
    '& .MuiOutlinedInput-root': {
      borderRadius: '6px',
      height: '40px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '308px',
    },
  },
  checkBox: {
    textAlign: 'left',
    margin: '0 0 10px 40px',
    [theme.breakpoints.down('sm')]: {
      margin: '25px 0 0 26px',
    },
  },
  signUpLnk: {
    color: '#F7C663 !important',
  },
}));
export default useStyles;
