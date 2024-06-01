// Signin.js
import React, { useEffect, useContext } from "react";
import { TitleContext } from "../contexts/TitleContext";

const Signin = () => {
  const { changeTitle } = useContext(TitleContext);

  useEffect(() => {
    changeTitle("Quadx - Login");
  }, [changeTitle]);

  return <div>Signin</div>;
};

export default Signin;
