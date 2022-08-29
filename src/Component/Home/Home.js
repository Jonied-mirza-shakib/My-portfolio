import React from 'react';
import './Home.css'
import shakib from '../../img/shakib3.png'
import {FiDownload} from 'react-icons/fi';
import {AiOutlineMail} from 'react-icons/ai';
import {BiPhoneCall} from 'react-icons/bi';
import {BsFacebook,BsGithub} from 'react-icons/bs';
import {TiSocialLinkedinCircular} from 'react-icons/ti';


const Home = () => {
    return (

        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse home-img">
    <img src={shakib} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
    <div className='home-main-first-section'>
    <h1>HI !</h1>
    <h2>I AM <span style={{color:'darkblue'}}>JONIED MIRZA SHAKIB.</span> </h2>
    <h6>MERN-STACK DEVELOPER</h6>
    <p className='home-me-about'>Hi, my name is Jonied Mirza Shakib and I am a MERN-Stack developer with 1.5 years of experience with modern technologies like React, Tailwind CSS, Node js, Mongo DB, Express JS etc..</p>
     <a type='button' className='btn btn-secondary' href="https://drive.google.com/uc?export=download&id=1sySUCVTkmDhzqydNKTFKE3AEMnxRBy2N"> <FiDownload style={{marginRight:'20px',fontSize:'20px'}} />DOWNLOAD CV</a>
   </div>
   <div className='home-main-second-section'>
    <a href="mailto: jonied.mirza.shakib1@gmail.com"><AiOutlineMail/></a>
    <a href="tel: +880 1881880049"><BiPhoneCall/></a>
    <a href="https://www.facebook.com/profile.php?id=100050105945881" target="_blank"><BsFacebook/></a>
    <a href="https://www.linkedin.com/in/jonied-mirza-shakib/" target="_blank"><TiSocialLinkedinCircular/></a>
    <a href="https://github.com/Jonied-mirza-shakib" target="_blank"><BsGithub/></a>
   </div>
    </div>
  </div>
</div>
    );
};

export default Home;