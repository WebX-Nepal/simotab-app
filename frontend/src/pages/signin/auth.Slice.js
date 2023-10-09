import {createSlice} from '@reduxjs/toolkit'

const initialState={
    token:'',
    role:'',
    isLogedInStatus:false

}


const authSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        logedin:(state,data)=>{
            state.token=data.payload.token
            state.role=data.payload.role,
            state.isLogedInStatus=true
        },
        logedOut:(state)=>{
            state.token='',
            state.role='',
            state.isLogedInStatus=false
        }

    }

})



export default authSlice.reducer
export const {logedOut,logedin}=authSlice.actions
