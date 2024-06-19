import React, { useEffect } from "react";

const Transactions = () => {
  useEffect(() => {
    document.title = "Quadx - History";
  }, []);
  return <div>Transactions</div>;
};

export default Transactions;
