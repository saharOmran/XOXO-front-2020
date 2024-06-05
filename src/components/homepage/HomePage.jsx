import React from 'react';
import './homepage.css';
import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const navigate = useNavigate(); 
    return (
        <div className='hom d-flex flex-column align-items-center'>
            <h1 className="text-white mt-5 mb-4 fw-bold title">Tic-Tac-Toe</h1>

            <div className="c">
                <button className="btn-lg start-button" onClick={() => navigate('./Login')}>
                    <span className='span'>START</span>
                </button>
                
                <a className="btn-lg text-white" onClick={() => alert('View Scores')}>
                    SCORES
                </a>
                
            </div>

            <p className='foot fw-bold'>Proved By SAHAR OMRAN 2012</p>
        </div>
    );
}

export default HomePage;
