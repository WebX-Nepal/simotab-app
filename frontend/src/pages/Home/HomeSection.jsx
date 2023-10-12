import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import "./homeSection.css";
import Section2 from "./Section2";
import Section1 from "./Section1";
import Section3 from "./Section3";
import Section4 from "./section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Accordion from "./Accordion";
import Section8 from "./Section8";
import { getDataWithoutHeader } from "../../services/axios.service";

function HomeSection() {
  const [accordions, setAccordions] = useState([]);

  const getApiFaqData = async () => {
    const response = await getDataWithoutHeader("faqs");

    const datas = response.faqs.map((data) => {
      return { ...data, isOpen: false };
    });
    setAccordions(datas);
  };
  useEffect(() => {
    getApiFaqData();
  },[])
    

  const toggleAccordion = (accordionId) => {
    if (accordions) {
      setAccordions((prevAccordions) =>
        prevAccordions.map((accordion) => ({
          ...accordion,
          isOpen: accordion.id === accordionId ? !accordion.isOpen : false,
        }))
      );
    }
  };
  return (
    <div className="homeSection">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <section className="section7">
        <h1>Frequently Asked Questions</h1>
        {accordions.map((accordion) => (
          <Accordion
            key={accordion._id}
            title={accordion.question}
            content={accordion.answer}
            isOpen={accordion.isOpen}
            onClick={() => toggleAccordion(accordion.id)}
            className="tyty"
          />
        ))}
      </section>
      <Section8 />
    </div>
  );
}

export default HomeSection;
