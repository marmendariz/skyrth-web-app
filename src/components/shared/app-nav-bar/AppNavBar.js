import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import appStyles from '../../../index.scss';
import {Link} from 'react-router-dom';
import "./AppNavBar.scss";

//TODO: Adjust drop-shadow and make it less strong
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  toolbar:{
    // minHeight: 64,
    color: "black"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "initial"
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <AppBar position="static" style={{backgroundColor : appStyles.appPrimaryColor}}> */}
      <AppBar position="static" style={{backgroundColor : "white"}}>
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}><Link to="/">Skyrth</Link></Typography>
          <Button color="inherit"><Link to="/login">Login</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
