import React, { useContext, useEffect, useState } from 'react'
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';
import { AuthContext } from '../service/auth_service';
import { useNavigate } from 'react-router-dom';

function ToDoApp() {
    const [todo, setToDo] = useState([]);
    const { auth, axiosInstance } = useContext(AuthContext);
    const navigate = useNavigate();

    const fetchAllToDo = async () => {
        const response = await axiosInstance.get("/todo");
        if (response.status === 200) {
            setToDo(response.data);
        }
    }

    useEffect(() => {
        if (!auth.isLoggedIn) {
            navigate("/login")
        } else {
            fetchAllToDo();
        }
    }, [])

    useEffect(() => {
        if (!auth.isLoggedIn) {
            navigate("/login")
        }
    }, [auth])

    const handleAdd = async (text) => {
        if (todo != null) {
            const response = await axiosInstance.post("/todo", { title: text });
            setToDo(prev => [...prev, response.data]);
        }
    }

    const removeTodo = async (id) => {
        if (id != null) {
            const response = await axiosInstance.delete("/todo/" + id);
            console.log(response);
            if (response.status === 202) {
                const updatedList = todo.filter(el => el.id !== id);
                setToDo([...updatedList]);
            }
        }
    }

    return (
        <div className='bg-slate-700 h-screen w-screen flex flex-col justify-center items-center'>
            <ToDoList removeHandler={removeTodo} items={todo} />
            <AddToDo addHandler={handleAdd} />
        </div>
    )
}



export default ToDoApp