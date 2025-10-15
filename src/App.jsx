import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Product";
import Checkout from "./pages/checkout";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </Router>
  );
}

export default App;
