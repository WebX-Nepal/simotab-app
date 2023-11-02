import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import UnMatchedRoutePage from "./pages/UnMatchedRoutePage";
import Cart from "./pages/cart-page";
import Single_Cart_Review from "./pages/Single_Cart_Review";
import MyProfile from "./pages/admin/My-Profile";
import MyCards from "./pages/admin/My-Cards";
import AboutUsSection from "./pages/aboutUs/AboutUsSection";
import Contact from "./pages/admin/Contacts";
import EditProfile from "./pages/admin/My-Profile/Edit-Profile";
import HomeSection from "./pages/Home/HomeSection";
import UpdateContact from "./components/forms/Contact/updateContact";
import UpdateLink from "./components/forms/Link/updateLink";
import CreateContact from "./components/forms/Contact/createContact";
import CreateLink from "./components/forms/Link/createLink";
import SecureRoute from "./secure_routes/login_user_only";
import Setting from "./pages/admin/Setting";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particleConfig from "./components/particleBg/particleConfig";
import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);
  const [maskStyle, setMaskStyle] = useState({});
  const [isHovering, setIsHovering] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMouseMove = (e) => {
    let x, y;

    if (e.type === "mousemove" || e.type === "touchmove") {
      x = e.clientX;
      y = e.clientY;
    } else if (e.type === "touchmove" && e.touches.length > 0) {
      x = e.touches[0].pageX;
      y = e.touches[0].pageY;
    }
    setMaskStyle({
      position: "fixed",
      background: `radial-gradient(circle 150px at ${x}px ${y}px, transparent 50%, #EDEDED 100%)`,
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to handle showing/hiding the scroll-to-top button
  const handleScroll = () => {
    if (window.scrollY > 200) {
      // You can adjust the threshold here
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Attach the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`container ${isHovering ? "hovering" : ""}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route path="/" element={<HomeSection />} />
              <Route path="/shop" element={<Shop />} />

              <Route path="/shop/:id" element={<Single_Cart_Review />} />

              <Route path="/cart" element={<Cart />} />
              <Route path="/aboutus" element={<AboutUsSection />} />
            </Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />

            {/* admin routes */}

            <Route path="/admin" element={<SecureRoute />}>
              <Route path="/admin/my-profile" element={<MyProfile />} />
              <Route path="/admin/my-cards" element={<MyCards />} />
              <Route path="/admin/contacts" element={<Contact />} />
              <Route path="/admin/contacts/:id" element={<UpdateContact />} />
              <Route
                path="/admin/create-contact-form"
                element={<CreateContact />}
              />
              <Route path="/admin/edit-profile" element={<EditProfile />} />
              <Route path="/admin/edit-profile/:id" element={<UpdateLink />} />
              <Route path="/admin/create-link" element={<CreateLink />} />
              <Route path="/admin/help" element={<Setting />} />
              <Route path="/admin/setting" element={<Setting />} />
              <Route path="/admin/buy-simotap" element={<Setting />} />
              <Route path="/admin/Booking" element={<Setting />} />
              <Route path="/admin/social-media-kits" element={<Setting />} />
            </Route>

            <Route path="*" element={<UnMatchedRoutePage />} />
          </Routes>
        </div>

        <div className={`particle-div ${isHovering ? "" : "hidden"}`}>
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particleConfig}
          />
        </div>
        <div className="hover-div" style={maskStyle}></div>
      </div>
    </>
  );
}

export default App;
