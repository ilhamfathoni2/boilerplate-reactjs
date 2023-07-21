import { useState } from "react";
import { Navbar } from "../navbar/Navbar";
import { PostProductType } from "../../types/ProductType";
import { FormikProps, useFormik } from "formik";
import * as Yup from "yup";
import { createProducts } from "../../services/product/ProductService";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const formik: FormikProps<PostProductType> = useFormik<PostProductType>({
    initialValues: {
      name: "",
      imageSrc: "",
      imageAlt: "",
      price: 0,
      color: "",
      size: "",
      inStock: false,
      leadTime: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Product Name is required"),
      imageSrc: Yup.string().required("Image Source is required"),
      imageAlt: Yup.string().required("Image alt Source is required"),
      price: Yup.number()
        .typeError("Price must be a number")
        .min(0)
        .required("Price is required"),
      color: Yup.string().required("Color is required"),
      size: Yup.string().required("Size is required"),
      leadTime: Yup.string(),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = async (values: PostProductType) => {
    try {
      setLoading(true);
      const response = await createProducts(values);
      console.log("response: ", response);
      if (response?.status === 201) {
        navigate("/");
      }
      setLoading(false);
    } catch (error) {
      console.log("-- error submit product: ", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-base-content">
            Add Product
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm card bg-base-100 shadow-md px-5 py-5">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="input input-bordered input-primary w-full"
              />
              {formik.touched.name && formik.errors.name ? (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {formik.errors.name}
                  </span>
                </label>
              ) : null}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Image Source</span>
              </label>
              <input
                id="imageSrc"
                name="imageSrc"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.imageSrc}
                className="input input-bordered input-primary w-full"
              />
              {formik.touched.imageSrc && formik.errors.imageSrc ? (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {formik.errors.imageSrc}
                  </span>
                </label>
              ) : null}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Image Alt</span>
              </label>
              <input
                id="imageAlt"
                name="imageAlt"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.imageAlt}
                className="input input-bordered input-primary w-full"
              />
              {formik.touched.imageAlt && formik.errors.imageAlt ? (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {formik.errors.imageAlt}
                  </span>
                </label>
              ) : null}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                id="price"
                name="price"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
                min={0}
                className="input input-bordered input-primary w-full"
              />
              {formik.touched.price && formik.errors.price ? (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {formik.errors.price}
                  </span>
                </label>
              ) : null}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Color</span>
              </label>
              <input
                id="color"
                name="color"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.color}
                className="input input-bordered input-primary w-full"
              />
              {formik.touched.color && formik.errors.color ? (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {formik.errors.color}
                  </span>
                </label>
              ) : null}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Size</span>
              </label>
              <input
                id="size"
                name="size"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.size}
                className="input input-bordered input-primary w-full"
              />
              {formik.touched.size && formik.errors.size ? (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {formik.errors.size}
                  </span>
                </label>
              ) : null}
            </div>

            <div className="form-control py-3">
              <label className="label cursor-pointer">
                <span className="label-text">In Stock</span>
                <input
                  type="checkbox"
                  id="inStock"
                  name="inStock"
                  checked={formik.values.inStock}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="checkbox checkbox-primary"
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Lead Time (optional)</span>
              </label>
              <input
                id="leadTime"
                name="leadTime"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.leadTime}
                className="input input-bordered input-primary w-full"
              />

              {formik.touched.leadTime && formik.errors.leadTime ? (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {formik.errors.leadTime}
                  </span>
                </label>
              ) : null}
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block my-5"
              disabled={loading}
            >
              Submit
              {loading && (
                <span className="loading loading-spinner loading-sm"></span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
