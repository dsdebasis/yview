import React from 'react'
import { useState } from 'react'
import Loading from '../Loading/Loading.jsx'
import axios from 'axios'
import Toast from '../Toast/Toast.jsx'
import { Link } from 'react-router-dom'
const Signup = () => {

  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [profile, setProfile] = useState("")
  const [coverImage, setCoverImage] = useState("")
  const [loading, setLoading] = useState("")
  const [toast, setToast] = useState("")

  let form = new FormData()
  form.append("fullname", fullname)
  form.append("email", email)
  form.append("username", username)
  form.append("password", password)
  form.append("confirmPassword", confirmPassword)

  const handleRegister = async function (e) {
    e.preventDefault()
    setLoading(true)
    form.append("profilePic", profile)
    form.append("coverImage", coverImage)

    axios.post("http://localhost:7000/api/v1/users/register", form, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then(
      (response) => {
        console.log(response?.data)
        setToast(<Toast msg={response?.data?.message} className="border-l-green-600" />)
      }
    ).catch(function (error) {
      // console.table( error.response.data.error)
      console.log(error)
      setToast(<Toast error={error?.response?.data?.message} msg={error.message} className="border-l-red-600" />)

    }

    ).finally(() => {
      const clearToast = setTimeout(async () => {
        setToast(null)
      }, 3000)
      setLoading(false)
    })
  }

  if (!loading) {
    return (
      <div className='h-screen text-sm md:text-lg  bg-gradient-to-bl from-gray-700 to-indigo-400 flex flex-col  justify-center items-center  md:px-5  relative'>
        <form action='/signup' encType='multipart/form-data' method='POST' className='h-[90vh]  box-border md:w-fit md:h-[90%]  bg-gradient-to-bl from-slate-700 to-gray-900  text-white grid place-content-evenly md:grid-rows-5 md:items-center px-7 py-5 overflow-x-hidden overflow-y-auto rounded-3xl '>

          <h1 className='md:text-3xl text-xl text-center '>Register</h1>

          <div className='md:row-span-3 grid md:grid grid-flow-row  md:grid-cols-2 md:gap-x-10  justify-center '>
            <div className='w-full flex flex-col gap-y-2'>
              <label htmlFor='fullname'>Full Name</label>
              <input name='fullname' value={fullname} onChange={(e) => (setFullname(e.target.value))} type='text' className='box-border bg-transparent border-b-2 outline-none   pb-2 focus:border-blue-700 transition-border duration-200' />

              <label htmlFor='email'>Email</label>
              <input name='email' type='email' value={email} required onChange={(e) => (setEmail(e.target.value))} className='bg-transparent border-b-2  pb-2 outline-none  focus:border-blue-700  transition-border duration-200' />

              <label htmlFor='username'>Username</label>
              <input name='username' value={username} onChange={(e) => (setUsername(e.target.value))} type='text' className='bg-transparent border-b-2 pb-2 outline-none  focus:border-blue-700 transition-border duration-200' />

              <label htmlFor='password'>Password</label>
              <input name='password' value={password} onChange={(e) => (setPassword(e.target.value))} type='password' className='bg-transparent border-b-2  pb-2 outline-none  focus:border-blue-700 transition-border duration-200 ' />


            </div>
            <div className='flex flex-col gap-y-3 md:gap-y-2'>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <input name='confirmPassword' value={confirmPassword} onChange={(e) => (setConfirmPassword(e.target.value))} type='password' className='bg-transparent border-b-2 outline-none   pb-2 focus:border-blue-700 transition-border duration-200' />

              <label htmlFor='profile'>Profile Picture</label>
              <input name='profile' type='file' onChange={(e) => (setProfile(e.target.files[0]))} className='bg-transparent border-b-2 outline-none px-4 py-2 focus:border-blue-700 transition-border duration-200 file:text-xs file:bg-transparent file:border-white file:text-white' />

              <label htmlFor='coverImage'>Cover Image</label>
              <input name='coverImage' type='file' onChange={(e) => (setCoverImage(e.target.files[0]))} className='bg-transparent border-b-2 outline-none px-4 py-2 focus:border-blue-700 transition-all duration-200 file:text-xs file:bg-transparent file:border-white file:text-white ' />
            </div>

          </div>
          <div >
            <h1 className='text-center'>Have account ?<Link to={"/login"}className='text-blue-400 mx-1'>Login</Link></h1>
          </div>
          <button type='submit' className='h-12 md:h-14 w-full bg-blue-600 rounded-xl hover:bg-red-600' onClick={handleRegister}>Register</button>

        </form>

        {toast}

      </div>
    )
  } else {
    return (
      <Loading />
    )
  }

}

export default Signup
