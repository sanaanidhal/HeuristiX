import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Community from './pages/Community';
import SingleCommunity from './components/SingleCommunity';
import  Signup  from './pages/Signup';
import Signin from './pages/Signin';
import Contact from './pages/Contact';
import Features from './pages/Features';
import AboutPage from './pages/About';

function App() {

  return (
    <Router>
        <Navbar />
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/communitydiscussion" element={<Community />} />
        <Route path="/singlediscussion" element={<SingleCommunity />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<AboutPage />} />

        
        
    
      </Routes >
      <Footer />
    </Router >

  )
}

export default App
