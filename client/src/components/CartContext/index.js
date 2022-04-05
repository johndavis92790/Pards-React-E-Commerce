import React, { useContext, useState } from "react";

const CartContext = React.createContext();

export function useShoppingCart() {
  return useContext(CartContext);
}

export function CartProvider({children}) {
  const [shoppingCart, setShoppingCart] = useState({});

  function addItem(item) {
    setShoppingCart((previousShoppingCart) => {
      for (var i = 0; i < previousShoppingCart.items.length; i++) {
        if (previousShoppingCart.items[i] === item._id) {
          previousShoppingCart.items[i].quantity++;
        } else {
          return;
        }
        break;
      }
      previousShoppingCart.items.push(item);
      previousShoppingCart.items[i].quantity = 1;

      console.log("previousShoppingCart", previousShoppingCart);
      return previousShoppingCart;
    });
  };
  function removeItem(item) {
    setShoppingCart((previousShoppingCart) => {
      delete previousShoppingCart[item._id];
      return previousShoppingCart;
    });
  };
  function addCustomerInfo(customer) {
    setShoppingCart((...previousShoppingCart) => {
      previousShoppingCart = {
        customer: customer,
      };
      console.log("previousShoppingCart w/ customer", previousShoppingCart);
      return previousShoppingCart;
    });
  };
  function clearCart() {
    setShoppingCart((shoppingCart) => {
      shoppingCart = {};
      console.log("shoppingCart cleared", shoppingCart);
      return shoppingCart;
    });
  }
  return (
    <CartContext.Provider
      value={{ clearCart, addItem, removeItem, addCustomerInfo, shoppingCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
