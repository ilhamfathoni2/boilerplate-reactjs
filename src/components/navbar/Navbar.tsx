import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { useAppSelector, useAppDispatch } from "../../hooks/reduxHook";
import { Carts } from "../cart/Cart";
import { logo } from "../../assets/image";
import { setTheme } from "../../redux/reducers/themeReducer";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const listTheme = [
  "DressId",
  "light",
  "dark",
  "synthwave",
  "halloween",
  "night",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "retro",
  "cyberpunk",
  "valentine",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "coffee",
  "winter",
];

export const Navbar = () => {
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);
  const totalItems = useAppSelector((state) => state.cart.totalItems);

  return (
    <Disclosure as="nav" className="bg-base-100 shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <a href="/">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src={logo}
                      alt="logo"
                    />
                  </a>
                  <a href="/">
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src={logo}
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                  {/* Current: "border-primary text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="/"
                    className="inline-flex items-center hover:border-b-2 hover:border-primary focus:border-primary text-base-content px-1 pt-1 text-sm font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="/"
                    className="inline-flex items-center hover:border-b-2 hover:border-primary focus:border-primary text-base-content px-1 pt-1 text-sm font-medium"
                  >
                    Transaction
                  </a>
                  <a
                    href="/product/add"
                    className="inline-flex items-center hover:border-b-2 hover:border-primary focus:border-primary text-base-content px-1 pt-1 text-sm font-medium"
                  >
                    Add Product
                  </a>
                  <div className="dropdown dropdown-bottom dropdown-end">
                    <label
                      tabIndex={0}
                      className="m-1 cursor-pointer inline-flex items-center hover:border-b-2 hover:border-primary focus:border-primary text-base-content px-1 pt-1 text-sm font-medium"
                    >
                      Theme
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <div className="overflow-scroll scroll-smooth max-h-48">
                        {listTheme.map((theme, index) => (
                          <li key={index}>
                            <button onClick={() => dispatch(setTheme(theme))}>
                              {theme}
                            </button>
                          </li>
                        ))}
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <label
                  htmlFor="my_modal_6"
                  className="group flex items-center p-2 cursor-pointer mr-2"
                >
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">
                      {totalItems.length}
                    </span>
                  </div>
                </label>

                <button
                  type="button"
                  className="rounded-full bg-base-100 p-1 text-base-content hover:text-opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-base-100 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-base-100 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/"
                            className={classNames(
                              active ? "bg-base-100" : "",
                              "block px-4 py-2 text-sm text-base-content"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/"
                            className={classNames(
                              active ? "bg-base-100" : "",
                              "block px-4 py-2 text-sm text-base-content"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/"
                            className={classNames(
                              active ? "bg-base-100" : "",
                              "block px-4 py-2 text-sm text-base-content"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-base-content hover:bg-base-100 hover:text-opacity-75 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {/* Current: "bg-indigo-50 border-primary text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="/"
                className="block border-l-4 border-primary bg-base-content py-2 pl-3 pr-4 text-base font-medium text-primary"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-base-content hover:bg-base-100 hover:text-base-content"
              >
                Transaction
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/product/add"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-base-content hover:bg-base-100 hover:text-base-content"
              >
                Add Product
              </Disclosure.Button>
              <Disclosure.Button
                as="div"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-base-content hover:bg-base-100 hover:text-base-content"
              >
                <button onClick={() => setShow((prev) => !prev)}>Theme</button>
                {show && (
                  <ul className="z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <div className="overflow-scroll scroll-smooth max-h-48">
                      {listTheme.map((theme, index) => (
                        <li key={index}>
                          <button onClick={() => dispatch(setTheme(theme))}>
                            {theme}
                          </button>
                        </li>
                      ))}
                    </div>
                  </ul>
                )}
              </Disclosure.Button>
              <div className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-base-content hover:bg-base-100 hover:text-base-content">
                <label
                  htmlFor="my_modal_6"
                  className="group flex items-center p-2 cursor-pointer mr-2"
                >
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">
                      {totalItems.length}
                    </span>
                  </div>
                </label>
              </div>
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-base-content">
                    Tom Cook
                  </div>
                  <div className="text-sm font-medium text-base-content">
                    tom@example.com
                  </div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 rounded-full bg-base-100 p-1 text-base-content hover:text-opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="/"
                  className="block px-4 py-2 text-base font-medium text-base-content hover:bg-base-100 hover:text-primary"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="/"
                  className="block px-4 py-2 text-base font-medium text-base-content hover:bg-base-100 hover:text-primary"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="/"
                  className="block px-4 py-2 text-base font-medium text-base-content hover:bg-base-100 hover:text-primary"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my_modal_6" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <label
                htmlFor="my_modal_6"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </label>
              <Carts />
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};
