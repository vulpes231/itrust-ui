import React, { useEffect, useContext } from "react";
import { TitleContext } from "../contexts/TitleContext";

const Signup = () => {
  const { changeTitle } = useContext(TitleContext);

  useEffect(() => {
    changeTitle("Quadx - Create Account");
  }, [changeTitle]);

  return <div>Signup</div>;
};

export default Signup;
