// src/pages/ProjectDetailsPage.jsx

import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AddTask from "../components/AddTask"; //  <== IMPORT

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com";

function ProjectDetailsPage(props) {
  const [project, setProject] = useState(null);

  // Get the URL parameter `:projectId`
  const { projectId } = useParams(); // <== ADD

  // Helper function that makes a GET request to the API
  // and retrieves the project by id
  const getProject = () => {
    //  <== ADD A NEW FUNCTION
    axios
      .get(`${API_URL}/projects/${projectId}?_embed=tasks`)
      .then((response) => {
        const oneProject = response.data;
        setProject(oneProject);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <div className="ProjectDetailsPage">
      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      )}
      <AddTask getProject={getProject} projectId={Number(projectId)} />
      {project &&
        project.tasks.map((task) => (
          <li className="TaskCard card" key={task.id}>
            <h3>{task.title}</h3>
            <h4>Description:</h4>
            <p>{task.description}</p>
          </li>
        ))}
      <Link to={`/projects/edit/${projectId}`}>
        <button>Edit Project</button>
      </Link>
      <Link to="/projects">
        <button>Back to projects</button>
      </Link>
    </div>
  );
}

export default ProjectDetailsPage;
