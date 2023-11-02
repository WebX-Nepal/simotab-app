import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import "./homeSection.css";
import Section2 from "./Section2";
import Section1 from "./Section1";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Accordion from "./Accordion";
import Section8 from "./Section8";
import { getDataWithoutHeader } from "../../services/axios.service";
import Footer from "../../components/footer/Footer";
import Cookies from 'js-cookie'
import { useDispatch } from "react-redux";
import { logedin } from "../signin/auth.Slice";
import ScrollToTopButton from "../../components/ScrollToTopButton";


function HomeSection() {


  const [accordions, setAccordions] = useState([]);
  const dispatch = useDispatch()

  const getApiFaqData = async () => {
    const response = await getDataWithoutHeader("faqs");

    const datas = response.faqs.map((data) => {
      return { ...data, isOpen: false };
    });
    console.log(datas)
    setAccordions(datas);
  };
  useEffect(() => {
    getApiFaqData();
    const data = {
      token: Cookies.get("simotapp_jwtToken"),
      role: Cookies.get("simotapp_roles"),
      isLogedInStatus: Cookies.get("simotapp_isLoggedIn"),
      userId: Cookies.get("simotapp_UserId")
    }
    if (data.token && data.role && data.isLogedInStatus && data.userId) {
      dispatch(logedin(data))
    }
  }, [])


  const toggleAccordion = (accordionId) => {
    console.log(accordionId)
    if (accordions) {
      setAccordions((prevAccordions) =>
        prevAccordions.map((accordion) => ({
          ...accordion,
          isOpen: accordion._id === accordionId ? !accordion.isOpen : false,
        }))
      );
    }
  };
  return (
    <>



      <div className="homeSection m-auto ms-[-15px] ">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        {accordions &&
          <section className="section7">
            <h1>Frequently Asked Questions</h1>
            {accordions.map((accordion) => (
              <Accordion
                key={accordion._id}
                title={accordion.question}
                content={accordion.answer}
                isOpen={accordion.isOpen}
                onClick={() => toggleAccordion(accordion._id)}
              />
            ))}
          </section>
        }
        <Section8 />
      </div>




      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default HomeSection;
