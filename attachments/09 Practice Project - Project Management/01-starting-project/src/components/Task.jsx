import React from 'react';
import Input from './Inputs';
const Task = ({handlePass, taskList , id})=>{

    console.log(taskList , 'task list');

    const task = taskList.filter(task => task.projectId === id)

    console.log(task);
    console.log(task[0]);


    const handleSubmit = (event)=>{
        event.preventDefault();

        const formData = new FormData(event.target);

        const data = Object.fromEntries(formData.entries())
        console.log(data);

        const {taskList} = data
        console.log(id);
        console.log(taskList);

        handlePass(taskList,id)

        event.target.reset();



    }

    return(<div>
        <form onSubmit={handleSubmit}>

        <Input label={'Task'} name='taskList'  type='text'/>

        </form>

        <div className='mt-3'>

        {task.length > 0 ? task.map(ele => <li className='flex gap-5' key={ele.id} >{ele.task} <span className=''><button>delete</button></span></li>) : <p>no task yet</p>}
        </div>


    </div>)
}

export default Task;