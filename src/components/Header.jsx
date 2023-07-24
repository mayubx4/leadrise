import React from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import logo from '../assets/images/logo.svg';
import useStyles from '../themes/HeaderStyles';

const drawerWidth = 240;
const useStyle = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: 'green',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    height: '73px',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));
const Header = () => {
  const classess = useStyle();
  const classes = useStyles();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleChange = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0} position="fixed">
        <Toolbar className={classes.toolbar}>
          <Typography
            className={classes.logoText}
            onClick={() => {
              navigate('/');
            }}
          >
            <img src={logo} alt="logo" width="35px" height="19px" />
            leadrise
          </Typography>
          <div className={classes.appbarItems}>
            <div className={classes.buttonDiv}>
              <Button disableTouchRipple className={classes.btn}>
                Product
              </Button>
              <Button disableTouchRipple className={classes.btnCases}>
                Use Cases
              </Button>
              <Button
                disableTouchRipple
                className={classes.btn}
                onClick={() => {
                  navigate('/pricing');
                }}
              >
                Pricing
              </Button>
            </div>
          </div>
          <div className={classes.appbarItems}>
            <div className={classes.buttonsDiv}>
              <Button
                disableTouchRipple
                className={classes.btn}
                onClick={() => {
                  navigate('/sign-in');
                }}
              >
                Sign in
              </Button>
              <Button disableTouchRipple className={classes.getStarted} endIcon={<ArrowForwardIcon />}>
                Get Started
              </Button>
            </div>
          </div>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(classes.menu, { [classess.hide]: open })}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerClose}
            className={clsx(classes.menu, { [classess.hide]: !open })}
          >
            <ClearIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        className={classes.drawer}
        anchor="top"
        open={open}
        onChange={handleChange}
        ModalProps={{ onBackdropClick: handleDrawerClose }}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader} />
        <List>
          <ListItem button key="Product" className={classes.listItem}>
            <ListItemText primary="Product" />
          </ListItem>
          <ListItem button key="Use Cases" className={classes.listItem}>
            <ListItemText primary="Use Cases" />
          </ListItem>
          <ListItem
            button
            key="Pricing"
            onClick={() => {
              navigate('/pricing');
            }}
            className={classes.listItem}
          >
            <ListItemText primary="Pricing" />
          </ListItem>
          <ListItem
            button
            key="Sign in"
            onClick={() => {
              navigate('/sign-in');
            }}
            className={classes.listItem}
          >
            <ListItemText primary="Sign in" />
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button disableTouchRipple className={classes.getStarted1} endIcon={<ArrowForwardIcon />}>
              Get Started
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};
export default Header;
