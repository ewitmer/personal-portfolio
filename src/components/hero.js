import React, { Component } from 'react';
import video from '../assets/hero.mp4';
import { Link } from 'react-router';

class Hero extends Component {
  render() {
    return (   
    <div className="container">
        <video loop autoPlay>
            <source src={video} type="video/mp4"></source>
        </video>
        <div className="overlay">
            <div className="overlay-text">
                <h1 className="heading">Erin Witmer</h1>
                <h2 className="sub-heading">Full-stack JavaScript Developer & Entrepreneur</h2>  
            </div>
        </div>
    </div>
    );
  }
}

export default Hero;