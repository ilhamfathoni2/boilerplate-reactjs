import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/formatCurrency";
import { getListProducts } from "../../services/product/ProductService";
import { ProductType } from "../../types/ProductType";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/footer";
import { TrashIcon } from "@heroicons/react/24/outline";
import { deleteProducts } from "../../services/product/ProductService";
import { LoadingCard } from "../loading/LoadingCard";
import { toastError, toastSuccess } from "../toast/toast";

export default function EditProduct() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);

  const getList = async () => {
    try {
      setLoading(true);
      const response = await getListProducts();
      if (response?.status === 200) {
        if (response?.data) {
          setProducts(response.data);
        }
      }
      setLoading(false);
    } catch (error) {
      toastError("Something went wrong", "Sorry, An unexpected error occurred");
    }
  };

  const handleDelete = async (id: number) => {
    try {
      setLoading(true);
      const response = await deleteProducts(id);
      if (response?.status === 200) {
        toastSuccess("Success", "Successfully delete a product");
        getList();
      } 
      setLoading(false);
    } catch (error) {
      toastError("Something went wrong", "Sorry, An unexpected error occurred");
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-base-100 bg-opacity-40 mb-48">
        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-7 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-base-content">
            Edit Product
          </h2>

          {loading && <LoadingCard btn={2} />}

          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="card relative bg-base-100 drop-shadow-md"
              >
                <figure>
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="hover:opacity-75 transition h-[250px] w-full object-cover"
                  />
                </figure>
                <div className="p-5">
                  <div className="mt-4 flex flex-col lg:flex-row xl:flex-row justify-between">
                    <div>
                      <h3 className="text-sm text-base-content max-w-[140px] whitespace-nowrap overflow-hidden overflow-ellipsis">
                        {product.name}
                      </h3>
                      <p className="mt-1 mb-2 text-sm text-base-content max-w-[140px] whitespace-nowrap overflow-hidden overflow-ellipsis">
                        {product.color}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-primary">
                      {formatCurrency(product.price)}
                    </p>
                  </div>
                  <div className="flex justify-between mt-2">
                    <a
                      href={`/product/edit/${product.id}`}
                      className="btn btn-sm"
                    >
                      Edit
                    </a>
                    <button
                      disabled={loading}
                      className="btn btn-sm btn-error"
                      onClick={() => handleDelete(product.id)}
                    >
                      <TrashIcon height={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
