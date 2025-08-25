import { useState } from 'react'
import { loginEmployee } from '../../api/auth'
import { useNavigate } from "react-router-dom";

import newdawn from '../../assets/newdawn.png'

function LoginBarber() {
    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    const [messageApi, setMessageApi] = useState('')
    const [error, setError] = useState(false);

    const navigate = useNavigate()


    async function handleSubmit(event){
        event.preventDefault()
        const data = await loginEmployee(login, pass)

        if(!data.status){
            setError(true)
            setMessageApi(data.message)
            setTimeout(() => setError(false), 3000)
        }
        
        if(data.status == 1){
            navigate("/dashboard")
        }
    }

    return (
        <div className='w-full h-[100vh] flex items-center justify-center'>
            <div className={`absolute top-4 right-4 px-4 py-2 rounded shadow-lg bg-red-500 text-white transition-all duration-700 ${error ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none" }`}>{messageApi}</div>
            <div className='w-[500px] h-[600px] bg-[#181820] rounded-[20px] flex flex-col items-center justify-center shadow-[0px_0px_10px_rgba(0,0,0,0.2)]'>
                <form onSubmit={handleSubmit} className='flex items-center justify-center flex-col gap-[15px] h-[85%] '>
                    <h1 className='text-[#f2f2f2] text-[40px] font-bold'>Login</h1>
                    <input type="email" onChange={(e) => setLogin(e.target.value)} placeholder='E-mail' value={login} className='w-[320px] h-[55px] border border-[#343343] rounded-[10px] border-[2px] bg-[#181820] text-[16px] text-[#f2f2f2] p-4 focus:border-gray-600 focus:outline-none'/>
                    <input type="password" onChange={(e) => setPass(e.target.value)} placeholder='Senha' value={pass} className='w-[320px] h-[55px] border border-[#343343] rounded-[10px] border-[2px] bg-[#181820] text-[16px] text-[#f2f2f2] p-4 focus:border-gray-600 focus:outline-none'/>
                    <button className='w-[320px] h-[55px] text-[20px] text-[#f2f2f2] rounded-[10px] transition-all duration-[1500ms] ease-in-out bg-gradient-to-br from-[#343343] via-[#343343] to-[#0f0f0f] bg-[length:200%_200%] hover:shadow-[0_0_20px_#14141b] hover:bg-[position:right]'>Entrar</button>
                </form>

                <img src={newdawn} className='w-[100px] ' alt="" />
            </div>
        </div>
    )
}

export default LoginBarber
