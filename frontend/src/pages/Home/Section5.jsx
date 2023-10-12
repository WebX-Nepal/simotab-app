import styles from "./section5.module.css"
import { profile } from '../../../public/assets/pictures'
function Section5() {
    return (
        <section className={styles.section5}>
            <div className={styles.left}><img src={profile} alt="" /></div>
            <div className={styles.right}>
                <h1>Let them know who you are
                    and what you do</h1>
                <div>

                    <p>You first give them to tap your card to their phone, after
                        tapping, your website will be displayed on their browser.
                        But it’s more simpler than it sounds.</p>
                    <button>Why not try it now</button>
                </div>


            </div>
        </section>
    )
}

export default Section5