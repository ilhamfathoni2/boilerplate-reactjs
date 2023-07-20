import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage, CategoryPage, CheckoutPage, AddProduct, EditProduct } from "./components/pages";
import { useAppSelector } from "./hooks/reduxHook";

function App() {
  const theme = useAppSelector((state) => state.themes.theme)
  return (
    <div data-theme={theme || 'light'}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/product/add" element={<AddProduct />} />
        <Route path="/product/edit" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
