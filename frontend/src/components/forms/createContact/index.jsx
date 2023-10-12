import { object, string } from "yup";
import { ErrorMessage, Field, Formik, Form } from "formik";
const CreateContact = () => {
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

  const handleContactSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
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
