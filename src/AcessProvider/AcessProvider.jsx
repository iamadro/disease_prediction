import React, { createContext, useContext, useState } from 'react';

const AccessContext = createContext();

export const useAccess = () => useContext(AccessContext);

export const AccessProvider = ({ children }) => {
  const [hasAccess, setHasAccess] = useState(false);

  return (
    <AccessContext.Provider value={{ hasAccess, setHasAccess }}>
      {children}
    </AccessContext.Provider>
  );
};