import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../service/auth_service'

function Header() {
    const { auth, logout } = useContext(AuthContext);
    return (
        <div className='w-screen h-20 bg-neutral-500 flex justify-evenly items-center'>
            {auth.isLoggedIn ? <div onClick={() => logout()} className='text-2xl text-white cursor-pointer'>Logout</div> : <div className='text-2xl text-white'><Link to="/login">Login</Link></div>}
            {auth.isLoggedIn && <div className='text-2xl text-white' ><Link to="/todo" >TODO</Link></div>}
        </div>
    )
}

export default Header