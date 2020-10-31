import React from 'react';
import './Projects.css';
import creativeAgency from '../../images/projectImage/creativeAgency.PNG';
import travelGuru from '../../images/projectImage/travelGuru.PNG';
import volunteerNetwork from '../../images/projectImage/volunteerNetwork.PNG';

import Project from './Project';

const Projects = () => {

    const allProjects=[
        {id:'01',img:""+creativeAgency, title:"Creative Agency", description:"A fullstack Creative Agency website.",
         gitHub:"https://github.com/Hasan-new/hasan-creative-agency-main", liveLink:"🔗 https://hasan-creative-agency-main.web.app/"},

         {id:'02',img:""+travelGuru, title:"Travel Guru", description:"A fullstack Travel Guru website.",
         gitHub:"https://github.com/Hasan-new/travel-guru-hasan", liveLink:"https://travel-guru-master-853a9.web.app/"},

         {id:'03',img:""+volunteerNetwork, title:"Volunteer Network", description:"A fullstack Volunteer Network website.",
         gitHub:"https://github.com/Hasan-new/volunteer-network-client", liveLink:"https://volunteer-network-e6c05.web.app/"},

        
    ]


    return (
        <div id="project-section" className="container skill">
            <div  className="back-line d-flex align-items-center skill-title">
                <div className="front-box d-flex align-items-center">
                    <p className="d-flex align-items-center">Projects</p>
                </div>
            </div>

            <div className="row">
                {
                    allProjects.map(project=><Project key={project.id} project={project} ></Project>)
                }
            </div>

        </div>
    );
};

export default Projects;