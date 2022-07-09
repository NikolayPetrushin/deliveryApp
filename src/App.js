import React from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import MenuItemPizza from "./components/Shop/MenuItem/MenuItemPizza";
import MenuItemBurgers from "./components/Shop/MenuItem/MenuItemBurgers";
import MenuItemSushi from "./components/Shop/MenuItem/MenuItemSushi";
import Cart from "./components/Cart/Cart";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Shop state={props.state} />}>
          <Route path="/" element={<MenuItemPizza items={props.state.items} />} />
          <Route path="sushi" element={<MenuItemSushi items={props.state.items} />} />
          <Route path="burgers" element={<MenuItemBurgers items={props.state.items} />} />
        </Route>
        <Route path="cart" element={<Cart cartItems={props.state.cart}/>} />
      </Routes>
    </div>
  );
};

export default App;
