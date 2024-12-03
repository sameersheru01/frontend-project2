import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Authpage from './pages/Authpage';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import HeroSection from './components/home';
import Restaurantbar from './components/restaurantbar';
import Product from './components/Product';
import Checkout from './components/Checkout';
import Address from './components/Address';
import Payment from './components/Payment';
import Success from './components/Success';
import Profile from './components/Profile';
import MapComponent from './components/map';
import { useState } from "react";

function App() {
  const [cartvisble, setCartvisble] = useState(false); // Shared state

  const handleToggle = () => {
    setCartvisble((prev) => !prev); // Toggle state
  };
  return (
    <Router>
      <div className="App">
        {/* Persistent Header */}
        <div className="header">
          <Header onToggle={handleToggle}/>
        </div>
        
        {/* Dynamic Content */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Authpage />} />
            <Route path="/auth" element={<Authpage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/hero" element={<HeroSection />} />
            <Route path="/restaurantbar" element={<Restaurantbar />} />
            <Route path="/product" element={<Product cartvisble={cartvisble}/>} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/address" element={<Address />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/success" element={<Success />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/map" element={<MapComponent />} />
          </Routes>
        </div>
        
        {/* Persistent Footer */}
        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
