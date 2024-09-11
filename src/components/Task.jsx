import { useState } from 'react';
import useStore from '../store';

const Task = ({ title }) => {
    const task = useStore((store) => 
        store.tasks.find((task) => task.title === title)
    )

  return (
    <div className=' bg-white rounded-md min-h-[5rem] text-black p-[0.5rem] flex flex-col justify-between'>
        {task.title}
        <div className=' flex justify-between'>
            <div></div>
            <div className={`rounded-md p-[0.25rem] text-sm text-white bg-gray-600`}>
                {task.state}
            </div>
        </div>
    </div>
  )
}

export default Task