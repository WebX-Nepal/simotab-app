import jwt from 'jsonwebtoken'
import { UserModelType } from '../types/user.types'

import enviroment from '../utils/validateenv';
export const  generate_access_token=(user:UserModelType)=>{
    const data={
        email:user.email,
        id:user._id

    }
    const token=jwt.sign(data,enviroment.JWT_SECRET)
    return token
}


