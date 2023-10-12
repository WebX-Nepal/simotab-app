import styles from "./section3.module.css"
import { Link } from 'react-router-dom'

const Section3 = () => {
    return (
        <section className={styles.section3}>
            <h1>How <span>SIMOTAP</span> Works?</h1>
            <div className={styles.cards}>


                <div className={styles.card}>
                    <Link to="/shop">   <div className={styles.cardImg}>
                        <img src="../../../public/assets/Rectangle 32.png" alt="card" />
                    </div>
                        <div className={styles.cardInfo}>
                            <h2>Purchase your card</h2>
                            <div className={styles.price}> <p>Own your digital card for your business</p></div>
                        </div></Link>
                </div>

                <div className={styles.card}>
                    <Link to="/profile"><div className={styles.cardImg}>
                        <img src="../../../public/assets/Rectangle 33.png" alt="card" />
                    </div>
                        <div className={styles.cardInfo}>
                            <h2>Setup your profile</h2>
                            <div className={styles.price}> <p>Give a good looks for your personal mini website.</p></div>
                        </div></Link>
                </div>

                <div className={styles.card}>
                    <Link to="/cart"><div className={styles.cardImg}>
                        <img src="../../../public/assets/Rectangle 34.png" alt="card" />
                    </div>
                        <div className={styles.cardInfo}>
                            <h2>Share your information</h2>
                            <div className={styles.price}> <p>Expand your business by sharing your information.</p></div>
                        </div></Link>
                </div>
            </div>
        </section>
    )
}

export default Section3