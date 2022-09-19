import React from 'react';
import './Skill.css'
import { SiJavascript } from 'react-icons/si';
import { RiReactjsLine } from 'react-icons/ri';
import { BsFillBootstrapFill,BsGithub } from 'react-icons/bs';
import { DiNodejsSmall,DiMongodb } from 'react-icons/di';
import { SiExpress,SiTailwindcss,SiGooglemaps,SiJsonwebtokens,SiFirebase,SiHeroku,SiNetlify } from 'react-icons/si';


const Skill = () => {
    return (
     <div className='bg-base-200 pb-20'>
           <div style={{width:'90%',margin:'auto'}}>
            <h1 className='skill-title'>MY SKILL</h1>
            {/* start front-end */}
            <div>
            <h1 className='text-2xl font-bold pt-10'>FRONT-END</h1>
            <div className="divider w-72 pb-5"></div>
            <div className='front-end'>
          <div className='card javascript max-w-sm rounded-lg shadow-2xl'>
           <div className='card-body'>
           <h3><SiJavascript/></h3>
            <h4>JAVASCRIPT</h4>
           </div>
            </div>
            <div className='card react max-w-sm rounded-lg shadow-2xl'>
               <div className='card-body shadow-2xl bg-base-200'>
               <h3><RiReactjsLine/></h3>
                <h4>REACT JS</h4>
               </div> 
            </div>
            <div className='card bootstrap max-w-sm rounded-lg shadow-2xl'>
                <div className='card-body shadow-2xl bg-base-200'>
                <h3><BsFillBootstrapFill/></h3>
                <h4>BOOTSTRAP</h4>
                </div>
            </div>
          </div>
            </div>
            {/* end front-end */}

             {/* start back-end */}
            <div>
            <h1 className='text-2xl font-bold pt-14'>BACK-END & DATABASE</h1>
            <div className="divider w-72 pb-5"></div>
            <div className='back-end'>
          <div className='card nodeJs max-w-sm rounded-lg shadow-2xl'>
           <div className='card-body'>
           <h3><DiNodejsSmall/></h3>
            <h4>NODE JS</h4>
           </div>
            </div>
            <div className='card expressJs max-w-sm rounded-lg shadow-2xl'>
               <div className='card-body shadow-2xl bg-base-200'>
               <h3><SiExpress/></h3>
                <h4>EXPRESS JS</h4>
               </div> 
            </div>
            <div className='card mongoDb max-w-sm rounded-lg shadow-2xl'>
               <div className='card-body shadow-2xl bg-base-200'>
               <h3><DiMongodb/></h3>
                <h4>MONGODB</h4>
               </div> 
            </div>
          </div>
            </div>
             {/* end back-end */}
              {/* start familiar-with */}
            <div>
            <h1 className='text-2xl font-bold pt-14'>FAMILIAR-WITH</h1>
            <div className="divider w-72 pb-5"></div>
            <div className='familiar-with'>
          <div className='card tailwindCss max-w-sm rounded-lg shadow-2xl'>
           <div className='card-body'>
           <h3><SiTailwindcss/></h3>
            <h4>TAILWIND CSS</h4>
           </div>
            </div>
            <div className='card googleMap max-w-sm rounded-lg shadow-2xl'>
               <div className='card-body shadow-2xl bg-base-200'>
               <h3><SiGooglemaps/></h3>
                <h4>GOOGLE MAP</h4>
               </div> 
            </div>
            <div className='card jtwToken max-w-sm rounded-lg shadow-2xl'>
               <div className='card-body shadow-2xl bg-base-200'>
               <h3><SiJsonwebtokens/></h3>
                <h4>JSON WEB TOKEN</h4>
               </div> 
            </div>
          </div>
            </div>
             {/* end familiar-with */}
             <div>
            <h1 className='text-2xl font-bold pt-14'>OTHER TECHNOLOGIES</h1>
            <div className="divider w-72 pb-5"></div>
            <div className='other-technologies'>
          <div className='card firebase max-w-sm rounded-lg shadow-2xl'>
           <div className='card-body'>
           <h3><SiFirebase/></h3>
            <h4>FIREBASE</h4>
           </div>
            </div>
            <div className='card heroku max-w-sm rounded-lg shadow-2xl'>
               <div className='card-body shadow-2xl bg-base-200'>
               <h3><SiHeroku/></h3>
                <h4>HEROKU</h4>
               </div> 
            </div>
            <div className='card netlify max-w-sm rounded-lg shadow-2xl'>
               <div className='card-body shadow-2xl bg-base-200'>
               <h3><SiNetlify/></h3>
                <h4>NETLIFY</h4>
               </div> 
            </div>
            <div className='card github max-w-sm rounded-lg shadow-2xl'>
               <div className='card-body shadow-2xl bg-base-200'>
               <h3><BsGithub/></h3>
                <h4>GITHUB</h4>
               </div> 
            </div>
          </div>
            </div>
        </div>
     </div>
    );
};

export default Skill;

