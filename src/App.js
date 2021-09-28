import React,{useState} from 'react'; 
import Navbar from './components/Navbar'
import GlobalStyle from './globalStyle';
import Hero from './components/Hero';
import { HeroSliderData } from './data/HeroSliderData';
import Dropdown from './components/Dropdown';
import InfoSection from './components/InfoSection';

function App() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    console.log(isDropdownOpen);
  }

  return (
    <div className="App">
    <GlobalStyle />
      <Navbar isDropdownOpen={isDropdownOpen} toggleDropdown = {toggleDropdown} />
      <Hero slideData = {HeroSliderData}/>
      <InfoSection></InfoSection>
    </div>
  );
}

export default App;
