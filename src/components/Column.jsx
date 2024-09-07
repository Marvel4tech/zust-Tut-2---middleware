import React from 'react'

const Column = ({ state }) => {
  return (
    <div className=' bg-gray-400 w-[30%] min-w-[250px] min-h-[20rem] rounded-md p-[0.5rem] text-white'>
        {state}
    </div>
  )
}

export default Column