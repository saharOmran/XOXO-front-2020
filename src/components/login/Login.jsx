import React, { useState } from 'react';
import './login.css';
import { Button, Container, Form } from 'react-bootstrap'; // Corrected import statement
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Login = () =>{
    return(
        <>
            <div className='d-flex flex-column justify-content-center login'>
            <h1 className="text-white mt-5 mb-4 fw-bold title">Tic-Tac-Toe</h1>

             <div className='form d-flex flex-column text-white'>
                <Form>
                <label className='labelform fw-bold'>fill the Form</label>
                <Form.Group className="mb-4  text-white">
                    <Form.Control
                    type="text"
                    placeholder="Enter Player One"
                    name='name1'
                    className='in-1  text-white'
                    />
                </Form.Group>
                
                <Form.Group className="mb-4 text-white">
                    <Form.Control
                    type="text"
                    placeholder="Enter Player Two"
                    name='name2'
                    className='in-1 text-white'
                    />
                </Form.Group>
                </Form>
                <button className="start-btn ">
                     START GAME
                </button>
                <p className='foot fw-bold'>Proved By SAHAR OMRAN 2012</p>
            </div>  
            </div>
        
        
        
        </>
    )
}

export default Login;