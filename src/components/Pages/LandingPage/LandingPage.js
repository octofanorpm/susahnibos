import * as React from "react";
import Navbar from "../../PageComponent/Navbar/index";
import Banner from "../../PageComponent/Banner/index";
import WhyUs from "../../PageComponent/WhyUs/index";
import Testimonial from "../../PageComponent/Testimonial";
import Promotion from "../../PageComponent/Promotion/index";
import Question from "../../PageComponent/FAQ";
import Footer from "../../PageComponent/Footer";
import "../../../App.css";
import { Navigate } from "react-router-dom";

const LandingPage = () => {

  const role = localStorage.getItem('role')
  if (document.cookie !== "" && role === "admin") {
    return <Navigate to={'/signin'} />;
  }
  else if (document.cookie === "" && role === "customer") {
    return <Navigate to={'/signin'} />;
  }
  
  return (
    <>
      <Navbar />
      <Banner />
      <Promotion />
      <WhyUs />
      <Testimonial />
      <Question />
      <Footer />
    </>
  );
};

export default LandingPage;
