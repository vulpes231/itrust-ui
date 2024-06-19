import React, { useContext, useEffect } from "react";
import { TitleContext } from "../contexts/TitleContext";
import { getAccessToken } from "../constants";

const Porfolio = () => {
  const accessToken = getAccessToken();
  const { changeTitle } = useContext(TitleContext);
  useEffect(() => {
    changeTitle("Quadx - Porfolio");

    if (!accessToken) {
      // window.location.href = "/signin";
      navigate("/signin");
    }
  }, [accessToken]);
  return (
    <div>
      <h3>My Portfolio</h3>
    </div>
  );
};

export default Porfolio;
