import React, { useContext, useEffect, useState } from 'react'
import { fetchToken } from '../service/customAxios';
import { AuthContext } from '../service/auth_service';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [cred, setCred] = useState({ email: "", password: "" });
    const { login, auth } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.isLoggedIn) {
            navigate("/todo")
        }
    }, [auth]);

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setCred(prev => setCred({ ...prev, [name]: value }))
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        if (Object.keys(cred).length === 2 && cred.email !== "" && cred.password !== "") {
            await fetchToken(login, cred);
        }
    }

    return (
        <div className='flex justify-center items-center h-screen w-screen bg-slate-700'>
            <div className='bg-white w-1/2 p-10 shadow-xl shadow-black flex flex-col'>
                <div className='flex justify-between items-center'>
                    <div className='text-2xl'>Email</div>
                    <input value={cred?.email} onChange={handleChange} name='email' type="email" className='bg-gray-200 p-3 w-96' />
                </div>

                <div className='flex justify-between items-center mt-3'>
                    <div className='text-2xl'>Password</div>
                    <input value={cred?.password} onChange={handleChange} name='password' className='bg-gray-200 p-3 w-96' type="password" />
                </div>

                <div className='mt-5 flex justify-end'>
                    <button onClick={handleLogin} className='bg-blue-950 text-white px-10 py-3'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login