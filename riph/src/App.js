import './App.css';
import Ecosystem from './components/Ecosystem';
import Footer from './components/Footer';
import ICO from './components/ICO';
import RIPH from './components/RIPH';
import Roadmap from './components/Roadmap';
import WhatIsRIPH from './components/WhatIsRIPH';

function App() {
  return (
    <div className="App">
      <RIPH/>
      <WhatIsRIPH/>
      <Ecosystem/>
      <ICO/>
      <Roadmap/>
      <Footer/>
    </div>
  );
}

export default App;
