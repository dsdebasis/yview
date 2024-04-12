import { Router } from "express"
import { registerUser,login,  logout } from "../controllers/user.controller.js"
import { authenticate } from "../middlewares/auth.mwire.js"
import { upload } from "../middlewares/multer.mwire.js"
import { profile } from "../controllers/profile.js"

import { updatePassword } from "../controllers/updatePassword.js"
const router = Router()
router.route("/register").post( upload.fields([
  {
    name:"profilePic",maxCount:1
  },
  {
    name:"coverImage",maxCount:1
  }
]),registerUser)

router.route("/login").post(login)

router.route("/logout").post(authenticate,logout)
router.route("/profile").put(authenticate,profile)
router.route("/updatepassword").put(authenticate,updatePassword)


export  default router