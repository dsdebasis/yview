import React from 'react'

const Loading = () => {
  return (

    <div className='h-screen text-sm md:text-lg  bg-gradient-to-r from-slate-900 to-slate-700 flex flex-col  justify-center items-center px-5 text-white transition-all duration-300 backdrop:filter backdrop-blur-xl opacity-85'>
     <h1 className='text-4xl '>Loading <span className='animate-ping text-red-500'>...</span></h1>
    </div>

  )
}

export default Loading
