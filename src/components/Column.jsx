import React, { useState } from 'react'
import Task from './Task'
import useStore from '../store';
import { shallow } from 'zustand/shallow';

const Column = ({ state }) => {
    const [text, setText] = useState('')
    const [open, setOpen] = useState(false)

    const tasks = useStore((store) => 
        store.tasks.filter((task) => task.state === state),
        shallow
    );

    const addTask = useStore((store) => store.addTasks)

  return (
    <div className=' bg-gray-900 w-[30%] min-w-[250px] min-h-[20rem] rounded-md p-[0.5rem] text-white space-y-2'>
        <div className=' flex justify-between'>
            <p>{state}</p>
            <button onClick={() => setOpen(true)} className=' bg-white px-4 py-1 text-black rounded-lg hover:bg-gray-500 hover:text-white'>
                Add
            </button>
        </div>
        {tasks.map((task) => <Task title={task.title} key={task.title} />)}
        {open && <div>
            <div>
                <input onChange={(e) => setText(e.target.value)} value={text} />
                <button onClick={() => {
                    addTask(text, state)
                    setText('')
                    setOpen(false)
                }} >
                    Submit
                </button>
            </div>
        </div>}
    </div>
  )
}

export default Column