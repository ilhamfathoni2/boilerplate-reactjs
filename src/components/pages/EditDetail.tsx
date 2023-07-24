import { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { PutProductType } from "../../types/ProductType";
import {
  updateProducts,
  getProductById,
} from "../../services/product/ProductService";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
import { toastError, toastSuccess } from "../toast/toast";

export default function EditDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<PutProductType>({
    id: 0,
    name: "",
    imageSrc: "",
    price: 0,
    color: "",
    size: "",
    inStock: false,
    leadTime: "",
  });

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await getProductById(Number(id));
        if (response?.status === 200) {
          if (response?.data) {
            setProduct(response.data);
          }
        }
      } catch (error) {
        toastError("Something went wrong", "Sorry, An unexpected error occurred");
      }
    };

    getProduct();
  }, [id]);

  const handleSubmit = async (values: PutProductType) => {
    setLoading(true);
    try {
      const response = await updateProducts(values);
      if (response?.status === 200) {
        toastSuccess("Success", "Successfully update a product");
        setTimeout(() => {
          navigate("/product/edit");
        }, 300);
      }
    } catch (error) {
      toastError("Something went wrong", "Sorry, An unexpected error occurred");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-7 lg:max-w-7xl lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-base-content">
            Edit Product
          </h2>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm card bg-base-100 shadow-md px-5 py-5">
          <Formik
            initialValues={product}
            enableReinitialize={true}
            validationSchema={Yup.object({
              name: Yup.string().required("Product Name is required"),
              imageSrc: Yup.string().required("Image Source is required"),
              price: Yup.number()
                .typeError("Price must be a number")
                .min(0)
                .required("Price is required"),
              color: Yup.string().required("Color is required"),
              size: Yup.string().required("Size is required"),
              leadTime: Yup.string(),
            })}
            onSubmit={(values) => {
              setTimeout(() => {
                handleSubmit(values);
              }, 400);
            }}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit}>
                <input
                  id="id"
                  name="id"
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.id}
                  className="input input-bordered input-primary w-full hidden"
                />
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name}
                    className="input input-bordered input-primary w-full"
                  />
                  {props.touched.name && props.errors.name ? (
                    <label className="label">
                      <span className="label-text-alt text-error">
                        {props.errors.name}
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
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.imageSrc}
                    className="input input-bordered input-primary w-full"
                  />
                  {props.touched.imageSrc && props.errors.imageSrc ? (
                    <label className="label">
                      <span className="label-text-alt text-error">
                        {props.errors.imageSrc}
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
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.price}
                    min={0}
                    className="input input-bordered input-primary w-full"
                  />
                  {props.touched.price && props.errors.price ? (
                    <label className="label">
                      <span className="label-text-alt text-error">
                        {props.errors.price}
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
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.color}
                    className="input input-bordered input-primary w-full"
                  />
                  {props.touched.color && props.errors.color ? (
                    <label className="label">
                      <span className="label-text-alt text-error">
                        {props.errors.color}
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
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.size}
                    className="input input-bordered input-primary w-full"
                  />
                  {props.touched.size && props.errors.size ? (
                    <label className="label">
                      <span className="label-text-alt text-error">
                        {props.errors.size}
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
                      checked={props.values.inStock}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
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
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.leadTime}
                    className="input input-bordered input-primary w-full"
                  />

                  {props.touched.leadTime && props.errors.leadTime ? (
                    <label className="label">
                      <span className="label-text-alt text-error">
                        {props.errors.leadTime}
                      </span>
                    </label>
                  ) : null}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block my-5"
                  disabled={loading}
                >
                  Edit
                  {loading && (
                    <span className="loading loading-spinner loading-sm"></span>
                  )}
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
