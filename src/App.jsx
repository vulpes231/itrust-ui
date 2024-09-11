import React, { useState, useEffect } from "react";
import { Navbar, Content, Authnav, DCA, Autotrade } from "./components";
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
  Rewards,
  Settings,
  Signin,
  Signup,
  Verify,
} from "./pages";
import { TitleProvider } from "./contexts/TitleContext";
import { useDispatch, useSelector } from "react-redux";
import Transactions from "./pages/Transactions";
import Tradingbot from "./pages/Tradingbot";
import Wallet from "./pages/Wallet";
import Porfolio from "./pages/Porfolio";
import Getfunded from "./pages/Getfunded";
import Protools from "./pages/Protools";
import ScrollToTop from "./components/Scrolltotop";
import { logoutUser } from "./features/logoutSlice";
import Logoutmodal from "./components/dash/Logoutmodal";
import { resetLogin } from "./features/loginSlice";
import { resetSignup } from "./features/signupSlice";
import { getAccessToken } from "./constants";

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [activeLink, setActiveLink] = useState(false);
  const [token, setToken] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  const accessToken = getAccessToken();

  const { logoutError, logoutSuccess, logoutLoading } = useSelector(
    (state) => state.logout
  );

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

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    if (accessToken) {
      setToken(accessToken);
    } else {
      setToken(false);
    }
  }, [accessToken]);

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

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const isAuthPage =
    location.pathname === "/signin" || location.pathname === "/signup";

  return (
    <TitleProvider>
      <div className="flex flex-col min-h-screen max-w-full pt-16 ">
        {!isAuthPage &&
          (token ? (
            <Authnav
              darkMode={darkMode}
              handleModeToggle={handleModeToggle}
              handleLogout={handleLogout}
              success={logoutSuccess}
              setToken={setToken}
            />
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
          <Route path="/portfolio" element={<Porfolio mode={darkMode} />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/tradingbot" element={<Tradingbot />} />
          <Route path="/history" element={<Transactions />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/settings" element={<Settings />} />
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
      {logoutLoading && <Logoutmodal />}
    </TitleProvider>
  );
};

export default App;
