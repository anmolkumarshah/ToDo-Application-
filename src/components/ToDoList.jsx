import React from 'react'
import ToDoItem from './ToDoItem'

function ToDoList({ items, removeHandler }) {
    return (
        <div className='border-2 bg-white mx-32 flex flex-col justify-evenly p-10 mb-5 w-1/2'>
            {items.length === 0 ? <div className='text-2xl text-gray-500 font-semibold capitalize text-center'>NO TODO</div> : items.map(el => <ToDoItem removeHandler={removeHandler} key={el.id} data={el} />)}
        </div>
    )
}

export default ToDoList