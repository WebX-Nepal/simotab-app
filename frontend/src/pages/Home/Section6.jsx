import styles from "./section6.module.css";
import { getDataWithoutHeader } from "../../services/axios.service";
import { useEffect, useState } from "react";
function Section6() {
  const [testinomials, settestinomials] = useState([]);
  const getData = async () => {
    const response = await getDataWithoutHeader("testinomials");
    console.log(response.testinomials);
    settestinomials(response.testinomials);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className={styles.section6}>
      <h1>
        What Other Businessmen Are Saying About <span>SIMOTAP</span>
      </h1>
      {testinomials.map((testinomial) => {
        return (
          <div className={styles.cards} key={testinomial._id}>
            <div className={styles.card}>
              <img src={testinomial.photo.url} alt="Loading" />

              <div className={styles.text}>
                <h2>{testinomial.name}</h2>
                <p>
                  {
                    testinomial.review
                  }
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Section6;
