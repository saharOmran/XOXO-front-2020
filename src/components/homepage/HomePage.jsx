import React from 'react';
import './homepage.css';
import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const navigate = useNavigate(); 
    return (
        <div className='hom d-flex flex-column align-items-center'>
            <h1 className="text-white mt-5 mb-4 fw-bold title-hom">Tic-Tac-Toe</h1>

            <div className="c">
                <button className="btn-lg start-button" onClick={() => navigate('./Login')}>
                    <span className='span'>START</span>
                </button>
                
                <button className="btn-lg text-white score" onClick={() => navigate('./Table')}>
                    SCORES
                </button>
                
            </div>

            <p className='foot-hom fw-bold'>Proved By SAHAR OMRAN 2012</p>
        </div>
    );
}

export default HomePage;
