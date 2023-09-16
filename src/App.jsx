import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import OurPlants from './pages/OurPlants';
import Team from './pages/Team';
import Donate from './pages/Donate';
import ContactUs from './pages/ContactUs';
import Apply from './pages/Apply';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OurPlants" element={<OurPlants />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Apply" element={<Apply />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
