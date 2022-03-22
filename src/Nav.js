import React,{useEffect, useState, Component } from 'react';
import './App.css';
import Recipe from './Recipe';
import {Link} from 'react-router-dom';

// 1. Nav
function Nav() {
    return (
      <nav>
            <h3>
                 <Link to='/'>
                     Recipe Search
                 </ Link>
            </h3>
            <ul className="nav-links">
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to ='/about'>
                    <li>About</li>
                </Link>
                <Link to ='/contact'> 
                    <li>Contact Us</li>
                </Link>
            </ul>
      </nav>
    )
};

export default Nav;
