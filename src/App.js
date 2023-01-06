  import React, { useEffect } from "react";
  import "./App.css";
  import Home from './pages/Home'
  import EmptyCart from "./EmptyCart/EmptyCart"
  import "./scss/app.scss";
  import { Route, Routes } from "react-router-dom";
  import Cart from "./pages/Cart.jsx";
  import NotFound from "./pages/NotFound";
  import { Provider } from "react-redux";
  import { store } from './redux/store';
  import PizzaPage from "./pages/PizzaPage";
  import MainLayout from "./components/MainLayout";

  export const AppContext = React.createContext('');

  function App() {
    const [searchValue, setSearchValue] = React.useState('');

    return (
      <AppContext.Provider value={{ searchValue, setSearchValue }}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="*" element={<NotFound />} />
            <Route path="" element={<Home />} />
            <Route path="/pizza/:id" element={<PizzaPage />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </AppContext.Provider>
    );
  }

  export default App;
