import React from 'react';
import NoProjectSelectedImg from '../assets/no-projects.png'
const NoProjectSelected = ({handleClick})=>{

    return (
    <header className='flex flex-col items-center gap-3 justify-center w-full' >
        <img className='w-16 h-16 object-contain mx-auto' src={NoProjectSelectedImg} alt='no-project-selected'/>
        <h2>No Project Selected</h2>
        <p>Select the project or get start with new one</p>

      <div>
      <button className='hover:bg-stone-700 p-3 rounded-md hover:text-stone-100' onClick={handleClick}>Create new Project</button>
      </div>


    </header>)
}

export default NoProjectSelected;