import { object, string } from "yup";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getData,
  updateDataWithHeader,
} from "../../../../services/axios.service";
import { errorToast, successToast } from "../../../../services/toast.service";
const UpdateContact = () => {
  const navigate = useNavigate();
  const [contacts, setcontacts] = useState({});
  const { token } = useSelector((state) => {
    return state.auth;
  });

  const { id } = useParams();

  const getContacts = async () => {
    const response = await getData(`contacts/${id}`, token);
    if (response.success) {
      setcontacts(response);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  const ContactValidation = object().shape({
    name: string().required("Name Field is required"),
    email: string().required("Email Field is required"),
    phone: string().required("Phone Number Field is required"),
  });

  const handleContactUpdateSubmit = async (values) => {
    const response = await updateDataWithHeader(
      `contacts/${id}`,
      values,
      token
    );

    if (response.success) {
      successToast(
        response.message ? response.message : "Contact updated successfully",
        token
      );
      navigate("/admin/contacts");
    } else {
      errorToast(
        response.message ? response.message : "unable to update the contact"
      );
    }
  };

  return (
    <div className="max-w-md mx-auto mb-2 mt-10">
      {contacts.success && (
        <Formik
          initialValues={{
            name: contacts.contact.name,
            email: contacts.contact.email,
            phone: contacts.contact.phone,
          }}
          validationSchema={ContactValidation}
          onSubmit={handleContactUpdateSubmit}
        >
          {({ isSubmitting, values }) => {
            return (
              <Form>
                <div className="mb-4">
                  <label htmlFor="name">Name:</label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    value={values.name}
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
                    id="email"
                    value={values.email}
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
                    id="phone"
                    name="phone"
                    value={values.phone}
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
      )}
    </div>
  );
};

export default UpdateContact;
