import React,{useEffect, useState, Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

// 1. About Us
function About() {
    // 
    useEffect(()=> {
        fetchItems();
    }, []);

   // Create a state to put the items inside an array
   const [items, setItems] = useState([]);

   // fetch JSON data function the render HTML USING MAP
   const fetchItems = async () => {
       const data = await fetch('https://api.github.com/users/iamshaunjp/repos'); // This is where we will have to add the dynamic prop later
      
       const items = await data.json();
       console.log(items);
       setItems(items);
   }

    return (
        <div>
            <h1>About Us - Our Github Repositories</h1>
            <div className="container">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                type and scrambled it to make a type specimen book. It has survived not only five centuries, but also 
                the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div class="responsiveTable">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Url</th>
                        <th>Number of Watchers</th>
                    </tr>
                    {items.map(item => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.url}</td>
                            <td className="number">{item.watchers}</td>
                        </tr>
                        ))}
                </table>
            </div>
        </div>
    )
};

export default About;
