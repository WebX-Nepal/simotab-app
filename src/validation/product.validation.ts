import {object,string} from 'zod'
import { ZodUserValidationMessage } from '../constats/zod-message.constnts/user.validation.message'


export const createUserDataValidation=object({
    name:string({
        required_error:ZodUserValidationMessage.REQUIRED_EMAIL_MESSAGE,
        invalid_type_error:ZodUserValidationMessage.INVALID_NAME_MESSAGE,
    }),
  
 
})
.strict()
