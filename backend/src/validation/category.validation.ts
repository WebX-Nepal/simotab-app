import {object,string} from 'zod'
import { ZodCategoryValidationMessage } from '../constants/zod-message.constants/category.validation.message';



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


export const updateCategoryDataValidation=object({
    name:string({
        required_error:ZodCategoryValidationMessage.REQUIRED_NAME_MESSAGE,
        invalid_type_error:ZodCategoryValidationMessage.INVALID_NAME_MESSAGE,
    }).optional(),
    description:string({
        required_error:ZodCategoryValidationMessage.REQUIRED_DESCRIPTION_MESSAGE,
        invalid_type_error:ZodCategoryValidationMessage.INVALID_DESCRIPTION_MESSAGE,
    }).optional(),
 
 
})
.strict()