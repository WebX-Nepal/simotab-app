import { ErrorMessage, Field, Form, Formik } from "formik";
import { mixed, object, string } from "yup";

const CreateTestinomial = () => {
  const handleSubmit = (values) => {
    const formData=new FormData();
    formData.append("name",values.name)
    formData.append("profession",values.profession)
    formData.append("review",values.review)
    formData.append("image",values.file)
    console.log(formData)
  };

  // initialValue
  const initialValue = {
    name: "",
    profession: "",
    review: "",
    file: null,
  };

  // validation schema
  const TestinomialValidationMessage = object().shape({
    name: string().required("Name field is required"),
    profession: string().required("Profession Field is required"),
    review: string().required("Review field is required"),
    file: mixed().required("Image is required"),
  });

  return (
    <div className="max-w-md mx-auto">
      <Formik
        initialValues={initialValue}
        validationSchema={TestinomialValidationMessage}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, isSubmitting }) => {
          return (
            <Form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border px-4 py-2"
                ></Field>
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="profession" className="block mb-2">
                  Profession
                </label>
                <Field
                  type="text"
                  id="profession"
                  name="profession"
                  className="w-full border px-4 py-2"
                ></Field>
                <ErrorMessage
                  name="profession"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="review" className="block mb-2">
                  Review
                </label>
                <Field
                  type="text"
                  id="review"
                  name="review"
                  className="w-full border px-4 py-2"
                ></Field>
                <ErrorMessage
                  name="review"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="file" className="block mb-2">
                  File
                </label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  onChange={(e) => {
                    setFieldValue("file", e.currentTarget.files[0]);
                  }}
                  className="w-full border px-4 py-2"
                ></input>
                <ErrorMessage
                  name="file"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 p-2 text-white fw-fw-bolder"
              >
                {isSubmitting ? "creating...." : "submit"}
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CreateTestinomial;
