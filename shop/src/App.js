//app page

import './components/NavBarComponent.css';
import './index.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavBarComponent from './components/navbar';
import ArticlesPage from './pages/Articles'; 
import EventModule from './components/EventsList.js';
import Calendar from './components/Calendar/Calendar.jsx'
import PatronsFooter from './components/PatronsFooter.jsx';
import './components/patreon.css'
import './pages/Past-Events/pastEvents2023.jsx'
import EventList2023 from './components/PastEventsList.jsx';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBarComponent />
        <div>
          <Routes>
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/" element={<EventModule />} />
            <Route path="/calendar" element= {<Calendar />} />
            <Route path="/2023" element= {<pastEvents2023 />} />


          </Routes>
        </div>
        <EventList2023/>
        <PatronsFooter/>
      </div>
    </Router>
  );
}

export default App;
