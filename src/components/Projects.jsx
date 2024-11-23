import ProjectItem from "./ProjectItem";
import Modal from "../ui/Modal";
import { useState } from "react";
import ProjectDetails from "./ProjectDetails";

function Projects({ allProjects, project }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <ul className="projects">
        {allProjects?.map((project) => (
          <ProjectItem
            key={project.name}
            project={project}
            setOpenModal={setOpenModal}
          />
        ))}
      </ul>

      {openModal && (
        <Modal onClose={() => setOpenModal(false)}>
          <ProjectDetails project={project} />
        </Modal>
      )}
    </>
  );
}

export default Projects;
