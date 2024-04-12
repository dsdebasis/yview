import { createContext } from "react"

const MsgContext = createContext("no message")
import { useState } from "react"

const MsgProvider = function ({children}) {
const [login,setLogin] = useState(false)
  return(

  <MsgContext.Provider value={{ login,setLogin }}>
    {children}
  </MsgContext.Provider>
  )

}

export { MsgProvider,MsgContext }