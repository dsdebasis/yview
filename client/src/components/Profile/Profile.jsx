import React from 'react'
import { useContext } from 'react'
import { MsgContext } from '../../Context/Context.jsx'

import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import Toast from '../Toast/Toast.jsx'
const Profile = () => {
  let [updateFullname, setFullname] = useState("")
  let [updateEmail, setUpdateEmail] = useState("")
  let [updateUsername, setUpdateUsername] = useState("")
  let [profilePicUrl, setProfilePicUrl] = useState("")
  const [toast, setToast] = useState("")

  let url = "http://localhost:7000/api/v1/users/profile";
  let res;
  useEffect(() => {
    // let resData;
    const getProfile = async function () {
      res = await axios.put(url, {}, {
        withCredentials: true
      })
      console.log(res.data)
      res = res?.data?.data
      setFullname(res.fullname)
      setUpdateEmail(res.email)
      setProfilePicUrl(res.profilePic)
      setUpdateUsername(res.username)
    }
    getProfile()


  }, [updateEmail, updateFullname, updateUsername])

  const updateProfile = (e) => {
    e.preventDefault()
    let resdata = axios.put(url, {
      updateEmail, updateFullname, updateUsername
    }, {
      withCredentials: true
    }).then(() => {

      setToast(<Toast msg={"profile details updated successfully"} className={"border-l-green-500"} />)

      setTimeout( () => {
        setToast("")
      }, 3000)
    }).catch(() => {
      setToast(<Toast erorr={resdata?.response?.data?.message} className={"border-l-green-500"} />)

      setTimeout(() => {
        setToast("")
      }, 3000)

    })

  }

  return (
    <div className='h-screen bg-gradient-to-r from-slate-900 to-slate-700 flex justify-center items-center'>

      <section className='h-[90vh]  w-[90vw] md:w-[30vw] shadow-2xl  text-white  rounded-3xl py-4 grid grid-flow-row  grid-rows-4   gap-y-5 p-4 bg-gradient-to-br  '>
        <div className=' place-self-center mt-10 '>
          <img src={profilePicUrl} className='h-[18vh] w-[18vh] border-2 rounded-full shadow-md'></img>

        </div>
        <form className='h-[90%]  mt-10 row-span-3 flex flex-col justify-around px-7 bg-gradient-to-bl from-slate-600  shadow-xl rounded-xl py-2 '>

          <h1 className='text-center md:text-3xl'>Update Details</h1>
          <label htmlFor='updateFullname'>Full Name</label>
          <input name='updateFullname' type='text' onChange={(e) => setFullname(e.target.value)} className='outline-0 bg-gradient-to-br from-gray-700 to-slate-500 px-3 py-2 rounded-md placeholder:text-orange-400' placeholder={updateFullname} />

          <label htmlFor='updateEmail'>Email</label>
          <input name='updateEmail' type='email' onChange={(e) => setUpdateEmail(e.target.value)} className='outline-0 bg-gradient-to-br from-gray-700 to-slate-500 px-3 py-2 rounded-md placeholder:text-orange-400' placeholder={updateEmail} />

          <label htmlFor='updateUsername'>Username</label>
          <input name='updateUsername' type='text' onChange={(e) => setUpdateUsername(e.target.value)} className='outline-0 bg-gradient-to-br from-gray-700 to-slate-500 px-3 py-2 rounded-md placeholder:text-orange-400' placeholder={updateUsername} />


          <button type='submit' className='h-14 md:h-[8vh] w-full bg-slate-900 rounded-xl hover:bg-blue-600' onClick={(e) => updateProfile(e)} >Update</button>

        </form>
      </section>
      {toast}
    </div>

  )
}

export default Profile
