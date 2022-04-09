import React, { useContext, useState, useEffect } from "react";

const CartContext = React.createContext();

export function useShoppingCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("shoppingCart");

    if (data) {
      setShoppingCart(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    console.log("test")
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  function addItem(item) {
    setShoppingCart((previousShoppingCart) => {
      window.alert("Product added to cart!")
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
          return [...previousShoppingCart];
        }
      }
    });
  }

  function changeQuantity(event, item) {
    setShoppingCart((previousShoppingCart) => {
      var quantity = parseInt(event.target.formQuantity.value);
      if (quantity === 0) {
        var newShoppingCart = previousShoppingCart.filter(function (i) {
          return i._id !== item._id;
        });
        return newShoppingCart;
      } else {
        return previousShoppingCart.map((part) => {
          if (part._id === item._id) {
            part.quantity = quantity;
          }
          return part;
        })
      }
    });
  }

  function removeItem(item) {
    setShoppingCart((previousShoppingCart) => {
      var newShoppingCart = previousShoppingCart.filter(function (i) {
        return i._id !== item._id;
      });
      return newShoppingCart;
    });
  }

  function clearCart() {
    setShoppingCart((previousShoppingCart) => {
      previousShoppingCart = [];
      return [...previousShoppingCart];
    });
  }

  return (
    <CartContext.Provider
      value={{
        setShoppingCart,
        changeQuantity,
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
