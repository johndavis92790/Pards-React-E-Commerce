import React, { useContext, useState } from "react";

const CartContext = React.createContext();

export function useShoppingCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState([]);

  function addItem(item) {
    setShoppingCart((previousShoppingCart) => {
      var forLoop = false;
      if (previousShoppingCart.length === 0) {
        previousShoppingCart.push(item);
        previousShoppingCart[0].quantity = 1;
        return previousShoppingCart;
      } else {
        for (var i = 0; i < previousShoppingCart.length; i++) {
          if (previousShoppingCart[i]._id === item._id) {
            previousShoppingCart[i].quantity++;
            forLoop = true;
            break;
          } else {
            forLoop = false;
          }
        }
        if (forLoop) {
          return previousShoppingCart;
        } else {
          item.quantity = 1;
          previousShoppingCart.push(item);
          return previousShoppingCart;
        }
      }
    });
  }
  function removeItem(item) {
    setShoppingCart((previousShoppingCart) => {
      // previousShoppingCart.items.filter(item);
      // console.log("previousShoppingCart after removing", previousShoppingCart);
      return previousShoppingCart;
    });
  }
  
  function clearCart() {
    setShoppingCart((previousShoppingCart) => {
      previousShoppingCart = [];
      console.log("shoppingCart cleared", previousShoppingCart);
      return previousShoppingCart;
    });
  }
  return (
    <CartContext.Provider
      value={{
        clearCart,
        addItem,
        removeItem,

        shoppingCart,

      }}
    >
      {children}
    </CartContext.Provider>
  );
}
