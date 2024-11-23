import Projects from "../components/Projects";
import { useState } from "react";
import { useProjects } from "../context/ProjectContext";

const tabs = [
  { text: "Todos" },
  { text: "Página web" },
  { text: "Proyectos No Country" },
];

function Project() {
  const { allProjects, project } = useProjects();
  const [selectedTab, setSelectedTab] = useState("Todos");

  let filteredProjects;
  if (selectedTab === "Todos") filteredProjects = allProjects;
  if (selectedTab === "Página web")
    filteredProjects = allProjects.filter(
      (project) => project.project !== "No-Country"
    );
  if (selectedTab === "Proyectos No Country")
    filteredProjects = allProjects.filter(
      (project) => project.project === "No-Country"
    );

  return (
    <section className="page-project section-padding-big">
      <h2 className="heading-2 heading-2--big u-center-text u-margin-bottom-small">
        Portafolio
      </h2>
      <p className="paragraph u-center-text u-margin-bottom-medium">
        Aquí podrás ver algunos de los proyectos en los que he trabajado
      </p>

      <div className="box-text u-margin-bottom-big">
        {tabs?.map((tab, i) => (
          <h3
            key={i}
            className={`paragraph box-text__item ${
              selectedTab === tab.text ? "active" : ""
            }`}
            onClick={() => setSelectedTab(tab.text)}
          >
            {tab.text}
          </h3>
        ))}
      </div>

      <Projects allProjects={filteredProjects} project={project} />
    </section>
  );
}

export default Project;
