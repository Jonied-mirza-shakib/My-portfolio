import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Projects.css'
import SingleProject from './SingleProject';

const Projects = () => {
    const [project,setProject]=useState([]);
    useEffect(()=>{
        fetch('projects.json')
        .then(res=>res.json())
        .then(data=>setProject(data))
    },[])
    return (
        <div className='bg-base-200'>
            <div style={{width:'90%',margin:'auto'}}>
            <h1 className='text-5xl text-center font-bold pt-14 pb-20'>PROJECTS</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5'>
                {
                    project.map(projects=> <SingleProject projects={projects}></SingleProject> )
                }
            </div>
            </div>
        </div>
    );
};

export default Projects;