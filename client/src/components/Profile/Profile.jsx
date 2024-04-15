import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import Toast from '../Toast/Toast.jsx'

const Profile = () => {
   const  [updateFullname, setFullname] = useState("")
  const [updateEmail, setUpdateEmail] = useState("")
  let [updateUsername, setUpdateUsername] = useState("")
  const [profilePicUrl, setProfilePicUrl] = useState("")
  const [toast, setToast] = useState("")
  const [click,setClcik] = useState(false)
  let url = "http://localhost:7000/api/v1/users/profile";

  useEffect(() => {
    // let resData;
    const getProfile = async function () {
       axios.get(url,{
        withCredentials: true
      }).then((res)=>{

        res = res?.data?.data
        // console.log(res)
        setFullname(res?.fullname)
        setUpdateEmail(res?.email)
        setProfilePicUrl(res?.profilePic)
        setUpdateUsername(res?.username)
      })
    }
    getProfile()
    

  }, [])

  const updateProfile = (e) => {
    e.preventDefault()
    setClcik(true)
    let resdata = axios.put(url, {
      updateEmail:updateEmail, updateFullname:updateFullname, updateUsername:updateUsername
    }, {
      withCredentials: true
    }).then((res) => {
       console.log(res?.data.data)
       setUpdateUsername(res?.data?.data?.username)
       setUpdateEmail(res?.data?.data?.email)
       setFullname(res?.data?.data?.fullname)
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
          <input id='updateFullname' name='updateFullname' type='text' onChange={(e) => setFullname(e.target.value)} className='outline-0 bg-gradient-to-br from-gray-700 to-slate-500 px-3 py-2 rounded-md placeholder:text-orange-400' placeholder={updateFullname} />

          <label htmlFor='updateEmail'>Email</label>
          <input id='updateEmail' name='updateEmail' type='email' onChange={(e) => setUpdateEmail(e.target.value)} className='outline-0 bg-gradient-to-br from-gray-700 to-slate-500 px-3 py-2 rounded-md placeholder:text-orange-400' placeholder={updateEmail} />

          <label htmlFor='updateUsername'>Username</label>
          <input id='updateUsername' name='updateUsername' type='text' onChange={(e) =>{
            setUpdateUsername(e.target.value)
            console.log("update username",e.target.value)
            
           }} className='outline-0 bg-gradient-to-br from-gray-700 to-slate-500 px-3 py-2 rounded-md placeholder:text-orange-400' placeholder={updateUsername} />


          <button type='submit' className='h-14 md:h-[8vh] w-full bg-slate-900 rounded-xl hover:bg-blue-600' onClick={(e) => updateProfile(e)} >Update</button>

        </form>
      </section>
      {toast}
    </div>

  )
}

export default Profile
