import React from 'react'
import Task from './Task'
import useStore from '../store';
import { shallow } from 'zustand/shallow';

const Column = ({ state }) => {
    const tasks = useStore((store) => 
        store.tasks.filter((task) => task.state === state),
        shallow
    );

  return (
    <div className=' bg-gray-900 w-[30%] min-w-[250px] min-h-[20rem] rounded-md p-[0.5rem] text-white space-y-2'>
        <p>{state}</p>
        {tasks.map((task) => <Task title={task.title} key={task.title} />)}
    </div>
  )
}

export default Column