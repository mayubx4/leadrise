import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '440px',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginTop: '130px',
    },
  },
  TextDiv: {
    width: '370px',
    height: '290px',
    textAlign: '-webkit-center',
    '& ': {
      textAlign: '-moz-center',
    },
    marginRight: '40px',
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginBottom: '22px',
    },
  },
  thirdTextDiv: {
    width: '370px',
    height: '290px',
    textAlign: '-webkit-center ',
    '& ': {
      textAlign: '-moz-center',
    },
  },
  heading: {
    fontFamily: 'Quicksand',
    fontWeight: 'bold',
    fontSize: '24px',
  },
  subText: {
    fontFamily: 'Quicksand',
    fontSize: '20px',
  },
  imgDiv: {
    backgroundColor: '#fff',
    borderRadius: '50%',
    height: '50px',
    width: '50px',
    boxShadow: '0 10px 10px 0 rgba(0, 0, 0, 0.25)',
    marginBottom: '20px',
  },
  Img: {
    marginTop: '12px',
  },
}));

export default useStyles;
