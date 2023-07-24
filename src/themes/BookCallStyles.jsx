import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '190px',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '60px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      marginLeft: '10px',
    },
  },
  mainTextDiv: {
    width: '364px',
    [theme.breakpoints.down('sm')]: {
      width: '307px',
      marginTop: '59px',
    },
  },
  mainHead: {
    fontFamily: 'Quicksand',
    fontSize: '40px',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '28px',
    },
  },
  subText: {
    fontFamily: 'Quicksand',
    fontSize: '20px',
    marginTop: '35px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    },
  },
  bookPaper: {
    padding: '0 24px',
    marginLeft: '117px',
    [theme.breakpoints.down('sm')]: {
      padding: '0 15px',
      marginLeft: '0',
    },
  },
  bookCallDiv: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  textFieldDiv: {
    display: 'flex',
    flexDirection: 'column',
  },
  bookCall: {
    fontFamily: 'Quicksand',
    fontSize: '40px',
    fontWeight: 'bold',
    marginTop: '20px',
  },
  bookText: {
    fontFamily: 'Quicksand',
    fontSize: '20px',
    marginTop: '17px',
  },
  textField: {
    marginTop: '17px',
    width: '311px',
    '& .MuiOutlinedInput-root': {
      height: '33px',
    },
  },
  calendarImg: {
    width: '336px',
    height: '330px',
    marginLeft: '123px',
  },
  tableDiv: {
    display: 'flex',
  },
  table: {
    borderLeft: '1px solid #DEDEDE',
    borderBottom: '1px solid #DEDEDE',
    borderSpacing: 0,
    marginTop: '30px',
    marginLeft: '14px',
  },
  td: {
    borderTop: '1px solid #DEDEDE',
    borderRight: '1px solid #DEDEDE',
    width: '148px',
    [theme.breakpoints.down('sm')]: {
      width: '130px',
    },
    height: '50px',
    textAlign: 'center',
  },
  td2: {
    borderTop: '1px solid #DEDEDE',
    borderRight: '1px solid #DEDEDE',
    width: '148px',
    [theme.breakpoints.down('sm')]: {
      width: '130px',
    },
    height: '50px',
    textAlign: 'center',
  },
  tableTime: {
    marginLeft: '14px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
    },
  },
  tdTime: {
    height: '49px',
  },
  bookBtn: {
    height: '26px',
    width: '76px',
    [theme.breakpoints.down('sm')]: {
      width: '70px',
    },
    fontSize: '11px',
    fontFamily: 'Quicksand',
    backgroundColor: '#CCCCCC',
    borderRadius: '3px',
    textTransform: 'capitalize',
  },
  bookBtn1: {
    height: '26px',
    width: '76px',
    [theme.breakpoints.down('sm')]: {
      width: '70px',
    },
    fontSize: '11px',
    fontFamily: 'Quicksand',
    backgroundColor: 'transparent',
    color: 'transparent',
    borderRadius: '3px',
    textTransform: 'capitalize',
  },
}));

export default useStyles;
