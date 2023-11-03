import { ErrorMessage, Field, Formik, Form } from "formik"
import { string , object} from "yup"
import { useSelector } from "react-redux"
import { postDataWithHeader } from "../../../../services/axios.service"
import { errorToast, successToast } from "../../../../services/toast.service"
import './index.css'


const CreateLink = (prop) => {
    const {token}=useSelector((state)=>state.auth)
    const initialState={
        title:"",
        url:""
    }

    const validationSchema=object().shape({
        title:string().required("Title is required field"),
        url:string().required("url is required field")
    })
    const handleSubmit=async(values)=>{
        const response=await postDataWithHeader('other-links',values,token)
        console.log(response)
        if(response.success){
            successToast(response.message?response.message:"Sucessfully added the Link")
            prop.getLinks(response.otherLink)
            prop.handleCloseLink()
        }else{
            errorToast(response.message?response.message:"Unable to add the link")
        }
    }
  return (
    <div className="max-w-md mx-auto mb-2 mt-10">
      <h1 className="text-center mt-2 mb-2 text-2xl">Create Link Form</h1>
        <Formik initialValues={initialState} onSubmit={handleSubmit} validationSchema={validationSchema}>

            {
                ({isSubmitting})=>{
                return     <Form>
                <div className="mb-4">
                <label htmlFor="title">Title:</label>
                <Field
                  type="text"
                  name="title"
                  className="mb-2 p-2 w-full border"
                ></Field>
                <ErrorMessage
                  component="div"
                  name="title"
                  className="text-red-500"
                />
              </div>
                <div className="mb-4">
                <label htmlFor="url">Url:</label>
                <Field
                  type="text"
                  name="url"
                  className="mb-4 p-2 w-full border"
                ></Field>
                <ErrorMessage
                  component="div"
                  name="url"
                  className="text-red-500"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white btn1"
              >
                {isSubmitting ? "creating.." : "submit"}
              </button>

                    </Form>
                }
            }
        </Formik>
    </div>
  )
}

export default CreateLink
