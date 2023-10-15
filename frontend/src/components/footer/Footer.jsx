import styles from "./footer.module.css";
import { logo2, login, playstore, applestore, fb_ic, ig_ic, tt_ic, yt_ic, li_ic } from "../../../public/assets/pictures";
const Footer = () => {

    return (
        <div >
            <footer className={styles.footer} id="footer" >
                <h1>Welcome to Digital World.</h1>
                <div className={styles.footerUp}>
                    <div className={styles.ft1}>
                        <img src={logo2} alt="logo" className={styles.logo} />
                        <div className={styles.ft1s}>
                            <p>The Future Of Networking</p>
                            <div className={styles.icons}>
                                <img src={fb_ic} alt="fb_ic" />
                                <img src={ig_ic} alt="ig_ic" />
                                <img src={yt_ic} alt="yt_ic" />
                                <img src={tt_ic} alt="tt_ic" />
                                <img src={li_ic} alt="li_ic" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.ft2}>
                        <h2>Shop</h2>
                        <div className={styles.ft2s}>
                            <p>All Products</p>
                            <p>Custom Products</p>
                            <p>Cards</p>
                            <p>Stickers</p>
                            <p>Keychains</p>
                            <p>Wristbands</p>
                        </div>
                    </div>

                    <div className={styles.ft3}>
                        <h2>Company</h2>
                        <div className={styles.ft3s}>
                            <p>About Us</p>
                            <p>How it works?</p>
                            <p>How to buy?</p>
                            <p>Sign In</p>
                        </div>
                    </div>
                    <div className={styles.ft4}>
                        <h2>Download our App Now</h2>
                        <div className={styles.ft4s}>
                            <img src={playstore} alt="playstore" />
                            <img src={applestore} alt="applestore" />
                        </div>
                    </div>
                </div>
                <div className={styles.footerDown}>
                    <div>
                        <p>© Copyright 2023 All Right Reserved</p>
                    </div>
                    <div>
                        <p>Privacy & Policy</p>
                    </div>
                    <div>
                        <p>
                            Designed by <img src={login} alt="Login_logo" />
                        </p>
                    </div>
                </div>
            </footer>
        </div>

    );
}

export default Footer;
