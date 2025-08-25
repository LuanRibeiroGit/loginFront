import { useState } from 'react'
import { validToken, logoutEmployee } from '../../api/auth'
import { useNavigate } from "react-router-dom";

function DashBarber() {
    const navigate = useNavigate()


    async function handleClickVerifyToken() {
        const verifyToken = await validToken()
    }
    async function handleClickLogout(params) {
        await logoutEmployee()
    }

    return (
        <div className=''>
            <h1>Bem vindo</h1>
            <button className='bg-green-300' onClick={handleClickVerifyToken}>valid token</button>
            <button className='bg-red-300' onClick={handleClickLogout}>logout</button>
        </div>
    )
}

export default DashBarber
