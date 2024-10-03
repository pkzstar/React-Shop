//app page

import './components/NavBarComponent.css';
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBarComponent from './components/navbar';
import ArticlesPage from './pages/Articles'; 
import EventModule from './components/EventsList.js';
// import PatronsFooter from './components/PatronsFooter.jsx';
import './components/patreon.css'
import ThemeToggleComponent from './components/LightMode.js';
import PastEvents2023Page from './pages/Past-Events/PastEvents2023Page.jsx' 
import PastEvents2024Page from './pages/Past-Events/PastEvents2024Page.jsx' 
import PastEvents2025Page from './pages/Past-Events/PastEvents2025Page.jsx'
import PatronsPage from './pages/Patrons'
import HistoryOfHoneypot from './pages/Articles/The-History-Of-Honeypot.jsx'
import Undertow2024 from './pages/Articles/What-to-expect-at-Undertow-2024.jsx';
import ConsoleCapture from './pages/Articles/console-capture.jsx';
import HDRTop5051 from './pages/Articles/HDRTop50-5-1.jsx';
import HDRTop50156 from './pages/Articles/HDRTop50-15-6.jsx';
import HDRTop502516 from './pages/Articles/HDRTop50-25-16.jsx';
import TheBiggerMile from './pages/Articles/The-Bigger-Mile-High-Club.jsx';




function App() {
  return (
    <div className="App">

    <Router>
        <NavBarComponent />
        <ThemeToggleComponent />
          <Routes>
            <Route path="/Articles" element={<ArticlesPage />} />
            <Route path="/" element={<EventModule />} />
            <Route path="/2023" element= {<PastEvents2023Page />} />
            <Route path="/2024" element= {<PastEvents2024Page />} />
            <Route path="/2025" element= {<PastEvents2025Page />} />
            <Route path="/Patrons" element={<PatronsPage />} />
            <Route path='/The-History-Of-Honeypot' element={<HistoryOfHoneypot />} />
            <Route path='/What-to-expect-at-Undertow-2024' element={<Undertow2024 />} />
            <Route path='/Console-capture' element={<ConsoleCapture />} />
            <Route path='/HDRTop50-5-1' element={<HDRTop5051 /> } />
            <Route path='/HDRTop50-15-6' element={<HDRTop50156 />} />
            <Route path='/HDRTop50-25-16' element={<HDRTop502516 />} />
            <Route path='/The-Bigger-Mile-High-Club' element={<TheBiggerMile/>}/>






          </Routes>
    </Router>
    </div>
  );
}

export default App;
