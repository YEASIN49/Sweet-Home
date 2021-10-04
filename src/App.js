import React,{useState} from 'react'; 
import Navbar from './components/Navbar'
import GlobalStyle from './globalStyle';
import Hero from './components/Hero';
import { HeroSliderData } from './data/HeroSliderData';
import InfoSection from './components/InfoSection';
import  InfoData  from './data/InfoData'
import StatusBar from './components/StatusBar';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  let renderInfoSectionConditionally = null;

  renderInfoSectionConditionally = (
    <InfoSection infoSectionData={InfoData}/>
  );


  return (
    <div className="App">
      <GlobalStyle />
      <Navbar isDropdownOpen={isDropdownOpen} toggleDropdown = {toggleDropdown} />
      <Hero slideData = {HeroSliderData}/>
      {renderInfoSectionConditionally}
      <StatusBar />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
