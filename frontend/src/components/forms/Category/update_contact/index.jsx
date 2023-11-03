import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";

const UpdateCategory = () => {
  const initialValue = {
    name: "",
    description: "",
  };
  const CategoryValidation = object().shape({
    name: string().required("Name field is required"),
    description: string().required("description field is required"),
  });
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="max-w-md mx-auto mb-2 mt-10">
      <Formik
        initialValues={initialValue}
        validationSchema={CategoryValidation}
        onSubmit={handleSubmit}
      >
        {({isSubmitting}) => {
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
                <label htmlFor="description">Description:</label>
                <Field
                  type="text"
                  name="description"
                  className="mb-2 p-2 w-full border"
                ></Field>
                <ErrorMessage
                  component="div"
                  name="description"
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

export default UpdateCategory;
