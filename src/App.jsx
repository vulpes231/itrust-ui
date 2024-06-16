import React, { useState, useEffect } from "react";
import { Navbar, Content, Footer, Authnav } from "./components";
import { Route, Routes } from "react-router-dom";
import { Dashboard, Signin, Signup } from "./pages";
import { TitleProvider } from "./contexts/TitleContext";

const App = () => {
  const accessTokenString = sessionStorage.getItem("accessToken");
  const accessToken = accessTokenString ? JSON.parse(accessTokenString) : null;
  const [darkMode, setDarkMode] = useState(false);

  const handleModeToggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Apply dark mode class to the body
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <TitleProvider>
      <div className="flex flex-col min-h-screen overflow-x-hidden max-w-full pt-16 undefined">
        {accessToken ? (
          <Authnav darkMode={darkMode} handleModeToggle={handleModeToggle} />
        ) : (
          <Navbar darkMode={darkMode} handleModeToggle={handleModeToggle} />
        )}
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dash" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </TitleProvider>
  );
};

export default App;
