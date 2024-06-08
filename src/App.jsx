import React from "react";
import { Navbar, Content, Footer, Authnav } from "./components";
import { Route, Routes } from "react-router-dom";
import { Dashboard, Signin, Signup } from "./pages";
import { TitleProvider } from "./contexts/TitleContext";

const App = () => {
  const accessTokenString = sessionStorage.getItem("accessToken");
  const accessToken = accessTokenString ? JSON.parse(accessTokenString) : null;

  return (
    <TitleProvider>
      {accessToken ? <Authnav /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dash" element={<Dashboard />} />
      </Routes>
      <Footer />
    </TitleProvider>
  );
};

export default App;
