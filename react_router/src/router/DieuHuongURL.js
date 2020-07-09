import React, { Component } from 'react';
import {
    Route,
  
  } from "react-router-dom";
import News from '../components/News';
import Home from '../components/Home';
import NewsDetail from '../components/NewsDetail';
import Contact from '../components/Contact';

class DieuHuongURL extends Component {
    render() {        
        return (
       
            <div>      
                
                    <Route exact path="/tin"><News/></Route>
                    <Route exact path="/"> <Home/> </Route>
                    <Route exact path="/home"><Home/></Route>
                    <Route exact path="/tin-tuc/:slug.:id.html"><NewsDetail/></Route>
                    <Route exact path="/lien-he"> <Contact></Contact> </Route>
               
            </div>
           
        );
    }
}

export default DieuHuongURL;