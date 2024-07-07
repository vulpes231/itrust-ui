import { btc, doge, eth, ltc, tether } from "../assets";

export const navLinks = [
  {
    id: "product",
    name: "Product",
    path: "",
  },
  {
    id: "learn",
    name: "Learn",
    path: "",
  },
  {
    id: "about",
    name: "About",
    path: "",
  },
  {
    id: "features",
    name: "Features",
    path: "",
  },
  {
    id: "faq",
    name: "FAQ",
    path: "",
  },
];

export const liveserver = "https://server.quadx.io";
export const devserver = "http://localhost:3300";

export const getAccessToken = () => {
  const token = sessionStorage.getItem("accessToken");
  return token ? JSON.parse(token) : null;
};

export const coins = [
  { id: "bitcoin", name: "Bitcoin", icon: btc, abbr: "BTC" },
  { id: "ethereum", name: "Ethereum", icon: eth, abbr: "ETH" },
  { id: "tether", name: "Tether", icon: tether, abbr: "USDT" },
  { id: "dogecoin", name: "Dogecoin", icon: doge, abbr: "DOGE" },
  { id: "litecoin", name: "Litecoin", icon: ltc, abbr: "LTC" },
];
