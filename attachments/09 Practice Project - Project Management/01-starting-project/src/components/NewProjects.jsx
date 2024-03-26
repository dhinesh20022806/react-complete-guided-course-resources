import React from "react";
import Input from "./Inputs";

const NewProjects = ({cancelBtn , passValueForm}) => {
    function handleSubmit(event){

        event.preventDefault();

        const value = new FormData(event.target);
        console.log(value);
        const data = Object.fromEntries(value.entries())
        console.log(data);

        passValueForm(data)

        event.target.reset();

    }
  return (
    <div className="flex flex-col w-[35rem] ">
        <form onSubmit={handleSubmit}>
        <div className="flex gap-5 justify-end" >
        <button onClick={cancelBtn} className="text-stone-700 hover:text-stone-900">Cancel</button>
        <button className="bg-stone-600 px-6 rounded-md py-2 text-stone-50 hover:text-stone-200 hover:bg-stone-450">Save</button>
    </div>
   
      <Input required label="Title" name="title" type="text" />
      <Input required label="description" name='description' textarea />
      <Input required label="Due Date" type="date" name='dueDate' />
    </form>
    </div>
  );
};

export default NewProjects;
