# Boilerplate React.Js
## Introduction

Welcome to the Boilerplate React.JS, a comprehensive starter template designed to accelerate your React project development. This boilerplate comes packed with essential features to streamline your workflow, providing you with a solid foundation to build powerful and visually appealing applications.

## Table of Contents

- [Boilerplate React.Js](#project-name)
  - [Introduction](#introduction)
  - [Folder Structure](#folder-structure)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Environment Variables](#environment-variables)
  - [Custom Hooks](#custom-hooks)
  - [Redux Store](#redux-store)
  - [Services](#services)
  - [Utilities](#utilities)

## Folder Structure

```plaintext
boilerplate-react-js/
│
├── public/
├── src/
│   ├── assets/
│   │   ├── image/
│   │   └── index.ts
│   ├── components/
│   │   ├── cart/
│   │   │   └── Cart.tsx
│   │   ├── otherComponent/
│   │   │   └── other.tsx
│   │   └── pages/
│   │       ├── Home.tsx
│   │       └── index.ts
│   ├── hooks/
│   │   └── reduxHooks.ts
│   ├── redux/
│   │   ├── reducers/
│   │   │   ├── cartReducer.ts
│   │   │   └── otherReducer.ts
│   │   └── stores.ts
│   ├── services/
│   │   └── product/
│   │       └── productServices.ts
│   │   └── client.ts
│   ├── types/
│   │   ├── ProductType.ts
│   │   └── OtherType.ts
│   ├── utils/
│   │   ├── formatCurrency.ts.
│   │   └── otherUtils.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx
│   ├── index.css
│   └── other....
│
├── .env
├── .env.prod
├── .env.dev
├── .env.staging
├── .setup.env.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

![home](https://drive.google.com/file/d/1YTUASGuuyLg4uj_AUJQKv9URLqa3_tfm/view?usp=sharing)

## Features
This boilerplate React.js project comes with several main features:
1. **API Integration for Product CRUD:** The project includes integration with an API to perform CRUD operations for products.

2. **Redux with Redux Persist for Cart Handling:** Utilizes Redux to manage the cart data, and Redux Persist ensures that the cart data persists even after refreshing the application.

3. **Dynamic Theme Switching with DaisyUI:** Allows users to switch between different UI themes using DaisyUI, and you can even customize the themes in the `tailwind.config.js` file.

4. **TailwindCSS and DaisyUI Integration:** Comes with various components integrated with TailwindCSS and DaisyUI to create stunning user interfaces.

5. **Environment Selection:** Enables you to run the application in different environments (development, production, or staging) by creating three environment files: `.env`, `.env.prod`, and `.env.staging`. The selected environment's variables will be read by `process.env.REACT_APP...` during application runtime.

6. **Custom Hooks for Redux Handling:** Offers custom hooks like `useAppDispatch` and `useAppSelector` to handle Redux state and actions in a type-safe manner. You can create additional custom hooks in the `hooks` folder to further encapsulate and reuse logic related to Redux.

With this feature-rich boilerplate, you can kickstart your React.js projects and enjoy a productive development experience.

## Installation

To get started with the Boilerplate React.JS, follow these simple steps:

1. Clone this repository to your local machine by running the following command:

   ```
   git clone https://github.com/ilhamfathoni2/boilerplate-reactjs.git
   ```

2. Navigate to the project directory and ensure you have all the required dependencies installed by running:

   ```
   npm install
   ```

Now you're all set! You have successfully installed the Boilerplate React.JS on your local machine. Start exploring the features and begin building your exceptional React applications.

## Usage

After completing the installation process, you need to create three environment files: `.env`, `.env.prod`, and `.env.staging` to enable environment selection during application execution. These environment files are used to manage different configurations based on the environment.

To run the application, use the following command:

```
npm run dev
```

By default, the `dev` command is used to start the development environment. However, you can also switch to other environments such as `prod` or `staging` by using the respective commands:

```
npm run prod
```

```
npm run staging
```

## Environment Variables

To manage different configurations for your React application based on different environments (development, production, and staging), you can create three environment files: `.env`, `.env.prod`, and `.env.staging`.

In each environment file, it is essential to prefix your variables with `REACT_APP_` to make them accessible to the `process.env` object in your application.

For example, in your `.env` file:

```
REACT_APP_BASE_API=https://api.com
```

To use this variable in your application, you can access it like this:

```jsx
const apiUrl = process.env.REACT_APP_BASE_API;
```

The reason we use three environment files is to facilitate configuration management when running the application in different environments. The `setup.env.js` script is responsible for copying the selected environment file (`.env`, `.env.prod`, or `.env.staging`) into the `.env` file. This allows you to easily switch between different configurations without manually editing the `.env` file every time.

By using this approach, you can ensure that your React application behaves correctly and connects to the appropriate APIs or backend services based on the selected environment. This makes it easier to manage and deploy your application to different environments with the appropriate configurations.

Remember to keep sensitive information, such as API keys or secrets, secure and do not commit them to your version control system. Use environment files for managing sensitive data and consider using a secret management solution if required.

Enjoy the flexibility and simplicity of managing your environment configurations with the Boilerplate React.JS. Happy coding!


## Custom Hooks

This project includes custom hooks that provide type-safe interactions with Redux state and actions. These hooks are designed to be used throughout your application, replacing the standard `useDispatch` and `useSelector` from React Redux with typed versions.

### `useAppDispatch`

This hook returns a typed version of the `useDispatch` hook, which allows you to dispatch actions with type safety. Instead of using the regular `useDispatch`, you can use `useAppDispatch` like this:

```javascript
import { useAppDispatch } from './hooks/reduxHook';

const dispatch = useAppDispatch();
```

### `useAppSelector`

Similarly, this hook provides a typed version of `useSelector`, which allows you to select data from the Redux state with type safety. To use it, import `useAppSelector` like this:

```javascript
import { useAppSelector } from './hooks/reduxHook';

const selectedData = useAppSelector((state) => state.someSlice.data);
```

These custom hooks are just examples of how you can handle Redux in your application. **You can create your own custom hooks in the `hooks` folder to encapsulate and reuse logic that involves Redux state and actions.** This approach promotes code organization, reusability, and maintainability.

## Redux Store

The Redux store in this boilerplate is set up with multiple reducers to manage different parts of the application state. Let's take a closer look at each with the themeReducer example:

### Theme Reducer - `themeReducer.ts`

This reducer handles the application's theme, allowing users to switch between "light" and "dark" themes. The initial state is set to `light`.

```tsx
/redux/reducers/themeReducer.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface ThemeState {
  theme: string;
}

// Define the initial state using that type
const initialState: ThemeState = {
  theme: 'light',
};

export const themeReducer = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTheme } = themeReducer.actions;

export default themeReducer.reducer;
```

### Redux Store Configuration - `stores.ts`

The Redux store configuration is done using the `configureStore` function from `@reduxjs/toolkit`. It combines all the reducers and adds middleware for Redux Persist.

```tsx
/redux/stores.ts
import { themeReducer } from "./reducers/themeReducer";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistThemeConfig = {
  key: "theme",
  storage,
};

const persistedTheme = persistReducer(
  persistThemeConfig,
  themeReducer.reducer
);

const store = configureStore({
  reducer: {
    themes: persistedTheme,
    // Add other reducers here if needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;
```

### App Component - `App.tsx`

The `App` component serves as the root component of the application. It uses the custom hooks `useAppSelector` to access the theme state from the Redux store. The theme is then applied to the `data-theme` attribute to dynamically change the app's appearance based on the selected theme.

```tsx
/App.tsx
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage, CategoryPage } from "./components/pages";
import { useAppSelector } from "./hooks/reduxHook";

function App() {
  const theme = useAppSelector((state) => state.themes.theme);
  return (
    <div data-theme={theme || "light"}>
      <AppRoute />
    </div>
  );
}

export default App;
```

With this Redux store setup, you can efficiently manage the application's state, including the theme selection, and access the data using custom hooks throughout your app.

## Services

This folder contains service files that handle API calls and client configurations.

## `productService.ts`

The `productService.ts` file provides functions to interact with the product API endpoints.

### Functions:

1. `getListProducts()`

   This function sends a GET request to the `/api/v1/ProductList` endpoint to fetch the list of products.

   ```typescript
   import { AxiosResponse } from "axios";
   import { ProductType } from "../../types/ProductType";
   
   interface ProductListResponse extends AxiosResponse {
     data: ProductType;
   }
   
   export const getListProducts = async () => {
     try {
       const res: AxiosResponse = await client<ProductListResponse>({
         url: "/api/v1/ProductList",
         method: "get",
       });
       return res;
     } catch (error) {
       if (axios.isAxiosError(error)) {
         return error?.response ?? null;
       } else {
         return null;
       }
     }
   };
   ```

## `client.ts`

The `client.ts` file provides a customized Axios instance for API requests.

### Configuration:

The Axios instance is created with the base URL obtained from the `REACT_APP_API_ECOMMERCE` environment variable.

```typescript
import axios, { AxiosError, AxiosResponse } from "axios";

const { REACT_APP_API_ECOMMERCE } = process.env;

const client = axios.create({
  baseURL: REACT_APP_API_ECOMMERCE,
});
```

### Interceptors:

1. Request Interceptor

   The request interceptor is used to modify the request configuration before the request is sent.

   ```typescript
   client.interceptors.request.use(
     function (config) {
       // Set the base URL for the request
       config.baseURL = REACT_APP_API_ECOMMERCE;
       return config;
     },
     function (error) {
       // Handle request error
       return Promise.reject(error);
     }
   );
   ```

2. Response Interceptor

   The response interceptor is used to handle successful responses and response errors.

   ```typescript
   const onResponse = (response: AxiosResponse): AxiosResponse => {
     return response;
   };
   
   const onResponseError = (error: AxiosError): Promise<AxiosError> => {
     return Promise.reject(error);
   };
   
   client.interceptors.response.use(onResponse, onResponseError);
   ```

## Example Usage

To use the `getListProducts` function in the Home component to display the list of products:

```typescript
import { useEffect, useState } from "react";
import { getListProducts } from "../services/product/productService";
import { ProductType } from "../types/ProductType";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<ProductType[]>([]);

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

  useEffect(() => {
    getList();
  }, []);

  // Rest of the component code...

  return (
    // Render the list of products
  );
};

export default Home;
```

By using the `getListProducts` function from the `productService.ts` file, you can easily fetch the list of products from the API and display them in the Home component. If any errors occur during the API call, the error will be caught in the `catch` block and an error message will be displayed using the `toastError` function (assuming it's defined elsewhere in your project).

# Utilities

The `utilities` folder contains utility/helper functions that provide reusable functionalities and aid in the development process.

## Purpose

The purpose of the `utilities` folder is to store standalone functions or modules that perform specific tasks, which can be used across different components and modules in the application. These utility functions help improve code organization, enhance code reusability, and maintain a clean and structured project architecture.

## Files

The `utilities` folder may contain various utility files, each serving a specific purpose. Some common types of utility functions that can be found in this folder include:

1. **Data Formatting Utilities**: Functions to format data, such as converting dates, currency, or numbers to a specific format for display.

2. **Validation Utilities**: Functions to validate user inputs, form data, or other data types to ensure data integrity and user experience.

3. **Helper Functions**: General-purpose helper functions that provide common functionalities, like generating unique IDs, handling asynchronous operations, etc.

4. **API Helpers**: Functions that encapsulate API calls, making it easier to interact with APIs from different parts of the application.

## Benefits

Organizing utility functions in a dedicated folder provides several benefits:

1. **Code Reusability**: By centralizing utility functions, developers can easily reuse these functions in different components and modules, reducing code duplication and promoting a modular codebase.

2. **Code Maintenance**: Separate utility functions from the main components can make the codebase more maintainable, as it is easier to find and update specific functionalities.

3. **Improved Readability**: Placing utility functions in their dedicated folder enhances code readability and organization, making it easier for developers to understand the project structure and quickly locate relevant functions.

4. **Testability**: Isolating utility functions allows for easier unit testing, ensuring the correctness and reliability of these functions.

## Example

Here is an example of a `formatCurrency` utility function that formats a given number to a specific currency format:

```javascript
// utilities/formatCurrency.js

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
};
```

With this utility function, you can easily format currency values consistently throughout the application without duplicating the formatting logic.

## Usage

To use the `formatCurrency` utility function in any component:

```javascript
import { formatCurrency } from "../utilities/formatCurrency";

const ProductCard = ({ price }) => {
  return <div>{formatCurrency(price)}</div>;
};
```

By utilizing the utility function within components, you can achieve consistent and formatted currency displays without manually formatting the values in multiple places. This improves code maintainability and readability, making the codebase more efficient and robust.

Feel free to customize the README.md according to your project's specific details and requirements. Remember to include all the necessary information to help others understand and use your React.js project effectively.
