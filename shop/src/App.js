//app page

import './components/NavBarComponent.css';
import './index.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavBarComponent from './components/navbar';
import ArticlesPage from './pages/Articles'; 
import EventModule from './components/EventsList.js';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBarComponent />
        <div>
          <Routes>
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/" element={<EventModule />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
