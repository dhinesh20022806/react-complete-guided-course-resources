import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";
import NewProjects from "./components/NewProjects";
import SelectedProject from "./components/SelectedProject";
function App() {
  const [clickNewProject, setClickNewProject] = useState(false);
  const [projectList, setProjectList] = useState([]);
  const [selected, setSelectedProject] = useState({ projectId: null });

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleClick() {
    setProjectState(prevState => {
      return { ...prevState, selectedProjectId: null };
    });
  }

  function exitClick() {
    setProjectState(prevState => {
      return { ...prevState, selectedProjectId: undefined };
    });
  }

  function handleProject({ title, description, dueDate }) {
    setProjectState(prevState => {
      const id = Math.floor(Math.random() * 10000);

      return {
        ...prevState,
        projects: [...prevState.projects, { id, title, description, dueDate }],
      };
    });
  }

  const handleDelete = id => {
    const filteredProject = projectState.projects.filter(
      project => project.id !== id
    );

    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
        projects: [filteredProject],
      };
    });
  };

  const handleSelectedProject = id => {
    console.log("called");
    console.log(id);
    setProjectState(prevValue => {
      return { ...prevValue, selectedProjectId: id };
    });
  };

  const handleTask = (task, projectId) => {
    console.log(task, projectId);

    setProjectState(prevState => {
      const id = Math.random() * 10000;
      return {
        ...prevState,
        tasks: [...prevState.tasks, { id, task, projectId: projectId }],
      };
    });
  };

  let element;

  if (
    !(projectState.selectedProjectId === null) &&
    !(projectState.selectedProjectId === undefined)
  ) {
    element = (
      <SelectedProject
        projectList={projectState.projects}
        id={projectState.selectedProjectId}
        TaskList={projectState.tasks}
        handleDelete={handleDelete}
        handleSubmit={handleTask}
      />
    );
  } else if (projectState.selectedProjectId === null) {
    element = (
      <NewProjects passValueForm={handleProject} cancelBtn={exitClick} />
    );
  } else {
    element = <NoProjectSelected handleClick={handleClick} />;
  }

  return (
    <main className="h-screen flex gap-8 my-8">
      <ProjectSideBar
        handleProject={handleSelectedProject}
        projectListItems={projectState.projects}
        handleClick={handleClick}
      />
      {element}
    </main>
  );
}

export default App;
