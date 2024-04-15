import { createSlice } from "@reduxjs/toolkit"
import Cookie from "js-cookie"

let initialState = {
  status:false,
  userData:null,
}

const cookieData =  Cookie.get("auth_info")

if(cookieData){
  const data = JSON.parse(cookieData)
  console.log(data)
  initialState.status = data.status
  initialState.userData=data.userData
}


const authSlice = createSlice({
  name:"auth",
  initialState,
  reducers:{
    login:function(state,action){
      state.status=true
      state.userData = action.payload
      Cookie.set("auth_info",JSON.stringify({status:true,userData:action.payload}),{expires:1})
    },
    logout:function(state){
      Cookie.remove("auth_info")
      state.status = false
      state.userData =null 
    }
  }
})

export default authSlice.reducer
export const {login,logout} = authSlice.actions