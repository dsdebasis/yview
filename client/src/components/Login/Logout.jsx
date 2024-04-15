import React from 'react'
import axios from "axios"
import Toast from '../Toast/Toast.jsx'
import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { logout as authLogout } from '../../store/authSlice.js'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
const Logout = () => {

  const [toast, setToast] = useState("")
  const [clickBtn, setClickBtn] = useState("")

  const dispatch = useDispatch()

  const handleLogout = async function (e) {
    e.preventDefault()
    setClickBtn(true)
    axios.post("http://localhost:7000/api/v1/users/logout", {}, {
      withCredentials: true
    })
      .then(function  (response) {

        setToast(<Toast msg={response?.data?.message} className={"border-l-green-500"} />)
         dispatch(authLogout())
         
      }).catch(async function (error) {

        
        setToast(<Toast error={error?.response?.data?.message} msg={"please login"} className={"border-l-red-600"} />)

        let timeOutId = setTimeout(() => {
          setToast("")
          setClickBtn(false)
        }, 3000)


      }
      ).finally(() => {
        setClickBtn(false)
      })
  }

 
  return (
    <div className='h-screen bg-gradient-to-bl from-slate-700 to-slate-950 flex justify-center items-center transition-all ease-in-out '>
      <button  className='px-2 py-2 border-2 shadow-2xl shadow-orange-400 border-white text-white rounded-lg disabled:border-red-600 disabled:blur-sm disabled:cursor-not-allowed' onClick={handleLogout} disabled={Boolean(clickBtn)}>Logout</button>
      {toast}
    </div>
  )

}
export default Logout
