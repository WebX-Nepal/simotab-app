import styles from "./navlogo.module.css";
import { NavLink, Outlet } from "react-router-dom";

function Navlogo() {
  

    

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