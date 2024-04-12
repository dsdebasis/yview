import React from 'react'
import profile from "../../assets/profile.png"
import { useState } from 'react'
import axios from "axios"
import Toast from '../Toast/Toast.jsx'
import Loading from '../Loading/Loading.jsx'

import { MsgContext } from '../../Context/Context.jsx'
import { useContext } from 'react'
const Login = () => {
  // const {login,setLogin} = useContext(MsgContext)
  // console.log(login)
  const [toast, setToast] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState("")
  const handleLogin = function (e) {
    e.preventDefault()
    setLoading(true)
    const config = {
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      withCredentials: true,
    };
    const response = axios.post("http://localhost:7000/api/v1/users/login",{
      username,password
    },config)
      .then((res) => {
        setToast(<Toast msg={res?.data?.message} className="border-b-green-600" />)
     
      })
      .catch( (error) => {
        setToast(<Toast msg={error?.response?.data?.message} className="border-b-red-600" />)
        // setLogin(false)
        const timeOutID = setTimeout(() => {
          setToast("")
        }, 3000)
          
        // clearTimeout(timeOutID)

      })
      .finally(() => {
        setLoading(false)
      })
  }

  if (loading) {
    return (<Loading />)
  } else {
    return (
      <div className=' h-screen   bg-gradient-to-r from-slate-900 to-slate-700 flex flex-col  justify-center items-center px-5'>
        <form action='/profile' className='text-white w-full lg:w-[35vw] h-[70vh] lg:h-[80vh]  rounded-3xl flex flex-col justify-evenly lg:justify-around bg-gradient-to-tr from-slate-600 to-slate-900 px-5 md:px-14 '>

          <div className=' self-center justify-self-center'>
            <img src={profile} className='h-[150px] lg:h-[20vh]  rounded-full bg-white' />
          </div>

          <div className='flex flex-col gap-y-4'>
            <div>
              <label className='text-xl'>Username</label>
              <input value={username} onChange={(e) => { setUsername(e.target.value) }} type='text ' className='outline-none  border-b-2 mt-2 w-full py-2 px-3  rounded-md bg-black focus:border-b-blue-600' />
            </div>
            <div>
              <label className='text-xl'>Password</label>
              <input value={password} onChange={(e) => { setPassword(e.target.value) }} type='password' className='outline-none border-b-2 mt-2 w-full py-2  px-3 rounded-md bg-black focus:border-b-blue-600' />
            </div>
          </div>



          <button type='submit' onClick={(e) => {
            handleLogin(e)
          }} className='bg-slate-800 w-full py-3 rounded-2xl hover:bg-slate-950'>Login</button>

        </form>
        {toast}
      </div>
    )
  }
}

export default Login
