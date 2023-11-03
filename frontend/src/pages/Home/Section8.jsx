import styles from "./section8.module.css";
function Section8() {
  return (
    <section className={styles.section8}>
      <h1 className="mt-6">Get in touch with us</h1>
      <div className={styles.inputGroup}>
        <input type="text" placeholder="Fullname" />
        <input type="email" placeholder="Your email" />
      </div>
      <textarea
        name=""
        id="textplace"
        placeholder="What's your thoughts?"
      ></textarea>
      <button className={styles.btn}>Send Message</button>
    </section>
  );
}

export default Section8;
