import React, { useState, useEffect } from "react";
import { Navbar, Content, Footer, Authnav } from "./components";
import { Route, Routes } from "react-router-dom";
import {
  Company,
  Dashboard,
  Functions,
  Pricing,
  Signin,
  Signup,
} from "./pages";
import { TitleProvider } from "./contexts/TitleContext";
import { useSelector } from "react-redux";
import Transactions from "./pages/Transactions";
import Tradingbot from "./pages/Tradingbot";
import Wallet from "./pages/Wallet";
import Porfolio from "./pages/Porfolio";
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
      setToken(accessToken);
    } else {
      setToken(false);
    }
  }, []);

  return (
    <TitleProvider>
      <div className="flex flex-col min-h-screen max-w-full pt-16 ">
        {accessToken || token ? (
          <Authnav darkMode={darkMode} handleModeToggle={handleModeToggle} />
        ) : (
          <Navbar darkMode={darkMode} handleModeToggle={handleModeToggle} />
        )}
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/features" element={<Functions />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/company" element={<Company />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/portfolio" element={<Porfolio />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/tradingbot" element={<Tradingbot />} />
          <Route path="/history" element={<Transactions />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </TitleProvider>
  );
};

export default App;
