import React from "react";

const ProjectSideBar = ({handleClick, projectListItems, handleProject}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 uppercase md:text-xl text-stone-200 font-bold">
        Your Projects
      </h2>
      <div className="">
        <button onClick={handleClick} className="text-stone-750 bg-stone-700 hover:text-stone-200 hover:bg-stone-800 px-6 py-2 rounded-md">
          + Add Project
        </button>
      </div>

      <ul>
      {projectListItems.map(project =>{
        return(<li className=" mt-4 hover:bg-stone-600 bg-stone-850 rounded-md text-stone-500 px-4 py-2 hover:text-stone-100"  key={project.id}>
          <button onClick={()=> handleProject(project.id)}>{project.title}</button>
        </li>)
      })}
      </ul>
    </aside>
  );
};

export default ProjectSideBar;
