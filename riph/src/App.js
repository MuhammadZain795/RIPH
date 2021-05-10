import './App.css';
import Ecosystem from './components/Ecosystem';
import ICO from './components/ICO';
import RIPH from './components/RIPH';
import WhatIsRIPH from './components/WhatIsRIPH';

function App() {
  return (
    <div className="App">
      <RIPH/>
      <WhatIsRIPH/>
      <Ecosystem/>
      <ICO/>
    </div>
  );
}

export default App;
