/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from "react";
import projects from "../data/projects.json";

const ProjectContext = createContext();

function ProjectProvider({ children }) {
  const [project, setProject] = useState({});

  function handleProject(data) {
    setProject(data);
  }

  return (
    <ProjectContext.Provider
      value={{ allProjects: projects, project, handleProject }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjects() {
  const context = useContext(ProjectContext);

  if (context === undefined)
    throw new Error("💥ProjectContext was used outside of the ProjectProvider");

  return context;
}

export default ProjectProvider;
