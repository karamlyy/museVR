import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import MuseumList from './components/MuseumList/MuseumList';
import MuseumDetail from './components/MuseumDetail/MuseumDetail';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import FAQ from './components/FAQs/FAQ';

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/museums" element={<MuseumList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/museum/:id" element={<MuseumDetail />} />
          <Route path="/faqs" element={<FAQ/>}/>
        </Routes>



      </div>
    </Router>
  );
}

export default App;
