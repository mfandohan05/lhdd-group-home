import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterComponent from "./components/footer/FooterComponent";
import HeaderComponent from "./components/header/HeaderComponent";
import MainPageComponent from "./components/MainPageComponent";
import AboutUsPageComponent from "./components/about-us-page/AboutUsPageComponent";
import ContactUsPageComponent from "./components/contact-us-page/ContactUsPageComponent";
import ServicesPageComponent from "./components/services-page/ServicesPageComponent";
import ReferralsPageComponent from "./components/referrals-page/ReferralsPageComponent";
import ScrollToTop from "./components/global/ScrollToTop";
import './App.css'; 

function App() {
  return (
      <BrowserRouter>
      <ScrollToTop />
      <HeaderComponent />
        <Routes>
          <Route path="/" element={<MainPageComponent />} />
          <Route path="/about" element={<AboutUsPageComponent />} />
          <Route path="/contact" element={<ContactUsPageComponent />} />
          <Route path="/services" element={<ServicesPageComponent />} />
          <Route path="/referrals" element={<ReferralsPageComponent />} />
        </Routes>
      <FooterComponent />
      </BrowserRouter>
      
  )
}

export default App
