import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import ScrollToTop from "./components/ScrollToTop"
import Home from "./pages/Home"
import About from "./pages/About"
import Admissions from "./pages/Admissions"
import Facilities from "./pages/Facilities"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}
export default App