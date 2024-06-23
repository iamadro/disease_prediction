import React, { createContext, useState } from 'react';


export const ChosenContext = createContext();


export const ChosenProvider = ({ children }) => {
    const [chosen, setChosen] = useState([]);
  
    return (
      <ChosenContext.Provider value={{ chosen, setChosen }}>
        {children}
      </ChosenContext.Provider>
    );
  };