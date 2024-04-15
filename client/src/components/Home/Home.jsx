import React from 'react'
import { Link } from 'react-router-dom'
import { useId } from 'react'
import { useSelector } from 'react-redux'
const Home = () => {
  let navItems = ["Login","SignUp","Profile","UpdateProfile","UpdatePassword","Logout"]
  let authStatus =  useSelector((state)=>state.auth.status)
  // if(authStatus === true){
  //  navItems =["Profile","UpdateProfile","UpdatePassword","Logout"]
  // }
  return (
    <section className='h-screen overflow-hidden box-border bg-gradient-to-r from-slate-900 to-slate-700'>
      <nav className='max-h-screen h-[40vh] md:h-[10%] m-2  border-b-2  border-b-slate-400     rounded-xl text-yellow-50 flex flex-col justify-around md:flex-row md:justify-evenly md:items-center shadow-xl bg-gradient-to-br from-slate-600 to-slate-800'>
      {navItems.map((item,id)=>
         <Link to={"/" + item } key={id} className=' mx-3 hover:text-amber-400 hover:duration-200 transition-border '>{item}</Link>
      )}
      </nav>

      
    </section>
  )
}

export default Home
