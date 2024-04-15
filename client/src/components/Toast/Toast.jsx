import React, { useState } from 'react'
import { useContext } from 'react'
import { MsgContext } from '../../Context/Context.jsx'
import { useEffect } from 'react'
const Toast = (children) => {
  const [className, setClassName] = useState("")

  return (
    <div className={`min-h-14 text-sm md:max-h-[30vh] md:min-h-24  bg-gradient-to-bl from-gray-700 to-neutral-800 text-justify w-[70vw] md:w-[30vw] md:max-w-[40vw] rounded-md absolute top-[10vh] left-[50vw] translate-x-[-50%]  shadow-2xl flex flex-col  justify-center items-center  transition-display duration-300 ease-in-out border-l-4 border-l-green-600  border-yellow-50 text-white   ${className} ${children.className}`}>
      <div className='flex items-center px-2 border-b-white '>
        <div className=' text-white text-left  md:text-lg '>{children.error}</div>

        
          <button onClick={() => {
            setClassName("hidden")
            
          }} className="fixed right-2 top-4 text-xs md:text-3xl  hover:bg-green-500 hover:text-yellow-50 px-1 rounded-lg duration-300 border-2 mx-2">X</button>
        
      </div>
      <div className=' text-xs md:text-xl text-yellow-500 px-10'>
        {children.msg }
      </div>
    </div>
  )
}

export default Toast
