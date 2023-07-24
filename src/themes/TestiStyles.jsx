import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '190px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '130px',
    },
  },
  mainHeading: {
    fontFamily: 'Raleway',
    fontSize: '50px',
    fontWeight: 'bold',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '28px',
    },
  },
  subText: {
    fontFamily: 'Quicksand',
    fontSize: '20px',
    textAlign: 'center',
    marginTop: '36px',
  },
  imgTextDiv: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '95px',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  textDiv: {
    width: '540.26px',
    marginRight: '160px',
    [theme.breakpoints.down('sm')]: {
      marginRight: '0',
      width: 'fit-content',
    },
  },
  text: {
    fontFamily: 'Quicksand',
    fontSize: '20px',
    marginTop: '35px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      width: '311px',
    },
  },
  smallText: {
    fontFamily: 'Quicksand',
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: '25px',
  },
  Img: {
    [theme.breakpoints.down('sm')]: {
      width: '330px',
      height: '330px',
      marginBottom: '50px',
    },
  },
}));

export default useStyles;
