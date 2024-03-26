import React from "react";
import Task from "./Task";

const SelectedProject = ({projectList, TaskList, id, handleDelete, handleSubmit}) => {
    
  const currentProject = projectList.filter(project => project.id === id);
    console.log(currentProject);
  return (
    <div className="w-[35rem]">
      <div className="border-b-4 border-b-stone-500">
        <div className="flex w-full justify-between ">
          <h3 className="text-stone-600" >{currentProject[0].title }</h3>
          <button onClick={handleDelete}>Delete</button>
        </div>
        <p className="text-stone-600" >{currentProject[0].dueDate}</p>
        <p className="text-stone-600">{currentProject[0].description}</p>
      </div>
      <div className="mt-4">
        <Task handlePass={handleSubmit} taskList={TaskList} id={currentProject[0].id} />
      </div>
    </div>
  );
};

export default SelectedProject;
