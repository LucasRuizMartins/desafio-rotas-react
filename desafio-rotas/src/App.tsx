import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home";
import MainPage from "./routes/MainPage";
import Products from "./routes/Products";
import About from "./routes/About";
import Computers from "./routes/Products/Computers";
import Books from "./routes/Products/Books";
import Eletronics from "./routes/Products/Eletronics";
import NotFound from "./routes/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
        <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />}>
            <Route path="computers" element={<Computers />} />
            <Route path="eletronics" element={<Eletronics />} />
            <Route path="books" element={<Books />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
