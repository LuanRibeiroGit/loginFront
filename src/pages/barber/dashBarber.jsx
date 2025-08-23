import { useState } from 'react'
import { validToken } from '../../api/auth'

function DashBarber() {
    
    async function handleClickVerifyToken(params) {
        const verifyToken = await validToken()
        
    }

    return (
        <div className=''>
            <h1>Bem vindo</h1>
            <button className='bg-green-300' onClick={handleClickVerifyToken}>valid token</button>
        </div>
    )
}

export default DashBarber
