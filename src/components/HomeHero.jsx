import React from 'react';
import PropTypes from 'prop-types';
import { Typography, TextField, Button, Tab, Tabs, Box, Fade } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ClearIcon from '@material-ui/icons/Clear';
import clsx from 'clsx';
import useStyles from '../themes/HomeHeroStyles';
import group1 from '../assets/images/Group1-black.svg';
import group2 from '../assets/images/Group2-black.svg';
import group3 from '../assets/images/Group3-black.svg';
import group4 from '../assets/images/Group4-black.svg';
import group11 from '../assets/images/Group1-white.svg';
import group22 from '../assets/images/Group2-white.svg';
import group33 from '../assets/images/Group3-white.svg';
import group44 from '../assets/images/Group4-white.svg';
import home from '../assets/images/home.svg';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}
TabPanel.defaultProps = {
  children: '',
};
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const HomeHero = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const [checked0, setChecked0] = React.useState(true);
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);

  const handleChange3 = () => {
    setChecked0(false);
    setChecked1(false);
    setChecked2(false);
    setChecked3(true);
  };
  const handleChange2 = () => {
    setChecked0(false);
    setChecked1(false);
    setChecked3(false);
    setChecked2(true);
  };
  const handleChange1 = () => {
    setChecked0(false);
    setChecked2(false);
    setChecked3(false);
    setChecked1(true);
  };
  const handleChange0 = () => {
    setChecked1(false);
    setChecked2(false);
    setChecked3(false);
    setChecked0(true);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handlePopUp = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.mainHeading}>Lorem Ipsum is simply dummy text</Typography>
      <Typography className={classes.subText}>
        Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to mtabe a type specimen book.
      </Typography>
      <div className={classes.groupImgs}>
        <div className={classes.subDiv}>
          <TextField className={classes.textField} variant="outlined" placeholder="Enter your Email Work..." />
          <Button disableTouchRipple endIcon={<ArrowForwardIcon />} className={classes.button}>
            Try it Free
          </Button>
        </div>
        <div className={classes.groups}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            indicatorColor="transparent"
            className={classes.tabs}
          >
            <Tab
              label="Lorem Ipsum is text"
              onClick={handleChange0}
              disableTouchRipple
              icon={
                <div className={classes.groupImg}>
                  <img
                    src={group11}
                    className={clsx(classes.imgs, { [classes.hide]: value !== 0 })}
                    alt="group1"
                    width="29px"
                    height="29px"
                  />
                  <img
                    src={group1}
                    className={clsx(classes.imgs, { [classes.hide]: value === 0 })}
                    alt="group1"
                    width="29px"
                    height="29px"
                  />
                </div>
              }
              {...a11yProps(0)}
              className={clsx(classes.tab, { [classes.black]: value === 0 })}
            />
            <Tab
              label="Lorem Ipsum is text"
              onClick={handleChange1}
              disableTouchRipple
              icon={
                <div className={classes.groupImg}>
                  <img
                    src={group22}
                    className={clsx(classes.imgs, { [classes.hide]: value !== 1 })}
                    alt="group1"
                    width="29px"
                    height="29px"
                  />
                  <img
                    src={group2}
                    className={clsx(classes.imgs, { [classes.hide]: value === 1 })}
                    alt="group1"
                    width="29px"
                    height="29px"
                  />
                </div>
              }
              {...a11yProps(1)}
              className={clsx(classes.tab, { [classes.black]: value === 1 })}
            />
            <Tab
              label="Lorem Ipsum is text"
              onClick={handleChange2}
              disableTouchRipple
              icon={
                <div className={classes.groupImg}>
                  <img
                    src={group33}
                    className={clsx(classes.imgs, { [classes.hide]: value !== 2 })}
                    alt="group1"
                    width="29px"
                    height="29px"
                  />
                  <img
                    src={group3}
                    className={clsx(classes.imgs, { [classes.hide]: value === 2 })}
                    alt="group1"
                    width="29px"
                    height="29px"
                  />
                </div>
              }
              {...a11yProps(2)}
              className={clsx(classes.tab, { [classes.black]: value === 2 })}
            />
            <Tab
              label="Lorem Ipsum is text"
              onClick={handleChange3}
              disableTouchRipple
              icon={
                <div className={classes.groupImg}>
                  <img
                    src={group44}
                    className={clsx(classes.imgs, { [classes.hide]: value !== 3 })}
                    alt="group1"
                    width="29px"
                    height="29px"
                  />
                  <img
                    src={group4}
                    className={clsx(classes.imgs, { [classes.hide]: value === 3 })}
                    alt="group1"
                    width="29px"
                    height="29px"
                  />
                </div>
              }
              {...a11yProps(3)}
              className={clsx(classes.tab, { [classes.black]: value === 3 })}
            />
          </Tabs>
        </div>
        <div className={classes.tabCookie}>
          <div className={clsx(classes.cookiePopup, { [classes.hidePopup]: open })}>
            <Typography className={classes.cookieText}>
              We use Cookies to improve your experience using this website.
            </Typography>
            <Typography className={classes.cookie}>Cookies Policy</Typography>
            <ClearIcon className={classes.clearIcon} onClick={handlePopUp} />
          </div>
          <Fade in={checked0} timeout={300}>
            <TabPanel value={value} index={0}>
              <img src={home} alt="home" className={classes.homeImg} />
            </TabPanel>
          </Fade>
          <Fade in={checked1} timeout={300}>
            <TabPanel value={value} index={1}>
              <img src={home} alt="home" className={classes.homeImg} />
            </TabPanel>
          </Fade>
          <Fade in={checked2} timeout={300}>
            <TabPanel value={value} index={2}>
              <img src={home} alt="home" className={classes.homeImg} />
            </TabPanel>
          </Fade>
          <Fade in={checked3} timeout={300}>
            <TabPanel value={value} index={3}>
              <img src={home} alt="home" className={classes.homeImg} />
            </TabPanel>
          </Fade>
        </div>
      </div>
    </div>
  );
};
export default HomeHero;
