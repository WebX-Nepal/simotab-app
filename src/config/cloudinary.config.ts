import cloudinary from "cloudinary"
import enviroment from '../utils/validateenv'


cloudinary.v2.config({
    cloud_name:enviroment.CLOUDINARY_CLIENT_NAME,
    api_key:enviroment.CLOUDINARY_CLIENT_API,
    api_secret:enviroment.CLOUDINARY_CLIENT_SECRET
})


export default cloudinary    


