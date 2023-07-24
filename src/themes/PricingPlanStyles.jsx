import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '90px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstBox: {
    width: '957px',
    height: '369px',
    backgroundColor: '#1A1A1A',
    borderRadius: '27px',
    color: '#fff',
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '348.5px',
      height: 'auto',
      paddingBottom: '20px',
      borderRadius: '6px',
    },
  },
  dollarDiv: {
    marginTop: '112px',
    marginLeft: '89px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginTop: '15px',
      marginBottom: '15px',
    },
  },
  dollar: {
    fontFamily: 'Raleway',
    fontSize: '50px',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '142px',
    },
  },
  dollar1: {
    fontFamily: 'Raleway',
    fontSize: '50px',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '20px',
      marginBottom: '14px',
    },
  },
  dollarTxt: {
    fontFamily: 'Quicksand',
    fontSize: '22px',
    fontWeight: 'bold',
    width: '138px',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginLeft: '110px',
    },
  },
  border: {
    border: '1px solid #707070',
    display: 'inline',
    marginLeft: '96.5px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  btnTxtDiv: {
    marginLeft: '70.5px',
    marginTop: '64px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginTop: '15.5px',
    },
  },
  Text: {
    fontFamily: 'Quicksand',
    fontSize: '20px',
    fontWeight: 'bold',
    width: '483px',
    [theme.breakpoints.down('sm')]: {
      width: '285px',
      marginLeft: '40px',
    },
  },
  btn: {
    width: '184px',
    height: '78px',
    backgroundColor: '#F7C663',
    fontFamily: 'Quicksand',
    fontSize: '22px',
    fontWeight: 'bold',
    textTransform: 'none',
    marginTop: '49px',
    marginLeft: '130px',
    '&:hover': {
      backgroundColor: '#F7C663',
    },
    [theme.breakpoints.down('sm')]: {
      width: '334px',
      height: '56px',
      marginLeft: '7px',
    },
  },
  secondBox: {
    width: '957px',
    height: '183px',
    borderRadius: '27px',
    backgroundColor: '#CCCCCC',
    marginTop: '45.5px',
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '348.5px',
      height: 'auto',
      paddingBottom: '20px',
      borderRadius: '6px',
    },
  },
  user: {
    fontFamily: 'Quicksand',
    fontSize: '22px',
    fontWeight: 'bold',
    marginLeft: '28px',
    marginTop: '25px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '20px',
    },
  },
  dollarUserDiv: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '25px',
    marginLeft: '47px',
    width: '230px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '40px',
      width: '260px',
    },
  },
  dollarTxtDiv: {
    display: 'flex',
    flexDirection: 'column',
  },
  dollarTxt2: {
    fontFamily: 'Quicksand',
    fontSize: '22px',
    fontWeight: 'bold',
    width: '138px',
    marginLeft: '100px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '105px',
      textAlign: 'center',
    },
  },
  border2: {
    border: '1px solid #707070',
    display: 'inline',
    marginLeft: '50px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginTop: '15.5px',
    },
  },
  Text2: {
    fontFamily: 'Quicksand',
    fontSize: '20px',
    fontWeight: 'bold',
    width: '483px',
    marginTop: '61px',
    marginLeft: '70.5px',
    [theme.breakpoints.down('sm')]: {
      width: '285px',
      marginLeft: '50px',
    },
  },
  pricingBtn: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      fontFamily: 'Quicksand',
      fontSize: '18px',
      width: '334px',
      height: '56px',
      textTransform: 'none',
      backgroundColor: '#ffffff',
      borderRadius: '6px',
      marginTop: '14px',
      marginLeft: '7px',
      '&:hover': {
        backgroundColor: '#ffffff',
      },
    },
  },
  tabCookie: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cookiePopup: {
    backgroundColor: '#ffffff',
    width: '510px',
    height: '41px',
    borderRadius: '6px',
    border: '1px solid #EBEBEB',
    display: 'flex',
    position: 'fixed',
    top: '600px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  cookieText: {
    fontFamily: 'Quicksand',
    fontSize: '12px',
    marginTop: '10px',
    marginLeft: '19px',
  },
  cookie: {
    fontFamily: 'Quicksand',
    fontSize: '12px',
    fontWeight: '600',
    marginTop: '9px',
    marginLeft: '15px',
    marginRight: '15px',
    textDecoration: 'underline',
  },
  clearIcon: {
    width: '12px',
    height: '12px',
    marginTop: '13px',
  },
  hidePopup: {
    opacity: 0,
  },
}));

export default useStyles;
