import { useProjects } from "../context/ProjectContext";
import Display from "./Display";

function ProjectItem({ project, setOpenModal }) {
  const { handleProject } = useProjects();

  return (
    <li
      className="projects__item"
      onClick={() => {
        handleProject(project);
        setOpenModal(true);
      }}
    >
      <Display data={project} />

      <div className="projects__background">
        <div className="projects__content">
          <h3 className="heading-3 heading-3--light u-margin-bottom-small">
            {project.name}
          </h3>

          <div className="stacks-box">
            {project.stack.split(",").map((stack, i) => (
              <p
                key={i}
                className="paragraph paragraph--smallest stacks-box__stack"
              >
                {stack}
              </p>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProjectItem;
