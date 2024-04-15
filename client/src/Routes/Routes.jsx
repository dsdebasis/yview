import { createBrowserRouter } from 'react-router-dom'
import { Home, Login, Signup, Profile, UpdatePassword, UpdateProfile } from "../components/index.js"
import Logout from '../components/Login/Logout.jsx'
import AuthLayout from './AuthLayout.jsx'
const Routes = createBrowserRouter([
  {
    path: "/", element: (
      <Home />
    ),

  },
  {
    path: "/login", element: (
      <Login />
    )
  },
  {
    path: "/signup", element: (
      <Signup />
    )
  },
  {
    path: "/Profile", element: (
      <AuthLayout >
        <Profile />
      </AuthLayout>
    )
  },
  {
    path: "/UpdateProfile", element: (
      <AuthLayout >
        <UpdateProfile />
      </AuthLayout>
    ),

  },
  {
    path: "/UpdatePassword", element: (
      <AuthLayout >
        <UpdatePassword />
      </AuthLayout>
    )
  }, {
    path: "/logout", element: (
      <AuthLayout >
        <Logout />
      </AuthLayout>

    )
  }
])

export { Routes }


// const Routes =  createBrowserRouter(createRoutesFromElements(
//   <Route path='/' element={<Home/>}>
//     <Route path='login' element={<Login/>}/>
//     <Route path='signup' element={<Signup/>}/>
//     <Route path='profile' element={<UpdateDetails/>}/>
//     <Route path='update profile' element={<UpdateProfile/>}/>
//     <Route path='Update Password' element={<UpdatePassword/>}/>
//   </Route>
// ))

// export {Routes}