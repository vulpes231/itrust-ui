// Signin.js
import React, { useEffect, useContext } from "react";
import { TitleContext } from "../contexts/TitleContext";
import Section from "../components/Section";

const Signin = () => {
  const { changeTitle } = useContext(TitleContext);

  useEffect(() => {
    changeTitle("Quadx - Login");
  }, [changeTitle]);

  return <Section>Signin</Section>;
};

export default Signin;
