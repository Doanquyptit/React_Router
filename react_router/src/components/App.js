import React from 'react';
import './../css/App.css';
import Nav from './../components/Nav';
import Footer from './../components/Footer';
import DieuHuongURL from '../router/DieuHuongURL';
import {
  BrowserRouter as Router} from "react-router-dom";
function App() {
  return (
    <Router>
      <div >
        <Nav></Nav>
        <DieuHuongURL></DieuHuongURL>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
