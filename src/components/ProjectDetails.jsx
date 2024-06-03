import { GoGlobe } from "react-icons/go";
import Display from "./Display";

function ProjectDetails({ project }) {
  return (
    <sction className="projDetails">
      <h2 className="heading-2 heading-2--small u-center-text  u-margin-bottom-small-2">
        {project?.name}
      </h2>

      <a rel="noreferrer" href={project.preview} target="_blank">
        <Display data={project} />
      </a>

      {project?.description !== "" && (
        <div className="u-margin-bottom-small-2 u-margin-top-small-2">
          <h3 className="heading-3 u-margin-bottom-small">Description</h3>

          {project?.description?.split("\n").map((description, i) => (
            <p key={i} className="paragraph paragraph--many">
              {description}
            </p>
          ))}
        </div>
      )}

      <div
        className={`u-margin-bottom-small-2 ${
          project?.description === "" ? "u-margin-top-small-2" : ""
        }`}
      >
        <h3 className="heading-3 u-margin-bottom-small">Tecnologías</h3>

        <div className="stacks-box">
          {project.stack.split(",").map((stack, i) => (
            <p
              key={i}
              className="paragraph  stacks-box__stack stacks-box__stack--dif-color"
            >
              {stack}
            </p>
          ))}
        </div>
      </div>

      <div className="u-margin-bottom-small-2">
        <h3 className="heading-3 u-margin-bottom-small">Website</h3>

        <div className="flex u-margin-bottom-small">
          <GoGlobe />

          <a
            className="link link--projDetails"
            rel="noreferrer"
            href={project.preview}
            target="_blank"
          >
            {project.preview}
          </a>
        </div>
      </div>

      <div className="u-margin-bottom-small-2">
        <h3 className="heading-3 u-margin-bottom-small">GitHub</h3>

        <div className="flex">
          <img className="github" src={`svg/github-svgrepo-com.svg`} />

          <a
            className="link link--projDetails"
            rel="noreferrer"
            href={project.github}
            target="_blank"
          >
            {project.github}
          </a>
        </div>
      </div>
    </sction>
  );
}

export default ProjectDetails;
