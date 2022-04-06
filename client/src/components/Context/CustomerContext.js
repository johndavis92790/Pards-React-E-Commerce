import React, { useContext, useState, createContext } from "react";

const CustomerContext = createContext();

export function useCustomerInfo() {
  return useContext(CustomerContext);
}

export function CustomerProvider({ children }) {
  const [customerInfo, setCustomerInfo] = useState({});

  console.log("customerInfo context", customerInfo);

  function addCustomerInfo(info) {
    setCustomerInfo((previousCustomerInfo) => {
      console.log("previousCustomerInfo", previousCustomerInfo);
      previousCustomerInfo = { info };
      return previousCustomerInfo;
    });
  }

  return (
    <CustomerContext.Provider
      value={{
        addCustomerInfo,
        customerInfo,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
}