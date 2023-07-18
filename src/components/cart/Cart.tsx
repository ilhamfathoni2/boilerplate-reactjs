import { useEffect } from "react";
import { CheckIcon, ClockIcon } from "@heroicons/react/20/solid";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHook";
import {
  addTotalItem,
  removeFromCart,
  reduceTotalItem,
  calculateTotalPrice,
} from "../../redux/reducers/cartReducer";
import { formatCurrency } from "../../utils/formatCurrency";

export const Carts = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalItems = useAppSelector((state) => state.cart.totalItems);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);

  useEffect(() => {
    dispatch(calculateTotalPrice());
  }, [dispatch, totalItems]);

  const combineData = () => {
    return cartItems.map((cartItem) => {
      const totalItem = totalItems.find((item) => item.id === cartItem.id);
      if (totalItem) {
        return {
          ...cartItem,
          qty: totalItem.qty,
        };
      }
      return cartItem;
    });
  };

  const combinedData = combineData();

  const handleAddTotalItem = (productId: number, quantity: number) => {
    dispatch(addTotalItem({ productId, quantity }));
  };

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  const handleDecrementItem = (productId: number, quantity: number) => {
    dispatch(reduceTotalItem({ productId, quantity }));
  };

  return (
    <div className="bg-base-100">
      <div className="mx-auto px-4 py-3 sm:px-6 lg:px-0">
        <h1 className="text-center text-3xl font-bold tracking-tight text-base-content sm:text-4xl">
          Shopping Cart
        </h1>

        <form className="mt-12">
          <section aria-labelledby="cart-heading">
            <ul className="divide-y divide-base-content border-opacity-10 divide-opacity-10 border-b border-t border-base-content">
              {combinedData.map((item) => (
                <li key={item.id} className="flex py-6">
                  <div className="flex-shrink-0">
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                    <div>
                      <div className="flex justify-between">
                        <h4 className="text-sm text-base-content">
                          {item.name}
                        </h4>
                        <p className="ml-4 text-sm font-medium text-primary">
                          {item.qty
                            ? formatCurrency(item.price * item.qty)
                            : formatCurrency(item.price)}
                        </p>
                      </div>
                      <div className="flex justify-between mt-3">
                        <div>
                          <p className="text-sm text-base-content opacity-60">
                            {item.color}
                          </p>
                          <p className="mt-1 text-sm text-base-content opacity-60">
                            {item.size}
                          </p>
                        </div>
                        <div className="flex">
                          <button
                            type="button"
                            onClick={() => handleDecrementItem(item.id, 1)}
                            className="mt-1 btn btn-outline btn-primary btn-xs"
                          >
                            -
                          </button>
                          <p className="px-2 py-[6px] text-sm text-base-content">
                            {item.qty}
                          </p>
                          <button
                            type="button"
                            onClick={() => handleAddTotalItem(item.id, 1)}
                            className="mt-1 btn btn-outline btn-primary btn-xs"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-1 items-end justify-between">
                      <p className="flex items-center space-x-2 text-sm text-base-content opacity-80">
                        {item.inStock ? (
                          <CheckIcon
                            className="h-5 w-5 flex-shrink-0 text-green-500"
                            aria-hidden="true"
                          />
                        ) : (
                          <ClockIcon
                            className="h-5 w-5 flex-shrink-0 text-gray-300"
                            aria-hidden="true"
                          />
                        )}

                        <span>
                          {item.inStock
                            ? "In stock"
                            : `Will ship in ${item.leadTime}`}
                        </span>
                      </p>
                      <div className="ml-4">
                        <button
                          onClick={() => handleRemoveFromCart(item.id)}
                          type="button"
                          className="text-sm font-medium text-primary hover:text-primary-focus"
                        >
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section aria-labelledby="summary-heading" className="mt-10">
            <div>
              <dl className="space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-base font-medium text-base-content">
                    Subtotal
                  </dt>
                  <div className="ml-4 text-base font-medium text-base-content">
                    {formatCurrency(totalPrice)}
                  </div>
                </div>
              </dl>
              <p className="mt-1 text-sm text-base-content opacity-50">
                Shipping and taxes will be calculated at checkout.
              </p>
            </div>

            <div className="mt-10">
              {cartItems.length === 0 ? (
                <button type="button" className="btn btn-block btn-disabled">
                  Checkout
                </button>
              ) : (
                <a href="/checkout" className="btn btn-block btn-primary">
                  Checkout
                </a>
              )}
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};
