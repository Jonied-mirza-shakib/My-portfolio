import React from 'react';
import Skill from '../Skill/Skill';
import './About.css'

const About = () => {
    return (
        <div className='bg-base-200 pt-14'>
            <h1 className='text-5xl text-center font-bold'>ABOUT ME</h1>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left about-info">
                    <p>Assalamu Alaikum. I Am Jonied Mirza Shakib. A passionate Programmer who likes to explore new technologies and try something new over time. Since MERN Stack offers an advantage for creating a flexible and scalable web application, I find it more interesting to start my programming career.I complete the web development course well from Programming Hero. And I've earned a certificate. I also had the opportunity to join a super charge interview club called SCIC. I finished well there. I am also learning new technologies. I love working with new technologies. I also love blogging.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body card-second-section">
                        <div className="divider"></div>
                        <h2>NAME: JONIED MIRZA SHAKIB</h2>
                        <h4>AGE: 20</h4>
                        <h4>NATIONALITY: BANGLADESHI</h4>
                        <h4>FREELANCE: AVAILABLE</h4>
                        <h4>ADDRESS: CHITTAGONG</h4>
                        <h4>PHONE: +880 1881880049</h4>
                        <h4>EMAIL: jonied.mirza.shakib1@gmail.com</h4>
                        <h4>GITHUB: Jonied-mirza-shakib</h4>
                        <h4>LANGUAGE: ENGLISH,BANGLA</h4>
                    </div>
                </div>
            </div>
        </div>
        <div>
        </div>
        </div>
    );
};

export default About;