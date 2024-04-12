import './App.css'
import { MsgProvider } from './Context/Context.jsx'
import {  RouterProvider } from 'react-router-dom'
import { Routes } from './Routes/Routes.jsx'
function App() {

  return (
    <MsgProvider>
      <RouterProvider router={Routes}/>
    </MsgProvider>
  )
}

export default App
