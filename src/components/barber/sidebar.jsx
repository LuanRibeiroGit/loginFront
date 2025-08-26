import { useState } from 'react'
import logo from '../../assets/logo.png'
import { HiOutlineMenu } from 'react-icons/hi'
import { HiOutlineViewGrid } from 'react-icons/hi'
import { HiOutlineUser } from 'react-icons/hi'
import { HiOutlineCog } from 'react-icons/hi'
import { HiOutlineLogout } from 'react-icons/hi'
import { IoCalendarNumberOutline } from "react-icons/io5";

import DashBarber from '../../pages/barber/dashBarber'
import AppointmentsBarber from '../../pages/barber/appointmentsBarber'
import ProfileBarber from '../../pages/barber/profileBarber'
import SettingsBarber from '../../pages/barber/settingsBarber'

import { logoutEmployee } from '../../api/auth'

export default function Sidebar({ children, user  }) {
    const [isOpen, setIsOpen] = useState(false)

    const [routesBarber, setRoutesBarber] = useState('0')

    async function handleRoutes(value) {
        console.log(value)
        setRoutesBarber(value)

    }

    async function handleClickLogout(){
        //logoutEmployee()
        console.log(user)
    }
    return (
        <div className='relative h-screen'>
            <div className={`fixed top-0 left-0 flex gap-4 h-screen bg-[#343343] flex flex-col items-center transition-all duration-300 z-50 ${ isOpen ? 'w-64' : 'w-16'}`}>
                <div className={`w-full mt-4 flex flex-col ${ isOpen ? 'items-end' : 'items-center'}`}>
                    <img className='w-14 p-3' src={logo} alt="" />
                    <button className='w-[50px] h-[50px] rounded text-white flex items-center justify-center' onClick={() => setIsOpen(!isOpen)}>
                        <HiOutlineMenu className='w-7 h-7' />
                    </button>
                </div>
                <nav className={`flex flex-col gap-3 text-white`}>
                    <a href='#' className={`p-3 flex gap-2 hover:bg-[#242433] shadow-[0px_0px_10px_rgba(0,0,0,0.2)] rounded transition-all duration-300 ${ isOpen ? 'pl-5 w-[220px]' : 'justify-center bg-[#14141b]'}`} onClick={() => handleRoutes(0)}>
                        <HiOutlineViewGrid size={20} /> {isOpen && 'Dashboard'}
                    </a>
                    { user.position == 1 &&
                        <a href='#' className={`p-3 flex gap-2 hover:bg-[#242433] shadow-[0px_0px_10px_rgba(0,0,0,0.2)] rounded transition-all duration-300 ${ isOpen ? 'pl-5 w-[220px]' : 'justify-center bg-[#14141b]'}`} onClick={() => handleRoutes(1)}>
                            <IoCalendarNumberOutline size={20} /> {isOpen && 'Agendamentos'}
                        </a>
                    }
                    { user.position == 1 &&
                        <a href='#' className={`p-3 flex gap-2 hover:bg-[#242433] shadow-[0px_0px_10px_rgba(0,0,0,0.2)] rounded transition-all duration-300 ${ isOpen ? 'pl-5 w-[220px]' : 'justify-center bg-[#14141b]'}`} onClick={() => handleRoutes(2)}>
                            <HiOutlineUser size={20} /> {isOpen && 'Perfil'}
                        </a>
                    }
                    { user.position == 1 &&
                        <a href='#' className={`p-3 flex gap-2 hover:bg-[#242433] shadow-[0px_0px_10px_rgba(0,0,0,0.2)] rounded transition-all duration-300 ${ isOpen ? 'pl-5 w-[220px]' : 'justify-center bg-[#14141b]'}`} onClick={() => handleRoutes(3)}>
                            <HiOutlineCog size={20} /> {isOpen && 'Configurações'}
                        </a>
                    }
                    <a href='#' onClick={handleClickLogout} className={`p-3 flex gap-2 hover:bg-[#242433] shadow-[0px_0px_10px_rgba(0,0,0,0.2)] rounded transition-all duration-300 ${ isOpen ? 'pl-5 w-[220px]' : 'justify-center bg-[#14141b]'}`}>
                        <HiOutlineLogout size={20} /> {isOpen && 'Sair'}
                    </a>
                </nav>
            </div>
            
            {   routesBarber == 0 && <DashBarber user={user}/>    }
            {   routesBarber == 1 && <AppointmentsBarber user={user}/>    }
            {   routesBarber == 2 && <ProfileBarber user={user}/>    }
            {   routesBarber == 3 && <SettingsBarber user={user}/>    }

        </div>
    )
}
