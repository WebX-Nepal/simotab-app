import { Drawer, Box, Typography } from "@mui/material";
import "./index.css";
import {  useNavigate } from "react-router-dom";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PetsIcon from "@mui/icons-material/Pets";
import KeyIcon from "@mui/icons-material/Key";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TagIcon from "@mui/icons-material/Tag";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Person2Icon from "@mui/icons-material/Person2";
import PropTypes, { bool } from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logedOut } from "../../pages/signin/auth.Slice";
import {BiEdit} from 'react-icons/bi'

const DrawerAdmin = (props) => {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const [showEditProfile, setshowEditProfile] = useState(false);


  const handleLogout=()=>{
    dispatch(logedOut())
    navigate('/signin')
  }

  return (
    <div>
      <Drawer
        anchor="left"
        open={props.isDrawerOpen}
        onClose={() => props.setisDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div" className="Sidebar-title">
            My Dashboard
          </Typography>
          <Box className="sidebar-item ">
            <button onClick={()=>{
                navigate("/admin/my-profile")
                setshowEditProfile(!showEditProfile)
            }}>
              {" "}
              <Person2Icon /> My-Profile
            </button>
          </Box>
          {showEditProfile&&

              <Box className="sidebar-item">
            <button  className="ms-[15px]" onClick={()=>navigate("/admin/edit-profile")}>
              {" "}
              <BiEdit /> Edit-profile
            </button>
          </Box>
        }
          <Box className="sidebar-item">
            <button onClick={()=>navigate("/admin/contacts")}>
              {" "}
              <ContactMailIcon /> Contacts
            </button>
          </Box>
          <Box className="sidebar-item">
            <button onClick={()=>navigate("/admin/my-cards")}>
              {" "}
              <DashboardIcon /> My-Cards
            </button>
          </Box>
          <Box className="sidebar-item">
            <button onClick={()=>navigate("/admin/my-pets")}>
              {" "}
              <PetsIcon /> My-Pets
            </button>
          </Box>
          <Box className="sidebar-item">
            <button onClick={() => navigate("/admin/my-key-chain")}>
              {" "}
              <KeyIcon /> My Key Chain
            </button>
          </Box>
          <Box className="sidebar-item">
            <button onClick={() => navigate("/admin/booking")}>
              {" "}
              <BookmarkIcon /> Booking
            </button>
          </Box>
          <Box className="sidebar-item">
            <button onClick={() => navigate("/admin/social-media-kits")}>
              {" "}
              <TagIcon /> Social-media-kits
            </button>
          </Box>
          <Box className="sidebar-item">
            <button onClick={() => navigate("/admin/buy-simotap")}>
              <ShoppingCartIcon /> Buy Simotap
            </button>
          </Box>
          <Box className="sidebar-item">
            <button onClick={() => navigate("/admin/help")}>
              {" "}
              <HelpIcon /> Help
            </button>
          </Box>
          <Box className="sidebar-item">
            <button onClick={() => navigate("/admin/setting")}>
              {" "}
              <SettingsIcon /> Setting
            </button>
          </Box>
          <Box className="sidebar-item border-none">
            <button onClick={() =>handleLogout()}>
              {" "}
              <LogoutIcon /> Logout
            </button>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};

export default DrawerAdmin;

DrawerAdmin.propTypes = {
  isDrawerOpen: bool.isRequired,
  setisDrawerOpen: PropTypes.func,
};


