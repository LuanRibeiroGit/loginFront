import { useState, useEffect } from 'react'
import { validToken, logoutEmployee } from '../../api/auth'
import { useNavigate } from "react-router-dom";

function DashBarber({ user }) {
    const [welcome, setWelcome] = useState(false)
    const navigate = useNavigate()


    useEffect(() => {
        setWelcome(true)
        const timer = setTimeout(() => setWelcome(false), 3000)
        return () => clearTimeout(timer);
    }, []);

    
    async function handleClickVerifyToken() {
        const verifyToken = await validToken()
        console.log(1131232)
        console.log(user)
    }
    async function handleClickLogout(params) {
        await logoutEmployee()
    }

    return (
        <div className='ml-16'>
            <h1>Bem vindo{user.name}</h1>
            <div className={`absolute top-4 right-4 px-4 py-2 rounded shadow-lg bg-[#343343] text-white transition-all duration-700 ${welcome ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none" }`}>bem vindo {user.name} {user.surname}</div>
            <button className='bg-green-300' onClick={handleClickVerifyToken}>valid token</button>
            <button className='bg-red-300' onClick={handleClickLogout}>logout</button>
        </div>
    )
}

export default DashBarber
