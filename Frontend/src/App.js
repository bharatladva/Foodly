import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Home from "./Components/Home/Home";
import SignUp from "./Components/User/SignUp";
import Login from "./Components/User/Login";
import ForgotPassword from "./Components/User/ForgotPassword";
import ConfirmOTP from "./Components/User/ConfirmOTP";
import ChangePassword from "./Components/User/ChangePassword";
import Navbar from "./Components/Navbar/Navbar";
import Dashborad from "./Components/Dashboard/Dashboard";
import UpdateProfile from "./Components/UpdateProfile/UpdateProfile";
import AddRestaurant from "./Components/AddRestaurant/AddRestaurant";
import UpdateRestaurant from "./Components/UpdateRestaurant/UpdateRestaurant";
import FindRestaurant from "./Components/FindRestaurant/FindRestaurant";
import Admin from "./Components/Admin/Admin";
import ContactUs from "./Components/ContactUs/ContactUs";
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, [location]);

  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/home"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route
            exact
            path="/forgotpassword"
            element={
              <>
                <Navbar />
                <ForgotPassword />
              </>
            }
          />
          <Route
            exact
            path="/getotp"
            element={
              <>
                <Navbar />
                <ConfirmOTP />
              </>
            }
          />
          <Route
            exact
            path="/getotp/:Eemail"
            element={
              <>
                <Navbar />
                <ConfirmOTP />
              </>
            }
          />
          <Route
            exact
            path="/changePassword"
            element={
              <>
                <Navbar />
                <ChangePassword />
              </>
            }
          />
          <Route
            exact
            path="/dashboard"
            element={
              <>
                <Navbar />
                <Dashborad />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/dashboard/updateProfile"
            element={
              <>
                <Navbar />
                <UpdateProfile />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/addRestaurant"
            element={
              <>
                <Navbar />
                <AddRestaurant />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/dashboard/updateRestaurant"
            element={
              <>
                <Navbar />
                <UpdateRestaurant />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/findRestaurant"
            element={
              <>
                <Navbar />
                <FindRestaurant />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/contactUs"
            element={
              <>
                <Navbar />
                <ContactUs />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/adminPage"
            element={
              <>
                <Navbar />
                <Admin />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/adminPage/:id"
            element={
              <>
                <Navbar />
                <Admin />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/aboutus"
            element={
              <>
                <Navbar />
                <AboutUs />
                <Footer />
              </>
            }
          />
          {/* <Route exact path="/auth/google"  />
          <Route exact path="/auth/google/" /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
