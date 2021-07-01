import "../Toolbar/Toolbar.css"
import { Input } from "@material-ui/core";
import Instagram from "@material-ui/icons/Instagram";
import AccountCircle from "@material-ui/icons/AccountCircle"
import { Home } from "@material-ui/icons";
import { Filter } from "@material-ui/icons";


const NavigationItem= [
  {
    title: <Home />,
    url: "/",
    cName: "nav-links",
  },
  {
    title: "Random",
    url: "/services",
    cName: "nav-links",
  },
  {
    title: "Genre",
    url: "/contact",
    cName: "nav-links",
  },
  {
    title: <Filter />,
    url: "/trash",
    cName: "nav-links",
  },
  {
    title: <Instagram color="secondary" />,
    url: "/about",
    cName: "nav-links",
  },
  {
    title: <AccountCircle color="inherit" />,
    url: "/about",
    cName: "nav-links",
  },
];
export default NavigationItem;
