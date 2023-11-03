import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../services/axios.service";
import { loadUser } from "../../pages/signin/auth.Slice";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
          <div className="profile-container bts">
            <button onClick={() => navigate("/admin/my-profile")}>
              <img
                src={current_user_info.profileImageUrl.url}
                alt=""
                className=" profile-image w-[50px] h-[50px] rounded-full object-cover   "
              />
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
    </>
  );
}

export default Navbar;
