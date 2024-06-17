import React, { useState, useEffect } from "react";
import { Navbar, Content, Footer, Authnav } from "./components";
import { Route, Routes } from "react-router-dom";
import { Dashboard, Signin, Signup } from "./pages";
import { TitleProvider } from "./contexts/TitleContext";
import { useSelector } from "react-redux";
// useSelector
const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const [token, setToken] = useState(false);
  const { accessToken } = useSelector((state) => state.login);

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

  useEffect(() => {
    const accessToken = JSON.parse(sessionStorage.getItem("accessToken"));
    if (accessToken) {
      setToken(accessToken); // Set token to true if accessToken exists
    } else {
      setToken(false); // Ensure token is false if accessToken does not exist
    }
  }, []);

  console.log("atoken", sessionStorage.getItem("accessToken"));

  return (
    <TitleProvider>
      <div className="flex flex-col min-h-screen overflow-x-hidden max-w-full pt-16 undefined">
        {accessToken || token ? (
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
