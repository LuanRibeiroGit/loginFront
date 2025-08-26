import { useNavigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import React, { useEffect, useState } from "react";
import { validToken } from "../../api/auth"

export default function ProtectedRoute({ children }) {
    const [user, setUser] = useState('')
    const token = localStorage.getItem("token")
    const navigate = useNavigate()

    useEffect(() => {
        const checkToken = async () => {
            if (!token) {
                navigate('/')
                return
            }

            try {
                const decoded = jwtDecode(token)


                console.log('teste token')
                console.log(decoded)
                console.log('teste token')
                // const now = Date.now() / 1000

                // if (decoded.exp < now) {
                //     localStorage.removeItem("token")
                //     return
                // }
                console.log(112312)
                const result = await validToken()
                console.log(result.status)
                if(result.status !== 1) {
                    console.log(2332)
                    localStorage.removeItem("token")
                    navigate('/')
                }
                setUser(decoded)
            } catch (err) {
                localStorage.removeItem("token")
                navigate('/')
            }
        }

        checkToken()
    }, [token])

    return children(user)
}