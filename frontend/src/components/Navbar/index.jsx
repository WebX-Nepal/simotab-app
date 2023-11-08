import { useCallback, useState, useEffect, useRef } from "react";
import styles from "./navbar.module.css";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../services/axios.service";
import { loadUser } from "../../pages/signin/auth.Slice";
import ScrollToTop from "../ScrollToTop";
import "../../App.css"

import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particleConfig from "../../components/particleBg/particleConfig"




function Navbar() {

  // particlejs

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);
  const [maskStyle, setMaskStyle] = useState({});
  const [isHovering, setIsHovering] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMouseMove = (e) => {
    let x, y;

    if (e.type === "mousemove" || e.type === "touchmove") {
      x = e.clientX;
      y = e.clientY;
    } else if (e.type === "touchmove" && e.touches.length > 0) {
      x = e.touches[0].pageX;
      y = e.touches[0].pageY;
    }
    setMaskStyle({
      position: "fixed",
      background: `radial-gradient(circle 150px at ${x}px ${y}px, transparent 50%, #EDEDED 100%)`,
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to handle showing/hiding the scroll-to-top button
  const handleScroll = () => {
    if (window.scrollY > 200) {
      // You can adjust the threshold here
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Attach the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  // end


  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { isLogedInStatus, userId, token, current_user_info } = useSelector(
    (state) => {
      return state.auth;
    }
  );

  const getUser = async () => {
    const response = await getData(`users/${userId}`, token);
    console.log(response.user);
    dispatch(loadUser(response.user));
  };
  useEffect(() => {
    getUser();
  }, []);
  // adding the states
  const [isActive, setIsActive] = useState(false);

  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <>



      <div
        className={`container ${isHovering ? "hovering" : ""}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="content-container">

          <ScrollToTop />

          <div className={`${styles.nav}`}>
            {
              <NavLink to="/" className={`${styles.logo}`}>
                <img src="../../../image/logo.png" />
              </NavLink>
            }

            <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>

              <li onClick={removeActive}>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Home
                </NavLink>
              </li>
              <li onClick={removeActive}>
                <NavLink
                  to="/shop"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Shop
                </NavLink>
              </li>
              <li onClick={removeActive}>
                <NavLink
                  to="/aboutus"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  About Us
                </NavLink>
              </li>

              {!isLogedInStatus && (
                <div className="bts">
                  <NavLink to="/signup">
                    <button className={styles.signUpBtn}>Sign up</button>
                  </NavLink>
                </div>
              )}

            </ul>

            {current_user_info?.profileImageUrl?.url && (
              <div className="profile-container bts signUpBtn">
                <button className="profile" onClick={() => navigate('/admin/my-profile')}>
                  <img src={current_user_info.profileImageUrl.url} alt="" className="profile-image sm:w-[50px] sm:h-[50px] rounded-full object-cover   " />
                </button>

              </div>

            )}

            <div
              className={`${styles.hamburger} ${isActive ? styles.active : ""} `}
              onClick={toggleActiveClass}
            >
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
            </div>
          </div>
          <Outlet />

        </div >

        <div className={`particle-div ${isHovering ? "" : "hidden"}`}>
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particleConfig}
          />
        </div>
        <div className="hover-div" style={maskStyle}></div>
      </div >


    </>
  );
}

export default Navbar;
