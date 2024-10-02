//app page

import './components/NavBarComponent.css';
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBarComponent from './components/navbar';
import ArticlesPage from './pages/Articles'; 
import EventModule from './components/EventsList.js';
import PatronsFooter from './components/PatronsFooter.jsx';
import './components/patreon.css'
import ThemeToggleComponent from './components/LightMode.js';
import PastEvents2023Page from './pages/Past-Events/PastEvents2023Page.jsx' 
import PastEvents2024Page from './pages/Past-Events/PastEvents2024Page.jsx' 
import PastEvents2025Page from './pages/Past-Events/PastEvents2025Page.jsx' 




function App() {
  return (
    <div className="App">

    <Router>
        <NavBarComponent />
        <ThemeToggleComponent />
          <Routes>
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/" element={<EventModule />} />
            <Route path="/2023" element= {<PastEvents2023Page />} />
            <Route path="/2024" element= {<PastEvents2024Page />} />
            <Route path="/2025" element= {<PastEvents2025Page />} />




          </Routes>
        <PatronsFooter/>
    </Router>
    </div>
  );
}

export default App;
