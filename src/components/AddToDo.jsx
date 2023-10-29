import React, { useState } from 'react'

function AddToDo({ addHandler }) {
    const [text, setText] = useState("");


    const handleChange = (e) => {
        const value = e.target.value;
        setText(value);
    }
    const handleAdd = async (e) => {
        e.preventDefault();
        if (text !== "") {
            await addHandler(text);
            setText("")
        }
    }



    return (
        <div className='border-2 bg-white mx-32 flex justify-evenly p-10 w-1/2'>
            <input value={text} onChange={handleChange} className='bg-gray-300 w-2/3 border-1 border-black p-2' type="text" />
            <button onClick={handleAdd} className='bg-yellow-700 px-3 text-white'>Add ToDo</button>
        </div>
    )
}

export default AddToDo