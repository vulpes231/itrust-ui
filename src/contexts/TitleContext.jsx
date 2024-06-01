// TitleContext.js
import React, { createContext, useState } from "react";

const TitleContext = createContext();

const TitleProvider = ({ children }) => {
  const [title, setTitle] = useState(document.title);

  const changeTitle = (newTitle) => {
    document.title = newTitle;
    setTitle(newTitle);
  };

  return (
    <TitleContext.Provider value={{ title, changeTitle }}>
      {children}
    </TitleContext.Provider>
  );
};

export { TitleContext, TitleProvider };
