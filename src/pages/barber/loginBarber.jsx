import { useState } from 'react'
import { loginEmployee } from '../../api/auth'
import { useNavigate } from "react-router-dom";

function LoginBarber() {
    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    const [messageApi, setMessageApi] = useState('')
    const navigate = useNavigate()


    async function handleSubmit(event){
        event.preventDefault()
        const data = await loginEmployee(login, pass)
        setMessageApi(data.message)
        
        if(data.status == 1){
            navigate("/dashboard")
        }
    }

    return (
        <div className=''>
            <form onSubmit={handleSubmit} className='w-full h-[100vh] bg-red-300 flex items-center justify-center flex-col gap-[10px]'>
                <label htmlFor="">Login</label>
                <input type="text" onChange={(e) => setLogin(e.target.value)} value={login}/>
                
                <label htmlFor="">Senha</label>
                <input type="password" onChange={(e) => setPass(e.target.value)} value={pass}/>

                <button className='bg-green-300'>Submit</button>
                <h1 className='bg-green-300 w-auto h-[30px]'>{messageApi}</h1>
            </form>
        </div>
    )
}

export default LoginBarber
