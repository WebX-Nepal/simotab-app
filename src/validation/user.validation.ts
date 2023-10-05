import {object,string} from 'zod'
import { ZodUserValidationMessage } from '../constats/zod-message.constnts/user.validation.message'


export const createUserDataValidation=object({
    name:string({
        required_error:ZodUserValidationMessage.REQUIRED_EMAIL_MESSAGE,
        invalid_type_error:ZodUserValidationMessage.INVALID_NAME_MESSAGE,
    }),
    email:string({
        required_error:ZodUserValidationMessage.REQUIRED_EMAIL_MESSAGE,
        invalid_type_error:ZodUserValidationMessage.INVALID_EMAIL_MESSAGE,
    }).email(),
    password:string({
        required_error:ZodUserValidationMessage.REQUIRED_PASSWORD_MESSAGE,
        invalid_type_error:ZodUserValidationMessage.INVALID_PASSWORD_MESSAGE,
    }),
    phone:string({
        required_error:ZodUserValidationMessage.REQUIRED_PHONE_MESSAGE,
        invalid_type_error:ZodUserValidationMessage.INVALID_PHONE_MESSAGE,

    })
 
})
.strict()



export const loginUserDataValidation=object({
    password:string({
        required_error:ZodUserValidationMessage.REQUIRED_PASSWORD_MESSAGE,
        invalid_type_error:ZodUserValidationMessage.INVALID_PASSWORD_MESSAGE,
    }),
    email:string({
        required_error:ZodUserValidationMessage.REQUIRED_EMAIL_MESSAGE,
        invalid_type_error:ZodUserValidationMessage.INVALID_EMAIL_MESSAGE,
    }).email(),
})
.strict()  