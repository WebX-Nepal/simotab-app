import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";

const initialValue = {
  newPassword: "",
  conformPassword: "",
  token: "",
};

const ValidationSchema = object().shape({
  newPassword: string().required("Password field is required"),
  conformPassword: string().required("Password field is required"),
  token: string().required("Token field is required"),
});

const submitHandler = (values) => {
  console.log(values);
};

const ForgetPasswordForm = () => {
  return (
    <div className="max-w-md mx-auto mb-2 mt-10">
      <h1 className="text-center mt-2 mb-2 text-2xl">Forget Password Form</h1>

      <Formik
        validationSchema={ValidationSchema}
        initialValues={initialValue}
        onSubmit={submitHandler}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <div className="mb-4">
                <label htmlFor="newPassword">New Password:</label>
                <Field
                  type="text"
                  name="newPassword"
                  className="mb-2 p-2 w-full border"
                ></Field>
                <ErrorMessage
                  component="div"
                  name="newPassword"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="conformPassword">Conform Password:</label>
                <Field
                  type="text"
                  name="conformPassword"
                  className="mb-2 p-2 w-full border"
                ></Field>
                <ErrorMessage
                  component="div"
                  name="conformPassword"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="token">Token:</label>
                <Field
                  type="text"
                  name="token"
                  className="mb-2 p-2 w-full border"
                ></Field>
                <ErrorMessage
                  component="div"
                  name="token"
                  className="text-red-500"
                />
              </div>
              <button type="submit" className="bg-blue-500 text-white btn1">
                {isSubmitting ? "creating.." : "submit"}
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ForgetPasswordForm;
