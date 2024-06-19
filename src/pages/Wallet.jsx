import React, { useEffect } from "react";

const Wallet = () => {
  useEffect(() => {
    document.title = "Quadx - Wallet";
  }, []);
  return <div>Wallet</div>;
};

export default Wallet;
