import React from 'react'

function ToDoItem({ data, removeHandler }) {

    return (
        <div className='flex justify-between m-1 '>
            <div className='bg-yellow-200  py-2 px-3 text-2xl font-mono w-full mr-2'>{data.title}</div>
            <div onClick={() => removeHandler(data.id)} className='bg-yellow-700 py-3  px-3  text-white cursor-pointer'>Delete</div>
        </div>
    )
}

export default ToDoItem