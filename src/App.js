import Navbar from './component/inc/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import Service1 from './component/pages/Service1';
import Footer from './component/inc/Footer';
//import { Link } from 'react-router-dom';
const App = () => {
  return (
    <div className='App'>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/about"element={<About/>}/>
        <Route path="/contact"element={<Contact/>}/>
        <Route path="/Service-One"element={<Service1/>}/>
      
      
      </Routes>
    <Footer/>
     </Router>
    </div>
  );
}

export default App;
