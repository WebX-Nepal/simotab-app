import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import Single_Cart_Review from "./pages/Single_cart_Review";
import UnMatchedRoutePage from "./pages/UnMatchedRoutePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/shop/:id" element={<Single_Cart_Review/>} />
        </Route>
        <Route path="*" element={<UnMatchedRoutePage/>}/>
      </Routes>
    </>
  );
}

export default App;
