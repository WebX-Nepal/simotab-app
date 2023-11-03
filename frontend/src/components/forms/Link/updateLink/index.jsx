import { ErrorMessage, Field, Formik, Form } from "formik"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { string , object} from "yup"
import { useSelector } from "react-redux"
import { getData, updateDataWithHeader } from "../../../../services/axios.service"
import { errorToast, successToast } from "../../../../services/toast.service"

const UpdateLink = () => {
    const navigate=useNavigate()
    const [links, setlinks] = useState({})
    const {id}=useParams()
    const {token}=useSelector((state)=>state.auth)


    const getLinksData=async()=>{
        const data=await getData(`other-links/${id}`)
        if(data.success){
            setlinks(data)
        }
        console.log(data)
    }

    useEffect(()=>{
        console.log(id,"mer")
        getLinksData()
    },[])
 

    const validationSchema=object().shape({
        title:string().required("Title is required field"),
        url:string().required("url is required field")
    })
    const handleSubmit=async(values)=>{
        const response=await updateDataWithHeader(`other-links/${id}`,values,token)
        if(response.success){
            successToast(response.message?response.message:"Link updated succcessfully")
            navigate('/admin/edit-profile')
        }else{
            errorToast(response.message?response.message:"Unable to update the link")
        }
    }
  return (
    <div className="max-w-md mx-auto mb-2 mt-10">
     {
        links.success&&
        <Formik initialValues={{
            title:links.otherLink.title,
            url:links.otherLink.url

        }} onSubmit={handleSubmit} validationSchema={validationSchema}>
            {
                ({isSubmitting , values})=>{
                return     <Form>
                <div className="mb-4">
                <label htmlFor="title">Title:</label>
                <Field
                  type="text"
                  name="title"
                  value={values.title}
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
                  value={values.url}
                  className="mb-2 p-2 w-full border"
                ></Field>
                <ErrorMessage
                  component="div"
                  name="url"
                  className="text-red-500"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md p-2"
              >
                {isSubmitting ? "creating.." : "submit"}
              </button>

                    </Form>
                }
            }
        </Formik>
     }
    </div>
  )
}

export default UpdateLink
