import React from "react";
import '../App.css'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function Hero() {
    return (
        <div className="heroContainer px-2 pt-3 mb-4 d-flex align-items-center">
            <h1 className="heroText">Welcome to LibLab</h1>
            <div className="logo-container">
                <img src="/chemistry (1).png" style={{width: '100px', paddingTop: '175px'}} alt='https://www.flaticon.com/free-icons/study' />
            </div>
        </div>
    )
}

export default Hero