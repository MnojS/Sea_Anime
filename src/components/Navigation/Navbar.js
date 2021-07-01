import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Navbar.css'
import SeaAnime from '../../assets/png/SeaAnime.png'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: '6px',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(83),
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
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.grow} >
      <AppBar position="static" style={{backgroundColor:"transparent"}}>
        <Toolbar style={{marginLeft:"5%"}}>
          <IconButton
            edge="start"
            className={classes.sectionMobile}
            color="inherit">
            <MenuIcon />
          </IconButton>
          <div className={classes.title} variant="h6" >
            <img src={SeaAnime} alt="logo" width="100" height="50" />
          </div>
          <div className={classes.sectionDesktop} style={{padding:"10px"}} >
            <a style={{textDecoration:"none" , color:"wheat" , marginTop:"15px" , fontSize:"15px"}} href="\browse">Browse</a>
          </div>
          <div className={classes.sectionDesktop} style={{padding:"10px"}} >
            <a style={{textDecoration:"none" , color:"wheat" , marginTop:"15px" , fontSize:"15px"}} href="\browse">Random</a>
          </div>
          <div className={classes.sectionDesktop} style={{padding:"10px"}} >
            <a style={{textDecoration:"none" , color:"wheat" , marginTop:"15px" , fontSize:"15px"}} href="\browse">Genre</a>
          </div>
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
          <div className={classes.grow} />
          <div className={classes.sectionDesktop} style={{marginRight:"9%"}}>
            <IconButton
              color="secondary">
              <InstagramIcon />
            </IconButton>
            <IconButton
              color="inherit">
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
