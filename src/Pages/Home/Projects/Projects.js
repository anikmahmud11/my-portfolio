import React  from 'react';
import {useState , useEffect}  from 'react';
import Project from '../Project/Project';

const Projects = () => {
    const[projects,setProjects]=useState([])
    useEffect(()=>{
        fetch('/projects.json')
        .then(res=>res.json())
        .then(data=>setProjects(data))
    },[])
    return (
        <div className="container pt-5" id="project">
            <p className="t-shadow">TAKE A LOOK AT MY</p>
            <br />
            <h4 className="t-shadow">PROJECTS</h4>
            
                <div class=" rounded p-3 text-center ">
               {
                   projects?.map(project=><Project
                    key={project.id}
                   project={project}
                   >

                   </Project>)
               }
                
                </div>
        </div>
    );
};

export default Projects;