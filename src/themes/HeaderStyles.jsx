import { makeStyles } from '@material-ui/core';
import theme from 'src/theme';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  appbar: {
    background: 'white',
    height: '72.5px',
    padding: '0 !important',
    zIndex: theme.zIndex.drawer + 101,
  },
  toolbar: {
    padding: '0 100px',
    display: 'flex',
    marginTop: '5px',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      padding: '20px',
    },
  },
  appbarItems: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  drawerHeader: {
    marginTop: '73px',
  },
  listItem: {
    padding: '22px 20px',
  },
  menu: {
    display: 'none',
    color: 'black',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  logoText: {
    fontFamily: 'Quicksand',
    fontSize: '26px',
    fontWeight: 'bold',
    color: 'black',
    cursor: 'pointer',
  },
  btn: {
    fontFamily: 'Quicksand',
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: '#fff',
    },
  },
  btnCases: {
    fontFamily: 'Quicksand',
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginLeft: '40px',
    marginRight: '40px',
    '&:hover': {
      backgroundColor: '#fff',
    },
  },
  getStarted: {
    backgroundColor: '#F7C663',
    fontFamily: 'Quicksand',
    fontSize: '14px',
    fontWeight: '600',
    textTransform: 'capitalize',
    marginLeft: '40px',
    height: '40px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
    },
    '&:hover': {
      background: '#F7C663',
    },
  },
  getStarted1: {
    backgroundColor: '#F7C663',
    marginBottom: '78px',
    fontFamily: 'Quicksand',
    fontSize: '14px',
    fontWeight: '600',
    textTransform: 'capitalize',
    height: '40px',
    '&:hover': {
      background: '#F7C663',
    },
  },
}));

export default useStyles;
