import React from 'react'
import imman from "../../assets/imman.jpg"
const UpdateProfile = () => {

 

  return (
    <section className='md:h-screen w-full  bg-gradient-to-r from-slate-900 to-slate-700 flex flex-col py-10'>
      <div className='  md:h-[90vh]  justify-self-center text-white grid  py-3 px-2'>
        <h1 className='mt-4 text-center md:text-4xl'>Update Profile And Cover</h1>
        <div className=' flex  flex-row flex-wrap justify-center  gap-y-9 p-5 md:gap-x-5'>
          <div>
            <img className=' md:w-[100%] md:h-[50vh] rounded-2xl shadow-2xl' src={imman} />
            <input type='file' name='profile' className='mt-5 outline-none  border-2 rounded-lg px-1 py-2' />
          </div>

          <div>
            <img className='md:w-[100%] md:h-[50vh] rounded-2xl shadow-2xl' src={imman} />
            <input type='file' name='cover' className='mt-5 outline-none  border-2 rounded-lg px-1 py-2' />
          </div>


        </div>

        <div className='md:w-[50vw] md:place-self-center px-5'>
          <button className='h-14  w-full  bg-slate-900 rounded-xl hover:bg-blue-600'>Update </button>

        </div>
      </div>
    </section>
  )
}

export default UpdateProfile
