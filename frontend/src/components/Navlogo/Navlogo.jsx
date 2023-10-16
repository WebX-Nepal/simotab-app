import { useState } from "react";
import styles from "./navlogo.module.css";
import { NavLink, Outlet } from "react-router-dom";

function Navlogo() {
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
                    </NavLink>}


            </div>
            <Outlet />
        </>

    );
}

export default Navlogo;