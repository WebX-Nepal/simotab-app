import { object, string } from "yup";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { postDataWithHeader } from "../../../../services/axios.service";
import { errorToast, successToast } from "../../../../services/toast.service";

const CreateContact = () => {
    const navigate=useNavigate()
    const {token}=useSelector((state)=>{
        return state.auth
    })
  const initialValue = {
    name: "",
    email: "",
    phone: "",
  };
  const ContactValidation = object().shape({
    name: string().required("Name Field is required"),
    email: string().required("Email Field is required"),
    phone: string().required("Phone Number Field is required"),
  });

  const handleContactSubmit = async(values) => {
    console.log(values);
    const response=await postDataWithHeader('contacts',values,token)

    if(response.success){
        successToast(response.message)
        navigate('/admin/contacts')
    }else{
        errorToast(response.message?response.message:'unable to Post the data')
    }

    
  


  };
  return (
    <div className="max-w-md mx-auto mb-2 mt-10">
      <Formik
        initialValues={initialValue}
        validationSchema={ContactValidation}
        onSubmit={handleContactSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <div className="mb-4">
                <label htmlFor="name">Name:</label>
                <Field
                  type="text"
                  name="name"
                  className="mb-2 p-2 w-full border"
                ></Field>
                <ErrorMessage
                  component="div"
                  name="name"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email">Email:</label>
                <Field
                  type="text"
                  name="email"
                  className="mb-4 p-2 w-full border"
                ></Field>
                <ErrorMessage
                  component="div"
                  name="email"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone">Phone:</label>
                <Field
                  type="text"
                  name="phone"
                  className="mb-4 p-2 w-full border"
                ></Field>
                <ErrorMessage
                  component="div"
                  name="phone"
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
          );
        }}
      </Formik>
    </div>
  );
};

export default CreateContact;
