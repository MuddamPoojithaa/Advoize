import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Plans from "./pages/Plans";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Webdevelopment from "./Components/Webdevelopment";
import Webdesign from "./Components/Webdesign";
import VideoEditing from "./Components/VideoEditing";
import Appdesign from "./Components/Appdesign";
import GraphicDesign from "./Components/GraphicDesign";
import AppDevelopment from "./Components/AppDevelopment";
import DigitalMarketing from "./Components/DigitalMarketing";
import Marketing from "./Components/Marketing";
import Seo from "./Components/Seo";




export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/webdevelopment" element={<Webdevelopment />} />
        <Route path="/webdesign" element={<Webdesign />} />
        <Route path="/videoEditing" element={<VideoEditing />} />
        <Route path="/appdesign" element={<Appdesign />} />
        <Route path="/GraphicDesign" element={<GraphicDesign />} />
        <Route path="/AppDevelopment" element={<AppDevelopment/>} />
        <Route path="/DigitalMarketing" element={<DigitalMarketing />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/seo" element={<Seo />} />
        {/* Add more routes as needed */}
      </Routes>

      </div>
      <Footer />
    </Router>
  );
}
