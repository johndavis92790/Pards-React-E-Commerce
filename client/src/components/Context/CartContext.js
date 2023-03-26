import React, { useContext, useState, useEffect } from "react";

// useContext component for the shopping cart so that the entire app has access to the variable
const CartContext = React.createContext();

export function useShoppingCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState([]);

  //useEffect for getting the shopping cart from local storage so that it doesn't clear out when refreshing the page or going offline
  useEffect(() => {
    const data = localStorage.getItem("shoppingCart");
    if (data) {
      setShoppingCart(JSON.parse(data));
    }
  }, []);

  //useEffect for setting the shopping cart to local storage so that it doesn't clear out when refreshing the page or going offline
  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  // add an item to the shoping cart array
  function addItem(item, quantity) {
    setShoppingCart((previousShoppingCart) => {
      var forLoop = false;
      //checks if the shopping cart exists yet
      if (previousShoppingCart.length === 0) {
        previousShoppingCart.push(item);
        previousShoppingCart[0].quantity = quantity;
        return previousShoppingCart;
        //if it already does exist, then it checks to see if that exact item is already in the cart and adds to the quantity, rather than adding the product again
      } else {
        for (var i = 0; i < previousShoppingCart.length; i++) {
          if (previousShoppingCart[i]._id === item._id) {
            previousShoppingCart[i].quantity = previousShoppingCart[i].quantity + quantity;
            forLoop = true;
            break;
          } else {
            forLoop = false;
          }
        }
        if (forLoop) {
          return previousShoppingCart;
          //if the item is not already in the cart, it adds it to the array
        } else {
          item.quantity = quantity;
          previousShoppingCart.push(item);
          return [...previousShoppingCart];
        }
      }
    });
  }

  // change item quantity in the cart
  function changeQuantity(event, item) {
    setShoppingCart((previousShoppingCart) => {
      var quantity = parseInt(event.target.formQuantity.value);
      // if the item is set to 0, then it removes that item from the cart
      if (quantity === 0) {
        var newShoppingCart = previousShoppingCart.filter(function (i) {
          return i._id !== item._id;
        });
        return newShoppingCart;
        //if the item is set to any other quantity, then it maps over the array to match the item and resets the quantity
      } else {
        return previousShoppingCart.map((part) => {
          if (part._id === item._id) {
            part.quantity = quantity;
          }
          return part;
        });
      }
    });
  }

  //remove item from cart
  function removeItem(item) {
    setShoppingCart((previousShoppingCart) => {
      //uses filter function to find item and remove it
      var newShoppingCart = previousShoppingCart.filter(function (i) {
        return i._id !== item._id;
      });
      return newShoppingCart;
    });
  }

  //clears the entire shopping cart array
  function clearCart() {
    setShoppingCart((previousShoppingCart) => {
      previousShoppingCart = [];
      return [...previousShoppingCart];
    });
  }

  //provider to give access to all these functions and the shopping cart state to teh rest of the app
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
