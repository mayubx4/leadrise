import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    paddingTop: '150px',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    height: '909.5px',
    [theme.breakpoints.down('sm')]: {
      height: '1190px',
    },
  },
  mainHeading: {
    fontFamily: 'Raleway',
    fontSize: '56px',
    fontWeight: 'bolder',
    [theme.breakpoints.down('sm')]: {
      fontSize: '36px',
    },
  },
  subText: {
    fontFamily: 'Quicksand',
    fontSize: '20px',
    width: '940px',
    marginTop: '33px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      width: '352px',
    },
  },
  subDiv: {
    marginTop: '33px',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  textField: {
    width: '420px',
    fontFamily: 'Quicksand',
    fontSize: '20px',
    '& .MuiOutlinedInput-root': {
      borderRadius: '6px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '334px',
    },
  },
  button: {
    backgroundColor: '#F7C663',
    height: '55px',
    width: '150px',
    borderRadius: '6px',
    marginLeft: '20px',
    textTransform: 'none',
    fontFamily: 'Quicksand',
    fontSize: '18px',
    '&:hover': {
      backgroundColor: '#F7C663',
    },
    [theme.breakpoints.down('sm')]: {
      width: '334px',
      marginLeft: 0,
      marginTop: '13px',
    },
  },
  groups: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '92px',
    marginLeft: '25px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginTop: '40px',
      marginLeft: '55px',
    },
  },
  groupImgs: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column-reverse',
    },
  },
  groupText: {
    display: 'flex',
    width: '255px',
    height: '33px',
    backgroundColor: 'black',
    color: '#fff',
    fontFamily: 'Quicksand',
    fontSize: '20px',
    borderRadius: '4px',
  },
  groupImg: {
    margin: '10px 10px 0 !important',
  },
  textGroups: {
    fontFamily: 'Quicksand',
    fontSize: '18px',
    display: 'flex',
    width: '240px',
    height: '29px',
    marginLeft: '30px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginTop: '20px',
    },
  },
  homeImg: {
    marginTop: '10px',
    [theme.breakpoints.down('sm')]: {
      width: '320px',
      height: '179px',
    },
  },
  tabs: {
    width: '100%',
    '& .MuiTabs-flexContainer': {
      justifyContent: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0',
      '& .MuiTabs-flexContainer': {
        flexDirection: 'column',
      },
    },
  },
  tab: {
    borderRadius: '7px',
    marginRight: '10px',
    height: '40px',
    padding: '0 10px',
    minHeight: 'fit-content',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '10px',
    },
    '& .MuiTab-wrapper': {
      fontFamily: 'Quicksand',
      fontSize: '20px',
      textTransform: 'none',
      flexDirection: 'row',
    },
    '&:focus': {
      color: 'white',
      backgroundColor: 'black',
    },
  },
  black: {
    color: 'white',
    backgroundColor: 'black',
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
      position: 'fixed',
      left: '15px',
      top: '700px',
      width: '203px',
      height: '85px',
      marginTop: 0,
      flexDirection: 'column',
    },
  },
  cookieText: {
    fontFamily: 'Quicksand',
    fontSize: '12px',
    marginTop: '10px',
    marginLeft: '19px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '11px',
      marginLeft: '10px',
      width: '179px',
      textAlign: 'left',
    },
  },
  cookie: {
    fontFamily: 'Quicksand',
    fontSize: '12px',
    fontWeight: '600',
    marginTop: '9px',
    marginLeft: '15px',
    marginRight: '15px',
    textDecoration: 'underline',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
      marginLeft: '10px',
    },
  },
  clearIcon: {
    width: '12px',
    height: '12px',
    marginTop: '13px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '170px',
      marginTop: '-14px',
    },
  },
  hidePopup: {
    opacity: 0,
  },
  hide: {
    display: 'none',
  },
}));

export default useStyles;
