import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";

const CreateFaq = () => {
  const intialValue = {
    question: "",
    answer: "",
  };

  const FaqsValidation = object().shape({
    question: string().required("Question field is required"),
    answer: string().required("Answer field is required"),
  });
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="max-w-md mx-auto mb-2 mt-10">
      <Formik
        initialValues={intialValue}
        validationSchema={FaqsValidation}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <div className="mb-4">
                <label htmlFor="question">Question:</label>
                <Field
                  type="text"
                  name="question"
                  className="mb-2 p-2 w-full border"
                ></Field>
                <ErrorMessage
                  component="div"
                  name="question"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="answer">Answer:</label>
                <Field
                  type="text"
                  name="answer"
                  className="mb-2 p-2 w-full border"
                ></Field>
                <ErrorMessage
                  component="div"
                  name="answer"
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

export default CreateFaq;
