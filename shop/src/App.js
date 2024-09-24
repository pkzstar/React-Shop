//app page

import './components/NavBarComponent.css';
import './index.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavBarComponent from './components/navbar';
import ArticlesPage from './pages/Articles'; 
import EventModule from './components/EventsList.jsx';
import Calendar from './components/Calendar/Calendar.jsx'


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

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
