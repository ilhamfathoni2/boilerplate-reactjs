import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage, CategoryPage, CheckoutPage } from "./pages";
import { useAppSelector } from "./hooks/reduxHook";

function App() {
  const theme = useAppSelector((state) => state.themes.theme)
  return (
    <div data-theme={theme || 'light'}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
