import { cookies } from "next/headers"

const setToken = (data:string) =>{
    const cookieStore = cookies()
    const token = cookieStore.set('token',data)
    return token
}

export default setToken