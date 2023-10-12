import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import UnMatchedRoutePage from "./pages/UnMatchedRoutePage";
import Cart from "./pages/cart-page";
import Sidebar from "./components/Slidebar";
import Single_Cart_Review from "./pages/Single_Cart_Review";
import MyProfile from "./pages/admin/My-Profile";
import MyCards from "./pages/admin/My-Cards";
import MyKeyChain from "./pages/admin/My-key-chain";
import MyPets from "./pages/admin/My-Pets";
import HomeSection from "./pages/home/HomeSection";
import AboutUsSection from "./pages/aboutUs/AboutUsSection";
import Contact from "./pages/admin/Contacts";
// import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<HomeSection />} />
          <Route path="/shop" element={<Shop />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/shop/:id" element={<Single_Cart_Review />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/aboutus" element={<AboutUsSection/>} />
        </Route>

        {/* admin routes */}

        <Route path="/admin" element={<Sidebar/>}>
          <Route path="/admin/my-profile" element={<MyProfile/>}/>
          <Route path="/admin/my-cards" element={<MyCards/>}/>
          <Route path="/admin/my-key-chain" element={<MyKeyChain/>}/>
          <Route path="/admin/my-pets" element={<MyPets/>}/>
          <Route path="/admin/contacts" element={<Contact/>}/>
        </Route>



        <Route path="*" element={<UnMatchedRoutePage />} />
        
      </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default App;
