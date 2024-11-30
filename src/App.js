import './App.css';
import Authpage from './pages/Authpage'
import Footer from './components/Footer'
import Homepage from './pages/Homepage';
import Header from './components/Header';
import HeroSection from './components/home';
import Restaurantbar from './components/restaurantbar';

function App() {
  return (
    <div className="App">
      <div className="header">
         <Header />
      </div>
      <div className='content'>
      {/* <Authpage  /> */}
      {/* <Homepage /> */}
      <Restaurantbar />
      {/* <HeroSection/> */}
      </div>
      <div className="footer">
         <Footer />
      </div>
    </div>
  );
}

export default App;
