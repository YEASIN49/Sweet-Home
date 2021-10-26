import React,{useState, Suspense, lazy} from 'react'; 
import Navbar from './components/Navbar'
import GlobalStyle from './globalStyle';
import Hero from './components/Hero';
import {BrowserRouter as Router} from "react-router-dom";
import { HeroSliderData } from './data/HeroSliderData';
// import InfoSection from './components/InfoSection';
import  InfoData  from './data/InfoData'
// import StatusBar from './components/StatusBar';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

function App() {

  const InfoSection = lazy(() => import('./components/InfoSection'));
  const StatusBar = lazy(() => import('./components/StatusBar'));
  const Contact = lazy(() => import('./components/Contact'));
  const Footer = lazy(() => import('./components/Footer'));



  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

 

  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <Navbar isDropdownOpen={isDropdownOpen} toggleDropdown = {toggleDropdown} />
        <Hero slideData = {HeroSliderData}/>
        <Suspense fallback={<div>Info Loading...</div>}>
          <InfoSection infoSectionData={InfoData}/>
        </Suspense>
        <Suspense fallback={<div>Statusbar Loading...</div>}>
          <StatusBar />
        </Suspense>
        <Suspense fallback={<div>Contact section Loading...</div>}>
          <Contact />
        </Suspense>
        <Suspense fallback={<div> footerLoading...</div>}>
          <Footer />
        </Suspense>
      </div> 
    </Router>  
  );
}

export default App;
