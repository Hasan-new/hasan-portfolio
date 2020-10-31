import React, { useEffect } from 'react';
import './About.css';
import Hasan from '../../images/hasan.jpg';
import Aos from "aos";
import "aos/dist/aos.css";
import CV from '../../images/CV/Resume-Hasan.pdf';


const About = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div id="about-section" className="container about">
            <div  className="back-line d-flex align-items-center">
                <div className="front-box d-flex align-items-center">
                    <p className="d-flex align-items-center">About Me</p>
                </div>
            </div>
            <div className="row">
                <div data-aos="flip-down" className="col-md-4 img-size">
                    <img src={Hasan} alt="Mohammad Hasan" />
                </div>
                <div data-aos="flip-up" className="col-md-8 about-mySelf">
                    <p>Hello, I'm Mohamamd Hasan, a passionate Web Developer. I currently develop web and desktop applications. My core skill is based on JavaScript. I love to make the web more open to the world. I love programming. I take my programming skills form "Programming Hero". I am available for good opportunities.</p>
                    <a href={CV} download="Resume-Hasan.pdf"><button className="btn btn-success my-2 my-sm-0 btn-style">Get Resume</button></a>
                    <a href="#skill-section"><button className="btn btn-outline-success my-2 my-sm-0 btn-style">My Skill</button></a>
                </div>
            </div>
        </div>
    );
};

export default About;