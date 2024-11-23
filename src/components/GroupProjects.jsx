import { useState } from "react";
import { useProjects } from "../context/ProjectContext";
import ProjectItem from "./ProjectItem";
import Modal from "../ui/Modal";
import ProjectDetails from "./ProjectDetails";

function GroupProjects() {
  const { allProjects, project } = useProjects();
  const [openModal, setOpenModal] = useState(false);

  const groups = allProjects.filter((project) => project?.group === true);

  console.log(allProjects, groups);

  return (
    <>
      <ul className="projects">
        {groups.map((project, i) => (
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

export default GroupProjects;
