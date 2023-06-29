import * as React from "react";
import LandingPage from "./components/Pages/LandingPage/LandingPage";
import SearchCarPage from "./components/Pages/SearchCar/SearchCarPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarResult from "./components/Pages/ResultPage";
import CarDetails from "./components/Pages/CarDetailsPage";
import PaymentPage from "./components/Pages/PaymentPage";
import SignIn from "./components/Pages/Customer/signIn"
import LogAdm from "./components/Pages/Admin";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchCarPage />} />
        <Route path="/car-result" element={<CarResult />} />
        <Route path="/car-details" element={<CarDetails />} />
        <Route path="/payments" element={<PaymentPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/admin" element={<LogAdm />} />
        <Route />
      </Routes>
    </Router>
  );
};

export default App;
