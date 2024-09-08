import React from 'react'
import Task from './Task'

const Column = ({ state }) => {
  return (
    <div className=' bg-gray-900 w-[30%] min-w-[250px] min-h-[20rem] rounded-md p-[0.5rem] text-white space-y-2'>
        <p>{state}</p>
        <Task title={"Todo"} />
    </div>
  )
}

export default Column