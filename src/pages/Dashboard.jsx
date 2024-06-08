import React, { useContext, useEffect } from "react";

import { TitleContext } from "../contexts/TitleContext";
const Dashboard = () => {
  const { changeTitle } = useContext(TitleContext);

  const username = sessionStorage.getItem("username");
  const accessTokenString = sessionStorage.getItem("accessToken");
  const accessToken = accessTokenString ? JSON.parse(accessTokenString) : null;

  useEffect(() => {
    changeTitle("Quadx - Dashboard");
    if (!accessToken) {
      window.location.href = "/signin";
    }
  }, [accessToken]);

  return (
    <section className="mt-16 p-6 h-screen bg-slate-50">
      <p className="capitalize">Welcome {username}</p>
    </section>
  );
};

export default Dashboard;
