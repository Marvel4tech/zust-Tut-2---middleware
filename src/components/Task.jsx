import { useState } from 'react';
import useStore from '../store';
import { CgTrashEmpty } from 'react-icons/cg';

const Task = ({ title }) => {
    const task = useStore((store) => 
        store.tasks.find((task) => task.title === title)
    )

    const deleteTask = useStore((store) => store.deleteTasks)

  return (
    <div className=' bg-white rounded-md min-h-[5rem] text-black p-[0.5rem] flex flex-col justify-between'>
        {task.title}
        <div className=' flex justify-between'>
            <div>
               <CgTrashEmpty className=' text-2xl text-red-600' onClick={() => deleteTask(task.title)} />
            </div>
            <div className={`rounded-md p-[0.25rem] text-sm text-white bg-gray-600`}>
                {task.state}
            </div>
        </div>
    </div>
  )
}

export default Task