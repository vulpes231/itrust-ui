import React from "react";
import { Navbar, Content, Footer } from "./components";
import { Route, Routes } from "react-router-dom";
import { Signin, Signup } from "./pages";
import { TitleProvider } from "./contexts/TitleContext";

const App = () => {
  return (
    <TitleProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </TitleProvider>
  );
};

export default App;
