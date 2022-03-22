import React,{useEffect, useState, Component } from 'react';
import './App.css';
import { Form, FormGroup, Input, Label, Button} from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';


// 2. Contact Form

class Contact extends Component {
    constructor() {
        super()

        this.state = {
            name:'',
            email:'',
            tel:'',
            message:''
        }

        this.handleChange = this.handleChange.bind(this);
    }
    // change state of input
    handleChange = e => {
         this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit(e) {
        e.preventDefault()
        const { name, email, tel, message} = this.state
    }


    render() {
        return (
            <div>
            <h1>Get in touch</h1>
            <form  class="formContainer">
                <formgroup>
                    <label for="name">Name: </label>
                    <input type="text"
                           name="name"
                           onChange={this.handleChange} />
                </formgroup>
                <formgroup>
                    <label for="email">Email: </label>
                    <input type="email"
                           name="email" 
                           onChange={this.handleChange} />
                </formgroup>
                <formgroup>
                    <label for="tel">Telephone Number: </label>
                    <input type="tel"
                           name="tel" 
                           onChange={this.handleChange} />
                </formgroup>
                <formgroup>
                    <label for="message">Message: </label>
                    <textarea
                           name="message"
                           onChange={this.handleChange} />
                </formgroup>
                <button>Submit</button>
            </form>
            </div>
        )
    }
}

 

export default Contact;
