import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { object, string } from "yup";
import { validateEmail } from "../../../Helpers/validateEmail";
import { errorToast, successToast } from "../../../services/toast.service";
import { updateDataWithHeader } from "../../../services/axios.service";
import { logedOut } from "../../../pages/signin/auth.Slice";

const ChangeEmail = () => {
  const { current_user_info, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const initialValue = {
    newEmail: "",
  };
  const validationSchema = object().shape({
    newEmail: string().required("new Email field is required"),
  });
  const handleChangeemailSubmit = async (values) => {
    const isNewEmailValid = validateEmail(values.newEmail);
    if (!isNewEmailValid) {
      return errorToast("Please enter the valid email");
    }
    const data = { ...values, email: current_user_info.email };
    const response = await updateDataWithHeader("updateEmail", data, token);
    if (response.success) {
      dispatch(logedOut());
      successToast(
        response.message ? response.message : "Email has successfully changed"
      );
    } else {
      errorToast("Unable to change the email");
    }
  };
  return (
    <div className="max-w-md mx-auto mb-2 mt-10 p-5">
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={handleChangeemailSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <div className="mb-4">
                <label htmlFor="newEmail">New Email:</label>
                <Field
                  type="text"
                  name="newEmail"
                  className="mb-4 p-2 w-full border"
                ></Field>
                <ErrorMessage
                  component="div"
                  name="newEmail"
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

export default ChangeEmail;
