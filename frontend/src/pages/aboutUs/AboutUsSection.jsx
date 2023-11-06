import ScrollToTopButton from "../../components/ScrollToTopButton";
import Footer from "../../components/footer/Footer";
import styles from "./aboutUsSection.module.css";


function AboutUsSection() {

    return (
        <>
            <div className="container bg-black m-auto w-[80%] md:w-[90%] rounded-xl">
                <img className=' rounded-xl opacity-50 md:h-[356px] md:w-[100%] m-auto object-cover ' src="image/aboutus.png" alt="sdsdsd" />
            </div>

            <div className="relative bottom-[4em] md:bottom-[9em] h-32 w-32 md:h-52 md:w-52 bg-[#308] m-auto rounded-full flex items-center justify-center">
                <img className='h-3  md:h-5' src="image/simatap.png" alt="" />
            </div>
            <h1 className='text-center text-[25px] text-[#3B3B3B] font-[600]  md:font-[400] md:text-[50px] md:mt-[-2.4em] mt-[-1.5em]'>Simotap Business pvt. ltd</h1>
            <div className={styles.aboutUsSection}>
                <div className={styles.about}>


                    <p className="text-justify"> <span className=' text-[#308] font-[700] text-[36px] ml-10 md:ml-40'>W</span>elcome to Simotap, a leading NFC tapping company dedicated to unlocking the power of Near Field Communication (NFC) technology. At Simotap, were passionate about bridging the physical and digital worlds, making interactions smarter and more convenient for businesses and consumers alike. With a deep-rooted commitment to innovation and cutting-edge solutions, we specialize in providing NFC-enabled products and services that enable seamless connections between physical objects and digital content. Our team of experts combines technical prowess with creativity to develop custom NFC solutions tailored to your unique needs, whether its enhancing your marketing campaigns, streamlining access control, or optimizing inventory management. With Simotap, tap into a world of endless possibilities where technology meets convenience, and let us help you shape the future of connectivity.</p>
                </div>
                <div className={styles.vision}>
                    <h2 className='text-center font-normal text-4xl'>Our Vision</h2>
                    <p className='my-6 text-justify'>Our vision at Simotap is to transform the way people and businesses interact with the world around them through the limitless potential of NFC technology. We envision a future where every physical object can be a gateway to a digital experience, where a simple tap connects individuals to information, services, and experiences effortlessly. By pioneering innovative NFC solutions, we strive to empower businesses to engage their customers in more meaningful ways, enhance security and access control, and streamline everyday operations.</p>
                </div>
                <div className={styles.mission}>
                    <h2 className='text-center font-normal text-4xl'>Our Mission</h2>
                    <p className='my-6 text-justify'>Our Mission at Simotap is to transform the way people and businesses interact with the world around them through the limitless potential of NFC technology. We envision a future where every physical object can be a gateway to a digital experience, where a simple tap connects individuals to information, services, and experiences effortlessly. By pioneering innovative NFC solutions, we strive to empower businesses to engage their customers in more meaningful ways, enhance security and access control, and streamline everyday operations.</p>
                </div>
            </div>
            <ScrollToTopButton />
            <Footer />
        </>

    )
}

export default AboutUsSection
