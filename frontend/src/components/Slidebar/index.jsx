import * as React from "react";
import { styled } from "@mui/material/styles";
import "./index.css";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Person2Icon from "@mui/icons-material/Person2";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

import { Outlet, useNavigate } from "react-router-dom";

import ContactMailIcon from "@mui/icons-material/ContactMail";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PetsIcon from "@mui/icons-material/Pets";
import KeyIcon from "@mui/icons-material/Key";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TagIcon from "@mui/icons-material/Tag";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { logedOut } from "../../pages/signin/auth.Slice";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState("none");

  const [showEditProfile, setshowEditProfile] = React.useState("none");

  const handleLogout = () => {
    dispatch(logedOut());
    navigate("/signin");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={() => setOpen(!open)}>
            {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            "My-Profile",
            "Edit-profile",
            "Contacts",
            "My-Cards",
            "My-Pets",
            "My-Key-Chain",
            "Booking",
            "Social-Media-kits",
            "Buy-Simotap",
          ].map((text, index) => (
            <ListItem
              key={text}
              disablePadding
              sx={{
                display: `${index === 1 ? `${showEditProfile}` : "block"}`,
                marginLeft: `${index === 1 ? "20px" : "0"}`,
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => {
                  navigate(`/admin/${text.toLowerCase()}`);
                  if (index === 0 && showEditProfile === "none") {
                    setshowEditProfile("block");
                  }
                  if (index === 0 && showEditProfile === "block") {
                    setshowEditProfile("none");
                  }
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index === 0 && <Person2Icon />}
                  {index === 1 && <CreateRoundedIcon />}
                  {index === 2 && <ContactMailIcon />}
                  {index === 3 && <DashboardIcon />}
                  {index === 4 && <PetsIcon />}
                  {index === 5 && <KeyIcon />}
                  {index === 6 && <BookmarkIcon />}
                  {index === 7 && <TagIcon />}
                  {index === 8 && <ShoppingCartIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                {index === 0 && showEditProfile === "none" ? (
                  <KeyboardArrowUpRoundedIcon />
                ) : (
                  ""
                )}
                {index === 0 && showEditProfile === "block" ? (
                  <KeyboardArrowDownRoundedIcon />
                ) : (
                  ""
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Help", "Settings", "Logout"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => {
                  index != 2
                    ? navigate(`/admin/${text.toLowerCase()}`)
                    : handleLogout();
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index === 0 && <HelpIcon />}
                  {index === 1 && <SettingsIcon />}
                  {index === 2 && <LogoutIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
