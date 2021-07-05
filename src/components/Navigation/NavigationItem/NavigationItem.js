import "../Toolbar/Toolbar.css"
import Instagram from "@material-ui/icons/Instagram";
import AccountCircle from "@material-ui/icons/AccountCircle"
import { Home } from "@material-ui/icons";
import { Filter } from "@material-ui/icons";
import Favorite from "@material-ui/icons/Favorite";


const NavigationItem= [
  {
    title: <Home />,
    url: "/",
    cName: "nav-links",
  },
  {
    title: "Random",
    url: "/random",
    cName: "nav-links",
  },
  {
    title: "Genre",
    url: "/contact",
    cName: "nav-links",
  },
  {
    title: <Favorite />,
    url: "/trash",
    cName: "nav-links",
  },
  {
    title: <Instagram color="secondary" />,
    url: "/sign-in",
    cName: "nav-links",
  },
  {
    title: <AccountCircle color="inherit" />,
    url: "/sign-in",
    cName: "nav-links",
  },
];
export default NavigationItem;
