import React from 'react';

const Input = ({label, textarea, ...props})=>{
    let element = <input className='bg-stone-200 border-stone-600 border-b-2 w-full p-1' {...props} />
    if( textarea ) element = <textarea className='bg-stone-200 border-stone-600 border-b-2 w-full p-1'  {...props}></textarea>


    return(<p className='flex flex-col gap-3'>
    <label className='text-stone-700 bg-stone-750 '>{label}</label>
    {element}
    
</p>)
}

export default Input