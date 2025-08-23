import api from "./axios";

export const validToken = async () =>{

    const token = localStorage.getItem("token");

    try {
        const response = await api.get("/valid-token", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        console.log(1)
        console.log(response.data)
        return response.data
    } catch (err) {
        console.error("Erro na validação do token.:", err.response?.data || err.message);
        localStorage.removeItem("token");
        window.location.href = "/";
        return err.response.data
    }

}

export const loginEmployee = async (mail, pass) => {
    const credentials = btoa(`micecrew1:0147568293123`);

    console.log(`${mail} ${pass}`)

     try {
        const response = await api.post("/login", {mail, pass},{
            headers: {
                Authorization: `Basic ${credentials}`,
            },
        });

        console.log(response.data)
        localStorage.setItem("token", response.data.token);
        return response.data
    } catch (err) {
        console.error("Erro no login:", err.response?.data || err.message);
        return err.response.data
    }
}