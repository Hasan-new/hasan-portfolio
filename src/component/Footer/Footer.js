import React from 'react';
import './Footer.css';
import { GoRepoForked } from 'react-icons/go';

const Footer = () => {
    return (
        <div className='foooter'>
            <div className="container skill">
                <div className="row copy">
                    <div className="col-12 col-sm-12 col-md-12 d-flex justify-content-center align-items-center justify-content-between">
                        <small>Copyright &copy; 2020 Mohammad Hasan</small>
                        <div className="d-flex align-items-center dev">
                            <h4> <span>Developed By Me</span></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;