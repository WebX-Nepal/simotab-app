import {number, object,string} from 'zod'
import { ZodProductValidationMessage } from '../constants/zod-message.constants/product.validation.message';



export const createProductDataValidation=object({
    name:string({
        required_error:ZodProductValidationMessage.REQUIRED_NAME_MESSAGE,
        invalid_type_error:ZodProductValidationMessage.INVALID_NAME_MESSAGE,
    }),
    description:string({
        required_error:ZodProductValidationMessage.REQUIRED_DESCRIPTION_MESSAGE,
        invalid_type_error:ZodProductValidationMessage.INVALID_DESCRIPTION_MESSAGE,
    }),
    category:string({
        required_error:ZodProductValidationMessage.REQUIRED_DESCRIPTION_MESSAGE,
        invalid_type_error:ZodProductValidationMessage.INVALID_DESCRIPTION_MESSAGE,
    }),
    price:number({
        required_error:ZodProductValidationMessage.REQUIRED_PRICE_MESSAGE,
        invalid_type_error:ZodProductValidationMessage.INVALID_PRICE_MESSAGE,
    }),
    discount:number({
        required_error:ZodProductValidationMessage.REQUIRED_DISCOUNT_MESSAGE,
        invalid_type_error:ZodProductValidationMessage.INVALID_DISCOUNT_MESSAGE,
    }),
  
 
})
.strict()





export const updateProductDataValidation=object({
    name:string({
        required_error:ZodProductValidationMessage.REQUIRED_NAME_MESSAGE,
        invalid_type_error:ZodProductValidationMessage.INVALID_NAME_MESSAGE,
    }).optional(),
    description:string({
        required_error:ZodProductValidationMessage.REQUIRED_DESCRIPTION_MESSAGE,
        invalid_type_error:ZodProductValidationMessage.INVALID_DESCRIPTION_MESSAGE,
    }).optional(),
    category:string({
        required_error:ZodProductValidationMessage.REQUIRED_DESCRIPTION_MESSAGE,
        invalid_type_error:ZodProductValidationMessage.INVALID_DESCRIPTION_MESSAGE,
    }).optional(),
    price:number({
        required_error:ZodProductValidationMessage.REQUIRED_PRICE_MESSAGE,
        invalid_type_error:ZodProductValidationMessage.INVALID_PRICE_MESSAGE,
    }).optional(),
    discount:number({
        required_error:ZodProductValidationMessage.REQUIRED_DISCOUNT_MESSAGE,
        invalid_type_error:ZodProductValidationMessage.INVALID_DISCOUNT_MESSAGE,
    }).optional(),
  
 
})
.strict()
