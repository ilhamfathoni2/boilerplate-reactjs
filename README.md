# Boilerplate React.Js
## Introduction

Welcome to the Boilerplate React.JS, a comprehensive starter template designed to accelerate your React project development. This boilerplate comes packed with essential features to streamline your workflow, providing you with a solid foundation to build powerful and visually appealing applications.

## Table of Contents

- [Boilerplate React.Js](#project-name)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Folder Structure](#folder-structure)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Environment Variables](#environment-variables)
  - [Available Scripts](#available-scripts)
  - [Custom Hooks](#custom-hooks)
  - [Redux Store](#redux-store)
  - [Services](#services)
  - [Utilities](#utilities)
  - [Types](#types)
  - [Contributing](#contributing)
  - [License](#license)

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

## Features
1. **API Integration for Product Management**

   The boilerplate includes API integration for product management, allowing you to perform CRUD operations seamlessly. With this feature, you can easily fetch, create, update, and delete products from your application.

2. **Redux State Management with Persistence**

   Utilizing Redux, the boilerplate provides a state management solution for handling shopping cart data. Redux Persist ensures that the cart data remains intact even after the application is reloaded, providing a smooth and uninterrupted shopping experience for your users.

3. **Dynamic UI Theming with DaisyUI**

   DaisyUI is integrated into the boilerplate to facilitate dynamic UI theming. You can easily switch between pre-defined themes or create your own custom themes in the `tailwind.config.js` file. This feature allows you to customize the UI appearance to match your brand's identity.

4. **Pre-built Components for Stunning UI**

   The boilerplate comes with a collection of pre-built components that are seamlessly integrated with Tailwind CSS and DaisyUI. These components help you create visually appealing user interfaces with ease, saving you development time and effort.

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

Explanation of Redux store structure and reducers.

## Services

Description of any services used in the project (e.g., API calls).

## Utilities

Description of utility functions used in the project.

## Types

Explanation of different types/interfaces used throughout the project.

## Contributing

Guidelines for contributing to the project.

## License

Information about the project's license (e.g., MIT, Apache, etc.).

Feel free to customize the README.md according to your project's specific details and requirements. Remember to include all the necessary information to help others understand and use your React.js project effectively.
