import Home from './pages/home/home'
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
          <Router>
          <Navbar/>
            <Routes>
              <Route path='/' element={<Home />} />
              {/* <Route path='/cart' element={<Cart />} /> */}
              {/* <Route path='/success' element={<Success/>} /> */}
            </Routes>
          </Router>
        
      </ShopContextProvider>
    </div>
  );
}

export default App;