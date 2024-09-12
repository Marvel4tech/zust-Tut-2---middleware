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

    const setDraggedTask = useStore((store) => store.setDraggedTask)

  return (
    <div onDragOver={(e) => (e.preventDefault())} onDrop={(e) => {setDraggedTask(null); console.log("drop")}} className=' bg-gray-900 
    w-[30%] min-w-[250px] min-h-[20rem] rounded-md p-[0.5rem] text-white space-y-2'>
        <div className=' flex justify-between'>
            <p>{state}</p>
            <button onClick={() => setOpen(true)} className=' bg-white px-4 py-1 text-black rounded-lg hover:bg-gray-500 hover:text-white'>
                Add
            </button>
        </div>
        {tasks.map((task) => <Task title={task.title} key={task.title} />)}
        {open && <div className=' absolute bg-white/80 w-[100%] h-[100%] top-0 left-0'>
            <div className=' absolute bg-red-500 z-[1] p-[1rem] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
            h-[5rem] w-[20rem] flex justify-center items-center'>
                <input onChange={(e) => setText(e.target.value)} value={text} className=' border-blue-950 text-black px-2 py-[5px]' />
                <button className=' border px-4 py-1' onClick={() => {
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