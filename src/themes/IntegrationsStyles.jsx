import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '310px',
    marginBottom: '310px',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginTop: '100px',
      marginBottom: '130px',
    },
  },
  Img: {
    [theme.breakpoints.down('sm')]: {
      width: '351px',
      height: '330px',
      marginLeft: '15px',
    },
  },
  textDiv: {
    width: '462px',
    height: '275px',
    marginLeft: '246px',
    marginTop: '30px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      width: 'fit-content',
    },
  },
  mainHeading: {
    fontFamily: 'Quicksand',
    fontSize: '40px',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '21px',
    },
  },
  subText: {
    fontFamily: 'Quicksand',
    fontSize: '20px',
    marginTop: '20px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      width: '307px',
    },
  },
}));

export default useStyles;
