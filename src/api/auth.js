import api from "./axios"
import {userAuth, passAuth} from "../secrets/secrets"


export const logoutEmployee = async () =>{
    try {
        const response = await api.get("/logout",{withCredentials: true})

        console.log(response.data)
        localStorage.removeItem("token")
        window.location.href = "/"
        return response.data
    } catch (erro){
        console.error("Erro no logout.:", erro.response?.data || erro.message)
    }
}

export const validToken = async () =>{
    const token = localStorage.getItem("token")

    console.log(token)
    try {
        const response = await api.get("/valid-token", {
            headers: {
                Authorization: `Bearer ${token}`,
            }, 
        })
        console.log('valid')
        
        return response.data
    } catch (erro) {
        console.error("Erro na validação do token.:", erro.response?.data || erro.message)
        localStorage.removeItem("token")

        try {
            const response = await api.get("/generate-access-token", {
                withCredentials: true 
            })

            console.log('gerado novo token access')
            console.log(response.data)
            localStorage.setItem("token", response.data.accessToken)


            return response.data

        } catch (erro){
            console.error("Erro na validação do token.:", erro.response?.data || erro.message)
            window.location.href = "/"
        }
        return erro.response.data
    }

}

export const loginEmployee = async (mail, pass) => {
    const credentials = btoa(`${userAuth}:${passAuth}`)

    console.log(`${mail} ${pass}`)
    const ua = navigator.userAgent

    let os = "Unknown"
    if (/Windows NT 10.0|Windows NT 6.1/.test(ua)) os = "Windows"
    else if (/Macintosh/.test(ua)) os = "Mac OS"
    else if (/Linux|Ubuntu|Fedora/.test(ua)) os = "Linux"
    else if (/Android/.test(ua)) os = "Android"
    else if (/iPhone|iPad|iPod/.test(ua)) os = "iOS"

    let browser = ua.match(/Chrome|Firefox|Safari|OPR|Edge/)?.[0] || "Unknown"

    const deviceInfo = `${browser} - ${os}` 
    console.log(deviceInfo)
    
    try {
        const response = await api.post("/login", {mail, pass, deviceInfo},{
            headers: {
                Authorization: `Basic ${credentials}`,
            }, 
            withCredentials: true 
        })

        console.log(response.data)
        localStorage.setItem("token", response.data.accessToken)
        return response.data
    } catch (err) {
        console.error("Erro no login:", err.response?.data || err.message)
        return err.response.data
    }
}