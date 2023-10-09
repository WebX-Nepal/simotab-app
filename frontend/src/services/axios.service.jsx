import axios from 'axios'

const serverUrl=import.meta.env.VITE_API_URL ?? ''

export const addData=async(url,data)=>{
    try {
        const response=await axios.post(`${serverUrl}/${url}`,data)      
        return response.data
    } catch (error) {
        console.log(error)
    }
}



export const postDataWithHeader=async(url,data,token)=>{
    try {
        const response=await axios.post(`${serverUrl}/${url}`,data,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}




export const getData=async(url,token)=>{

    try {
        const response=await axios.get(`${serverUrl}/${url}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}
export const deleteData=async(url,token)=>{

    try {
        const response=await axios.delete(`${serverUrl}/${url}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}


export const getDataWithoutHeader=async(url)=>{
    try {
        const response=await axios.get(`${serverUrl}/${url}`)
        return response.data
    } catch (error) {
        console.log(error)
    }

}