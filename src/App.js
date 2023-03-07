// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from './Navigation';
import HOMEINDEX from './HOMEINDEX';
import Aboutus from "./AboutUs";
import Distribution from './Distribution';
import Marketing from './Marketing';
import ContactUs from './ContactUs';
import Footer from './FOOTERR';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<HOMEINDEX />} />
          <Route path="/AboutUs" element={<Aboutus />} />
          <Route path="/Distribution" element={<Distribution />} />
          <Route path="/Marketing" element={<Marketing />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
