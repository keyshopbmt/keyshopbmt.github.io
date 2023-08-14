import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { ThemeProvider } from "./component/papes/GlobalComponents/ThemeProvider";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <CartProvider>
          <div className="App">
            <Routes>
              {publicRoutes.map((route, index) => {
                const Page = route.component;
                return (
                  <Route key={index} path={route.path} element={<Page />} />
                );
              })}
            </Routes>
          </div>
        </CartProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
