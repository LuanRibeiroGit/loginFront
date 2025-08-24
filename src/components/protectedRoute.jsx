import { useNavigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import { useState, useEffect } from "react"
import { validToken } from "../api/auth"

export default function ProtectedRoute({ children }) {
    const token = localStorage.getItem("token")
    const navigate = useNavigate()

    console.log(12321)
    useEffect(() => {
        const checkToken = async () => {
            if (!token) {
                navigate('/')
                return
            }

            try {
                const decoded = jwtDecode(token)
                const now = Date.now() / 1000

                if (decoded.exp < now) {
                    localStorage.removeItem("token")
                    return
                }
                console.log(1)
                const result = await validToken()

                if(result.status !== 1) {
                    
                    localStorage.removeItem("token")
                    navigate('/')
                }

            } catch (err) {
                localStorage.removeItem("token")
                console.log(2)
                navigate('/')
            }
        }

        checkToken()
    }, [token])

    return children
}