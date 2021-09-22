import Navbar from './components/Navbar'
import GlobalStyle from './globalStyle';
import Hero from './components/Hero';
import { HeroSliderData } from './data/HeroSliderData';

function App() {
  return (
    <div className="App">
    <GlobalStyle />
      <Navbar />
      <Hero slideData = {HeroSliderData}/>
      
    </div>
  );
}

export default App;
