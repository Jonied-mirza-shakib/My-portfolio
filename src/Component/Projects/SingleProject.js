import React from 'react';
import './SingleProject.css'

const SingleProject = ({ projects }) => {
    console.log(projects)
    return (
        <div>
            <div className='card sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg shadow-2xl'>
            <figure><img src={projects.img} alt=""/></figure>
           <div className='card-body'>
           <div className='project-info'>
                        <h1><span>NAME:</span> {projects.name}</h1>
                        <p><span>DESCRIPTION:</span> {projects.description}</p>
                        <h5><span>TECHNOLOGY USED:</span> {projects.TechnologyUsed}</h5>
                        <div className='grid sm:grid-cols-1 sm:mb-3 md:grid-cols-3 lg:grid-cols-3 gap-5 pt-10'>
                            <a href={projects.clientSideCode} type='button' className='btn btn-outline btn-secondary' target='_blank'>CLIENT SIDE CODE</a>
                            <a href={projects.serverSideCode} type='button' className='btn btn-outline btn-secondary' target='_blank'>SERVER SIDE CODE</a>
                            <a href={projects.liveLink} type='button' className='btn btn-outline btn-secondary' target='_blank'>LIVE LINK</a>
                        </div>
                    </div>
           </div>
            </div>
            {/* <div class="card w-mx-w bg-base-100 rounded-lg shadow-2xl">
            <figure><img src={projects.img} alt=""/></figure>
                <div class="card-body">
                    <div className='project-info'>
                        <h1><span>NAME:</span> {projects.name}</h1>
                        <p><span>DESCRIPTION:</span> {projects.description}</p>
                        <h5><span>TECHNOLOGY USED:</span> {projects.TechnologyUsed}</h5>
                        <div className='grid sm:grid-cols-1 sm:mb-3 md:grid-cols-3 lg:grid-cols-3 gap-5 pt-10'>
                            <a href={projects.clientSideCode} type='button' className='btn btn-outline btn-secondary' target='_blank'>CLIENT SIDE CODE</a>
                            <a href={projects.serverSideCode} type='button' className='btn btn-outline btn-secondary' target='_blank'>SERVER SIDE CODE</a>
                            <a href={projects.liveLink} type='button' className='btn btn-outline btn-secondary' target='_blank'>LIVE LINK</a>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default SingleProject;