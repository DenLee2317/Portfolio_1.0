import { useParams } from "react-router-dom";
 import BtnGitHub from "../components/btnGitHub/BtnGitHub";
  import{projects} from "./../helpers/ProjectList" 
   



const Separate_project = () => {
    /* get the parameter */
    const {id} = useParams ();
     const project = projects[id];
     

    return ( 
        <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">{project.title}</h1>
                {/* <p>{id}</p> */}

                <img src={project.imgBig} alt={project.title} className="project-details__cover" />

                <div className="project-details__desc">
                    <p>Skills: {project.skills}</p>
                </div>

                {/* If there is a link, we output it and render it  */}
            {project.gitHubLink && (
                <BtnGitHub link={project.gitHubLink} />
            ) }
               
            </div>
        </div>
    </main>
     );
}
 
export default Separate_project;