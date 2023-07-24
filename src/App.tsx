import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  CategoryPage,
  CheckoutPage,
  AddProduct,
  EditProduct,
  EditDetail,
} from "./components/pages";
import { ToastContainer } from "react-toastify";
import { useAppSelector } from "./hooks/reduxHook";
import "react-toastify/dist/ReactToastify.css";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/product/add" element={<AddProduct />} />
      <Route path="/product/edit" element={<EditProduct />} />
      <Route path="/product/edit/:id" element={<EditDetail />} />
    </Routes>
  );
}

function App() {
  const theme = useAppSelector((state) => state.themes.theme);
  return (
    <div data-theme={theme || "light"}>
      <AppRoute />
      <ToastContainer />
    </div>
  );
}

export default App;
