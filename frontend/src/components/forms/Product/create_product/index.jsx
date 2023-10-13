import { useEffect, useState } from "react";
import { getDataWithoutHeader } from "../../../../services/axios.service";
import { mixed, number, object, string } from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

const CreateProduct = () => {
  const [categories, setcategories] = useState({});
  const initialState = {
    name: "",
    description: "",
    discount: "",
    price: "",
    category: "",
    file: null,
  };

  const validation = object().shape({
    name: string().required("Name field is required"),
    description: string().required("Description is required"),
    discount: number().required("discount field is required"),
    price: number().required("Price field is requiried"),
    category: string().required("Category field is required"),
    file: mixed().required("File field is required"),
  });

  const getCategory = async () => {
    const response = await getDataWithoutHeader("categories");
    console.log(response);
    setcategories(response);
  };
  useEffect(() => {
    getCategory();
  }, []);

  const handleSubmit = (values) => {
    const formData=new FormData();
    formData.append("name",values.name)
    formData.append("description",values.description)
    formData.append("discount",values.discount)
    formData.append("price",values.price)
    formData.append("category",values.category)
    formData.append("image",values.file)
    console.log(formData)

  };
  return (
    <div className="max-w-md mx-auto">
      {categories.success && (
        <Formik
          initialValues={initialState}
          validationSchema={validation}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => {
            return (
              <Form>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2">
                    Name:
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
                  <label htmlFor="description" className="block mb-2">
                    Description:
                  </label>
                  <Field
                    type="text"
                    id="description"
                    name="description"
                    className="w-full border px-4 py-2"
                  ></Field>
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-red-500 mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="discount" className="block mb-2">
                    Discount:
                  </label>
                  <Field
                    type="number"
                    id="discount"
                    name="discount"
                    className="w-full border px-4 py-2"
                  ></Field>
                  <ErrorMessage
                    name="discount"
                    component="div"
                    className="text-red-500 mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="price" className="block mb-2">
                    Price:
                  </label>
                  <Field
                    type="number"
                    id="price"
                    name="price"
                    className="w-full border px-4 py-2"
                  ></Field>

                  <ErrorMessage
                    name="price"
                    component="div"
                    className="text-red-500 mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="category" className="block mb-2">
                    Category:
                  </label>
                  <select
                    htmlFor="category"
                    name="category"
                    onChange={(e) => setFieldValue("category", e.target.value)}
                  >
                    {categories.categories &&
                      categories.categories.map((category) => {
                        return (
                          <option value={category._id} key={category._id}>
                            {category.name}
                          </option>
                        );
                      })}
                  </select>

                  <ErrorMessage
                    name="category"
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
      )}
    </div>
  );
};

export default CreateProduct;
