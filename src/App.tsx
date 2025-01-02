import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Community from './pages/Community';
import SingleCommunity from './components/SingleCommunity';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Contact from './pages/Contact';
import Features from './pages/Features';
import AboutPage from './pages/About';
import UserProfile from './pages/UserProfile';

import NPHP from './pages/NPHP';
import TSP from './pages/NPHP/TSP/main'


import { UserProvider } from './assets/theme/scripts/UserContext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {

  return (
    <UserProvider>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/community" element={<Community />} />
          <Route path={`/community/:id`} element={<SingleCommunity />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/NPHP" element={<NPHP />} />
          <Route path="/NPHP/TSP" element={<TSP />} />

          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes >
        <Footer />
      </Router >
    </UserProvider>


  )
}

export default App
