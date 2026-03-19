import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterComponent from "./components/footer/FooterComponent";
import HeaderComponent from "./components/header/HeaderComponent";
import MainPageComponent from "./components/MainPageComponent";
import AboutUsPageComponent from "./components/about-us-page/AboutUsPageComponent";
function App() {

  return (
      <BrowserRouter>
      <HeaderComponent />
        <Routes>
          <Route path="/" element={<MainPageComponent />} />
          <Route path="/about" element={<AboutUsPageComponent />} />
        </Routes>
      <FooterComponent />
      </BrowserRouter>
      
  )
}

export default App
