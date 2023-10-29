import {createSlice} from '@reduxjs/toolkit'
import Cookies from "js-cookie";
const initialState={
    token:'',
    role:'',
    userId:"",
    isLogedInStatus:false,
    current_user_info:{},

}


const authSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        logedin:(state,data)=>{
            console.log(state)
            state.token=data.payload.token
            state.role=data.payload.role,
            state.isLogedInStatus=true
            state.userId=data.payload.userId

        },
        logedOut:(state)=>{
            state.token='',
            state.role='',
            state.userId="",
            state.current_user_info={}
            state.isLogedInStatus=false
            Cookies.set("simotapp_jwtToken",""),
            Cookies.set("simotapp_roles",""),
            Cookies.set("simotapp_isLoggedIn",""),
            Cookies.set("simotapp_UserId","")
        },
        loadUser:(state,data)=>{
            state.current_user_info=data.payload
        }
      

    }

})



export default authSlice.reducer
export const {logedOut,logedin,setUser,loadUser}=authSlice.actions
