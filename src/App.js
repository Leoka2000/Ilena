import Home from './pages/main/home/home'
import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import Portfolio from './pages/portfolio/index';
import Contact from './pages/contact/contact';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from './components/footer/footer';
// animate presence defines which page we would like to add animations
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <AnimatePresence>
          <motion.div
            key={window.location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/contact' element={<Contact/>} />
            </Routes>
          </motion.div>
        </AnimatePresence>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
