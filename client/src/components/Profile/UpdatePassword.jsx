import React from 'react'
import Toast from '../Toast/Toast.jsx'
import { useState } from 'react'
import axios from "axios"

const UpdatePassword = () => {
  const [currentPass, setCurrentPass] = useState("")
  const [newPass, setNewPass] = useState("")
  const [confirmPass, setConfirmPass] = useState("")
  const [toast, setToast] = useState()

  // console.log(toast)

  function updatePassword(e) {
    e.preventDefault()
    let url = "http://localhost:7000/api/v1/users/updatepassword"
    let response = axios.put(url, {
      currentPass, newPass, confirmPass
    }, {
      withCredentials: true
    }).then(() => {

      setToast(<Toast msg={response?.response?.data?.message} className={"border-green-500"} />)
      setTimeout(async () => {
        setToast("")
      }, 3000)
    }).catch((response)=>{
      setToast(<Toast error={response?.response?.data?.message} className={"border-red-500"} />)
      setTimeout(async () => {
        setToast("")
      }, 3000)
    })
    //  console.log("res",response.response.data.message)
    //  console.log(response)


    // console.log(toast)
  }
  return (
    <section className='h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white'>

      <section className='h-[90vh] flex flex-col justify-center items-center px-6 py-3'>
        <h1 className='text-center mb-10 md:text-5xl '>Update Password</h1>
        <form action='/' className='h-[80%] w-full md:w-1/3 flex flex-col   justify-evenly  px-5  bg-gradient-to-br from-slate-900 to-slate-600 rounded-2xl'>
          <div>
            <div>
              <label htmlFor='currentPass'>Current Password</label>
            </div>
            <input name='currentPass' type='password' onChange={(e) => {
              setCurrentPass(e.target.value)
            }} className='w-full outline-none bg-transparent border-b-2 px-4 py-2 focus:border-blue-700 transition-border duration-200' />
          </div>

          <div>
            <div>
              <label htmlFor='newPass'>New Password</label>
            </div>
            <input name='newPass' type='password' onChange={(e) => {
              setNewPass(e.target.value)
            }} className='w-full outline-none bg-transparent border-b-2 px-4 py-2 focus:border-blue-700 transition-border duration-200' />
          </div>

          <div>
            <div>
              <label htmlFor='confirmPass'>Confirm Password</label>
            </div>
            <input name='confirmPass' type='password' onChange={(e) => {
              setConfirmPass(e.target.value)
            }} className='w-full outline-none bg-transparent border-b-2 px-4 py-2 focus:border-blue-700 transition-border duration-200' />
          </div>

          <div className='h-[10vh]'>
            <button type='submit' className=' h-[100%] w-full bg-slate-900 rounded-xl hover:bg-blue-600' onClick={(e) => {
              updatePassword(e)
            }} >Update</button>
          </div>
          {toast}
        </form>
      </section>
    </section>
  )
}

export default UpdatePassword
