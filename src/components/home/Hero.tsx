import { useEffect, useState } from "react";
import { Carts } from "../cart/Cart";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHook";
import { addToCart, addTotalItem } from "../../redux/reducers/cartReducer";
import { ProductType } from "../../types/ProductType";
import { formatCurrency } from "../../utils/formatCurrency";
import { getListProducts } from "../../services/product/ProductList";

export const HeroSection = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const [products, setProducts] = useState<ProductType[]>([]);

  const getList = async () => {
    try {
      const response = await getListProducts();
      if (response?.status === 200) {
        if (response?.data) {
          setProducts(response.data);
        }
      }
    } catch (error) {
      console.log("-- error -- get list product-- ", error);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  const handleAddToCart = (id: number, product: ProductType) => {
    const data = cartItems.find((item) => item.id === id);

    if (data) {
      handleAddTotalItem(id, 1);
    } else {
      handleAddProduct(product);
      handleAddTotalItem(id, 1);
    }
  };

  const handleAddProduct = (product: ProductType) => {
    dispatch(addToCart(product));
  };

  const handleAddTotalItem = (productId: number, quantity: number) => {
    dispatch(addTotalItem({ productId, quantity }));
  };

  return (
    <div>
      <div className="bg-base-100 bg-opacity-40 mb-48">
        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-7 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-base-content">
            Customers also purchased
          </h2>

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
                  <div onClick={() => handleAddToCart(product.id, product)}>
                    <label
                      htmlFor="my_modal_88"
                      className="btn btn-primary btn-sm btn-block mt-3"
                    >
                      Add To Cart
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_88" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            htmlFor="my_modal_88"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
          <Carts />
        </div>
      </div>
    </div>
  );
};
