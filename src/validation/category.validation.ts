import {object,string} from 'zod'
import { ZodCategoryValidationMessage } from '../constats/zod-message.constnts/category.validation.message'


export const createCategoryDataValidation=object({
    name:string({
        required_error:ZodCategoryValidationMessage.REQUIRED_NAME_MESSAGE,
        invalid_type_error:ZodCategoryValidationMessage.INVALID_NAME_MESSAGE,
    }),
    description:string({
        required_error:ZodCategoryValidationMessage.REQUIRED_DESCRIPTION_MESSAGE,
        invalid_type_error:ZodCategoryValidationMessage.INVALID_DESCRIPTION_MESSAGE,
    }),
 
 
})
.strict()