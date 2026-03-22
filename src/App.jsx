import { HashRouter, Routes, Route } from "react-router-dom";
import FooterComponent from "./components/footer/FooterComponent";
import HeaderComponent from "./components/header/HeaderComponent";
import MainPageComponent from "./components/MainPageComponent";
import AboutUsPageComponent from "./components/about-us-page/AboutUsPageComponent";
import ContactUsPageComponent from "./components/contact-us-page/ContactUsPageComponent";
import ServicesPageComponent from "./components/services-page/ServicesPageComponent";
import ReferralsPageComponent from "./components/referrals-page/ReferralsPageComponent";

function App() {
  return (
      <HashRouter>
      <HeaderComponent />
        <Routes>
          <Route path="/" element={<MainPageComponent />} />
          <Route path="/about" element={<AboutUsPageComponent />} />
          <Route path="/contact" element={<ContactUsPageComponent />} />
          <Route path="/services" element={<ServicesPageComponent />} />
          <Route path="/referrals" element={<ReferralsPageComponent />} />
        </Routes>
      <FooterComponent />
      </HashRouter>
      
  )
}

export default App
