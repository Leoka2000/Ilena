import Home from './pages/home/home'
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import Portfolio from './pages/portfolio/portfolio';


function App() {
  return (
    <div className="App">
    
          <Router>
          <Navbar/>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/portfolio' element={<Portfolio />} />
              {/* <Route path='/success' element={<Success/>} /> */}
            </Routes>
          </Router>
        

    </div>
  );
}

export default App;