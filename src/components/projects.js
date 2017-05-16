import React, { Component } from 'react';
import video from '../assets/hero.mp4';

class Projects extends Component {
  render() {
    return (   
    <div className="container-projects">
        <div className="project">
                <a href='https://ewitmer.github.io/openow/' className="project-contents">
                    <h1 className="project-heading">OPEN NOW</h1>
                    <h2 className="project-sub-heading">Discover new things to do in your own backyard</h2>
                    <button><a href="https://github.com/ewitmer/openow"  className="github">view on github</a></button>  
                </a>
        </div>
        <div className="project">
                <a href='https://ancient-plateau-51106.herokuapp.com/' className="project-contents">
                    <h1 className="project-heading">Book Finder</h1>
                    <h2 className="project-sub-heading">Discover new books for your baby, toddler or preschooler</h2>
                    <button><a href="https://github.com/ewitmer/openow"  className="github">view on github</a></button>  
                </a>
        </div>
        <div className="project">
                <a href='https://serene-depths-10277.herokuapp.com/' className="project-contents">
                    <h1 className="project-heading">Bright Night</h1>
                    <h2 className="project-sub-heading">Set goals and track your daily reading.</h2>  
                    <button><a href="https://github.com/ewitmer/bright_night" className="github">view on github</a></button>  
                </a>
        </div>
    </div>
    );
  }
}

export default Projects;