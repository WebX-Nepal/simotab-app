import styles from "./section2.module.css"
import { Link } from 'react-router-dom'

function Section2() {
    return (

        <section className={styles.section2}>

            <div className={styles.left}>
                <h1>Share anything, <br />
                    with a single Tap or <br />
                    Scan!</h1>
                <div className={styles.text}>
                    <p>
                        Impress everyone you meet with the quickest and <br />
                        most effective way to share contact details,<br />
                        social media links, and more!
                    </p>
                    <Link to="/shop">
                        <button>Shop Now</button>
                    </Link>
                </div>
            </div>
            <div className={styles.right}>
                <video src='../../../assets/video.mp4' muted autoPlay></video>
            </div>


        </section>

    )
}

export default Section2