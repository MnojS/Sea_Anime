import React, { useState } from "react";
import "./DrawerToggleButton.css";
import ToolbarLogo from '../../../assets/png/SeaAnime.png'
import SideDrawer from "./SideDrawer";
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: '3px',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width:'20px auto'
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));



const DrawerToggleButton = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const drawerToggleClickHandler = () => {
    setShowSidebar(!showSidebar);
  };

  const sideDrawerClosedHandler = () => {
    setShowSidebar(false);
  };

  const classes = useStyles();

  return (
    <React.Fragment>
      <button className="toggle-button" onClick={drawerToggleClickHandler}>
        <img alt="logo" src={ToolbarLogo} width="100" />
      </button>
      <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}/>
      </div>
      {window.innerWidth <= 500 ? (
        <SideDrawer open={showSidebar} closed={sideDrawerClosedHandler} />
      ) : null}
    </React.Fragment>
  );
};

export default DrawerToggleButton;
