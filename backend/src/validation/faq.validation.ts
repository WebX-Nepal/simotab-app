import {object,string} from 'zod'
import { ZodFaqValidationMessage } from '../constants/zod-message.constants/faq.validation.message';



export const CreateFaqDataValidation=object({
    question:string({
        invalid_type_error:ZodFaqValidationMessage.INVALID_QUESTION_MESSAGE,
        required_error:ZodFaqValidationMessage.REQUIRED_QUESTION_MESSAGE
    }),
    answer:string({
        invalid_type_error:ZodFaqValidationMessage.INVALID_ANSWER_MESSAGE,
        required_error:ZodFaqValidationMessage.REQUIRED_ANSWER_MESSAGE
    }),




}).strict()



export const updateFaqDataValidation=object({
    question:string({
        invalid_type_error:ZodFaqValidationMessage.INVALID_QUESTION_MESSAGE,
        required_error:ZodFaqValidationMessage.REQUIRED_QUESTION_MESSAGE
    }).optional(),
    answer:string({
        invalid_type_error:ZodFaqValidationMessage.INVALID_ANSWER_MESSAGE,
        required_error:ZodFaqValidationMessage.REQUIRED_ANSWER_MESSAGE
    }).optional(),




}).strict()