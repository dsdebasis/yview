import multer from "multer"

const storage = multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,"./uploads/images")
  },
  filename:function(req,file,cb){
    cb(null,file.originalname)
  }
})

const upload = multer({storage})

export {upload}