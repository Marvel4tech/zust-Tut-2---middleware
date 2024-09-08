import React, { useState } from 'react'
import useStore from '../store';

const Task = ({ title }) => {
    const [status, setStatus] = useState("PLANNED");

    const task = useStore((store) => 
        store.tasks.filter((task) => task.title === task.state)
    )

  return (
    <div className=' bg-white rounded-md min-h-[5rem] text-black p-[0.5rem] flex flex-col justify-between'>
        {title}
        <div className=' flex justify-between'>
            <div></div>
            <div className={`rounded-md p-[0.25rem] text-sm text-white ${status === "ONGOING" ? "bg-orange-600"
            : status === "DONE" ? "bg-green-600" : "bg-gray-600"}`}>
                {status}
            </div>
        </div>
    </div>
  )
}

export default Task