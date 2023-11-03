import Tilt from "react-parallax-tilt";
import styles from "./section1.module.css"
import ios_and_ic from "../../../public/assets/ios_and_ic.png"
import con_ic from "../../../public/assets/con_ic.png"
import mob_ic from "../../../public/assets/mob_ic.png"

import { Link } from 'react-router-dom';



function Section1() {
    return (
        <>
            <section className={styles.section1}>
                <div className={styles.top}>

                    <div className={styles.left}>
                        <h1>Make Connections <br />
                            Through Digital Card.</h1>
                        <div className={styles.element}>

                            <p>Absolutely first in Nepal, quick and brilliant  <br />
                                concept of mini website in your phone.</p>
                            <div className={styles.btn}>
                                <Link to="/shop"> <button className={styles.btn1}>Order Now</button>
                                </Link>
                                <Link to="/shop"> <button className={styles.btn2}>Order For Team</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <Tilt glareEnable={true} tiltMaxAngleX={20}
                            tiltMaxAngleY={20} perspective={1000}
                        >
                            <img src="../../../assets/card holder.png" alt="cardHolder"
                            className="rounded-[10px]" />
                        </Tilt>

                    </div>

                </div>
                <div className={styles.bottom}>
                    <div className={styles.ic_text}>
                        <img src={ios_and_ic} className={styles.ios_and_ic} alt="ios_and_ic" />
                        <p>Works on iPhone and Android</p>
                    </div>
                    <div className={styles.ic_text}>
                        <img src={con_ic} alt="con_ic" />
                        <p>Fully Customizable</p></div>
                    <div className={styles.ic_text}>
                        <img src={mob_ic} alt="mob_ic" />
                        <p>No App Needed</p></div>
                </div>
            </section>

        </>
    )
}

export default Section1