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
import UserProfile from "./pages/UserProfile";
import Sidebar from "./components/Slidebar";
import UnderMaintainance from "./pages/admin/UnderMaintance";
import MyDropzone from "./components/DragAndDrop";

function App() {
  return (
    <>
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

        <Route path="/" element={<Sidebar />}>
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
            <Route path="/admin/help" element={<UnderMaintainance />} />
            <Route path="/admin/settings" element={<Setting />} />
            <Route path="/admin/buy-simotap" element={<UnderMaintainance />} />
            <Route path="/admin/Booking" element={<UnderMaintainance />} />
            <Route
              path="/admin/social-media-kits"
              element={<UnderMaintainance />}
            />
          </Route>
        </Route>

        <Route path="/user-profile/:id" element={<UserProfile />} />
        <Route path="*" element={<UnMatchedRoutePage />} />
        <Route path="/sideme" element={<MyDropzone />} />
      </Routes>
    </>
  );
}

export default App;
