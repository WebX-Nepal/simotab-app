import {object,string} from 'zod'
import { ZodContactValidationMessage } from '../constants/zod-message.constants/contact.validation.message'



export const createContactDataValidation=object({
    name:string({
        required_error:ZodContactValidationMessage.REQUIRED_NAME_MESSAGE,
        invalid_type_error:ZodContactValidationMessage.INVALID_NAME_MESSAGE,
    }),
    email:string({
        invalid_type_error:ZodContactValidationMessage.INVALID_EMAIL_MESSAGE,
    }).email(),
    phone:string({
        required_error:ZodContactValidationMessage.REQUIRED_PHONE_MESSAGE,
        invalid_type_error:ZodContactValidationMessage.INVALID_PHONE_MESSAGE,

    }),
  
 
})
.strict()
export const updateContactDataValidation=object({
    name:string({
        required_error:ZodContactValidationMessage.REQUIRED_NAME_MESSAGE,
        invalid_type_error:ZodContactValidationMessage.INVALID_NAME_MESSAGE,
    }).optional(),
    email:string({
        invalid_type_error:ZodContactValidationMessage.INVALID_EMAIL_MESSAGE,
    }).email().optional(),
    phone:string({
        required_error:ZodContactValidationMessage.REQUIRED_PHONE_MESSAGE,
        invalid_type_error:ZodContactValidationMessage.INVALID_PHONE_MESSAGE,

    }).optional(),
  
 
})
.strict()



