import React,{useEffect, useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './Recipe';

// 1.Importing your pages
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

// 1.1. Import Router Elements
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// 1.2 Return your import pages
 function App() {
  return (
      <Router>
          <div className="App">
              <Nav />
              <main>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Switch>
              </main>
              <Footer />
          </div>
      </Router>
  );
}

// 1.3 Const your page comonenets


export default App;
