import React, { useState, useEffect } from "react";
import { Navbar, Content, Footer, Authnav, DCA, Autotrade } from "./components";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  Aitrading,
  Company,
  Copybot,
  Dashboard,
  Docs,
  Frequent,
  Functions,
  Getstart,
  Plans,
  Pricing,
  Profile,
  Rewards,
  Signin,
  Signup,
  Verify,
} from "./pages";
import { TitleProvider } from "./contexts/TitleContext";
import { useSelector } from "react-redux";
import Transactions from "./pages/Transactions";
import Tradingbot from "./pages/Tradingbot";
import Wallet from "./pages/Wallet";
import Porfolio from "./pages/Porfolio";
import Getfunded from "./pages/Getfunded";
import Protools from "./pages/Protools";
import ScrollToTop from "./components/Scrolltotop";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeLink, setActiveLink] = useState(false);
  const [token, setToken] = useState(false);
  const { accessToken } = useSelector((state) => state.login);
  const location = useLocation(); // Get the current route

  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        setDeferredPrompt(null);
      });
    }
  };

  const handleModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const removeActiveLink = () => {
    setActiveLink(false);
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

  const isAuthPage =
    location.pathname === "/signin" || location.pathname === "/signup";

  return (
    <TitleProvider>
      <div className="flex flex-col min-h-screen max-w-full pt-16 ">
        {!isAuthPage &&
          (accessToken || token ? (
            <Authnav darkMode={darkMode} handleModeToggle={handleModeToggle} />
          ) : (
            <Navbar
              darkMode={darkMode}
              handleModeToggle={handleModeToggle}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
          ))}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/features" element={<Functions />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/company" element={<Company />} />
          <Route
            path="/dca"
            element={<DCA setActiveLink={removeActiveLink} />}
          />
          <Route
            path="/autotrade"
            element={<Autotrade setActiveLink={removeActiveLink} />}
          />
          <Route
            path="/copy"
            element={<Copybot setActiveLink={removeActiveLink} />}
          />
          <Route
            path="/ai"
            element={<Aitrading setActiveLink={removeActiveLink} />}
          />
          <Route
            path="/protool"
            element={<Protools setActiveLink={removeActiveLink} />}
          />
          <Route
            path="/getfunded"
            element={<Getfunded setActiveLink={removeActiveLink} />}
          />
          <Route
            path="/faq"
            element={<Frequent setActiveLink={removeActiveLink} />}
          />
          <Route
            path="/start"
            element={<Getstart setActiveLink={removeActiveLink} />}
          />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/portfolio" element={<Porfolio />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/tradingbot" element={<Tradingbot />} />
          <Route path="/history" element={<Transactions />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
        {deferredPrompt && (
          <button
            onClick={handleInstallClick}
            className="bg-purple-500 text-white px-4 py-2 rounded"
          >
            Install App
          </button>
        )}
      </div>
      {/* <Footer /> */}
    </TitleProvider>
  );
};

export default App;
