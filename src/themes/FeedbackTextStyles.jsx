import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '190px',
  },
  heading: {
    fontFamily: 'Raleway',
    fontSize: '50px',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '28px',
    },
  },
  subText: {
    fontFamily: 'Quicksand',
    fontSize: '20px',
    marginTop: '36px',
  },
  mainTextDiv: {
    textAlign: 'center',
  },
  feedbackDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '95px',
    marginRight: '50px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      marginRight: 0,
      padding: '0 15px',
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
  secondaryText: {
    fontFamily: 'Quicksand',
    fontSize: '20px',
    marginTop: '35px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    },
  },
  textDiv: {
    width: '462px',
    height: '240px',
    marginLeft: '120px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
      width: '307px',
    },
  },
  paper: {
    width: '590px',
    height: '420px',
    marginLeft: '100px',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      height: 'auto',
      paddingBottom: '20px',
      marginLeft: 0,
      marginBottom: '60px',
    },
  },
  feedbackHead: {
    fontFamily: 'Quicksand',
    fontSize: '40px',
    fontWeight: 'bold',
    marginTop: '45px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '26px',
    },
  },
  feedbackText: {
    fontFamily: 'Quicksand',
    fontSize: '20px',
    marginTop: '16px',
    width: '462px',
    marginLeft: '70px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      margin: '15px',
    },
  },
  ratingsGroup: {
    width: '195px',
    height: '39px',
    marginTop: '16px',
    [theme.breakpoints.down('sm')]: {
      width: '132px',
      height: '26.5px',
      marginRight: '70px',
    },
  },
  textField: {
    display: 'block',
    marginTop: '24px',
  },
  button: {
    width: '462px',
    height: '41px',
    backgroundColor: '#F7C663',
    fontFamily: 'Quicksand',
    fontSize: '14px',
    marginTop: '31.5px',
    borderRadius: '6px',
    textTransform: 'capitalize',
    fontWeight: '600',
    '&:hover': {
      backgroundColor: '#F7C663',
    },
    [theme.breakpoints.down('sm')]: {
      width: '314px',
    },
  },
  addIcon: {
    marginLeft: '27.5px',
  },
  paperTextDiv: {
    marginTop: '190px',
    height: '338px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '-60px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginTop: '280px',
      marginLeft: '5px',
    },
  },
  vistorPaper: {
    width: '516px',
    height: '100px',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '120px',
    marginBottom: '19px',
    [theme.breakpoints.down('sm')]: {
      width: '351px',
      height: '68px',
      marginLeft: 0,
    },
  },
  analyticsImg: {
    height: '55px',
    width: '55px',
    borderRadius: '6px',
    backgroundColor: '#DEDEDE',
    padding: '7px',
    display: 'inline-block',
    margin: '15px',
    [theme.breakpoints.down('sm')]: {
      width: '45px',
      height: '45px',
      padding: '9px',
    },
  },
  visitorDiv: {
    display: 'inline',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '10px',
    },
  },
  mainheading: {
    fontFamily: 'Quicksand',
    fontSize: '30px',
    fontWeight: 'bold',
    display: 'inline',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  },
  time: {
    fontFamily: 'Quicksand',
    fontSize: '12px',
    display: 'inline',
    marginLeft: '150px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '8px',
      marginLeft: '80px',
    },
  },
  Img: {
    marginLeft: '4px',
    [theme.breakpoints.down('sm')]: {
      width: '23px',
      height: '25px',
      marginLeft: '2px',
    },
  },
  strImg: {
    [theme.breakpoints.down('sm')]: {
      width: '29px',
      height: '12px',
      marginLeft: '4px',
    },
  },
  mailImg: {
    marginLeft: '1px',
    [theme.breakpoints.down('sm')]: {
      width: '23px',
      height: '17px',
      marginLeft: '4px',
    },
  },
  Wave: {
    [theme.breakpoints.down('sm')]: {
      width: '26px',
      height: '26px',
    },
  },
  text: {
    fontFamily: 'Quicksand',
    fontSize: '16px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '10px',
    },
  },
  stripeImg: {
    height: '55px',
    width: '55px',
    borderRadius: '6px',
    backgroundColor: '#6772E5',
    padding: '18px 7px',
    display: 'inline-block',
    margin: '15px',
    [theme.breakpoints.down('sm')]: {
      width: '45px',
      height: '45px',
      padding: '15px 5px',
    },
  },
  gmailImg: {
    height: '55px',
    width: '55px',
    borderRadius: '6px',
    backgroundColor: '#DEDEDE',
    padding: '13px 10px',
    display: 'inline-block',
    margin: '15px',
    [theme.breakpoints.down('sm')]: {
      width: '45px',
      height: '45px',
      padding: '12px 8px',
    },
  },
  txtDiv: {
    width: '462px',
    marginLeft: '222px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      width: '307px',
      marginTop: '50px',
    },
  },
  mainText: {
    fontFamily: 'Quicksand',
    fontSize: '40px',
    fontWeight: 'bold',
    marginBottom: '35px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '28px',
    },
  },
  mainSubText: {
    fontFamily: 'Quicksand',
    fontSize: '20px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    },
  },
}));

export default useStyles;
