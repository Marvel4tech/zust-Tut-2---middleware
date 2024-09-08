import React, { useState } from 'react'

const Task = ({ title }) => {
    const [status, setStatus] = useState("Planned")

  return (
    <div className=' bg-white rounded-md min-h-[5rem] text-black p-[0.5rem] flex flex-col justify-between'>
        {title}
        <div className=' flex justify-between'>
            <div></div>
            <div className=' rounded-md p-[0.25rem] bg-gray-500 text-sm'>{status}</div>
        </div>
    </div>
  )
}

export default Task