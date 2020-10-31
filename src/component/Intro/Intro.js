import React from 'react';
import './Intro.css';
import Typical from 'react-typical';
import { FaGithubSquare } from 'react-icons/fa';
import { AiOutlineMedium, AiFillLinkedin, AiFillYoutube, AiFillTwitterSquare, AiFillTwitterCircle } from 'react-icons/ai';
import CV from '../../images/CV/Resume-Hasan.pdf';



const Intro = () => {
    return (
        <div  className="container intro">
            <div id="intro-section" className="col-md-12">
                <p className="text-success hello">Hello! I am</p>
                <h1 className="name-color">Mohammad Hasan</h1>
                <h3 className="font-weight-bolder text-success developer">
                    I am a
                        <Typical
                        steps={[' Web Developer', 3000, ' Designer', 3000, ' Programmer', 3000,]}
                        loop={Infinity}
                        wrapper="b"
                    />
                </h3>
                <a href={CV} download="Resume-Hasan.pdf"><button className="btn btn-success my-2 my-sm-0 btn-style">Get Resume</button></a>
                <a href="#about-section"><button className="btn btn-outline-success my-2 my-sm-0 btn-style">About Me</button></a>
                <br />
                <br />
                <br/>
                <br/>

                <div className="back-line d-flex align-items-center">
                    <div className="front-box d-flex align-items-center">
                        <p className="d-flex align-items-center">Follow Me</p>
                    </div>
                </div>

                <div className="icon">
                    <a className="icon2" href="https://github.com/Hasan-new" target="_blank" rel="noopener noreferrer"><FaGithubSquare /></a>
                    <a className="icon2" href="https://www.linkedin.com/in/mohammad-hasan-73284291/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
                    <a className="icon2" href="https://twitter.com/Hasan_mirpur" target="_blank" rel="noopener noreferrer"><AiFillTwitterCircle /></a>
                    <a className="icon2" href="https://www.youtube.com/channel/UC6nv45fxTKnrQGBVatXHWmA?view_as=subscriber" target="_blank" rel="noopener noreferrer"><AiFillYoutube /></a>
                </div>
            </div>
        </div>
    );
};

export default Intro;


