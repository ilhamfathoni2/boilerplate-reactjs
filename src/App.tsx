import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage, CategoryPage, CheckoutPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/category" element={<CategoryPage/>} />
      <Route path="/checkout" element={<CheckoutPage/>} />
    </Routes>
  )
}

export default App;
