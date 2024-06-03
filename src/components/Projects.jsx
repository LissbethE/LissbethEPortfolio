import ProjectItem from "./ProjectItem";
import { useProjects } from "../context/ProjectContext";
import Modal from "../ui/Modal";
import { useState } from "react";
import ProjectDetails from "./ProjectDetails";

function Projects() {
  const { allProjects, project } = useProjects();
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <ul className="projects">
        {allProjects.map((project, i) => (
          <ProjectItem key={i} project={project} setOpenModal={setOpenModal} />
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
