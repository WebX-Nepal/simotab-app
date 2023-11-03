import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { object, string } from "yup";
import { updateDataWithHeader } from "../../../services/axios.service";
import { loadUser } from "../../../pages/signin/auth.Slice";
import { errorToast, successToast } from "../../../services/toast.service";

const ChangeName = (prop) => {
  const { current_user_info, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const initialValue = {
    newName: "",
  };
  const validationSchema = object().shape({
    newName: string().required("new Name field is required"),
  });
  const handleChangeNameSubmit = async (values) => {
    const data = { ...values, name: current_user_info.name };
    const response = await updateDataWithHeader("updateName", data, token);
    if (response.success) {
      prop.handleCloseName();
      successToast(
        response.message ? response.message : "Username changed successfully"
      );
      dispatch(loadUser(response.updUser));
    } else {
      errorToast("Unable to change the User name");
    }
  };
  return (
    <div className="max-w-md mx-auto mb-2  p-5">
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={handleChangeNameSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <div className="mb-4">
                <label htmlFor="newName">New Name:</label>
                <Field
                  type="text"
                  name="newName"
                  className="mb-4 p-2 w-full border"
                ></Field>
                <ErrorMessage
                  component="div"
                  name="newName"
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

export default ChangeName;
