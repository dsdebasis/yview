import { asyncHandler } from "../utils/AsyncHandler.js"
import { User } from "../models/user.model.js"
import { ApiResponse } from "../utils/ApiResponse.js"


const profile = asyncHandler(async (req, res, next) => {
  const loginUser = await User.findById(req.user._id).select("-password -refreshToken -activeDevice -watchHistory ")
  const {  fullname, email, username } = loginUser
  // console.log(fullname,email,username)

  const { updateFullname, updateEmail, updateUsername } = req.body

  console.log(updateFullname, updateEmail, updateUsername)
  let updateDetails

  if ( updateFullname || updateEmail || updateUsername) {

    updateDetails = await User.findByIdAndUpdate(req.user._id, {
      $set: {
        fullname: updateFullname ,
        email: updateEmail ,
        username: updateUsername 
      }
    },{
      new:true
    },).select("-password -refreshToken  -activeDevice")
  }

  return res.status(200).json(new ApiResponse(200, "profile details fetched successfully",updateDetails || loginUser ))

})

export { profile }