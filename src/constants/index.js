import { btc, doge, eth, ltc, tether } from "../assets";

export const navLinks = [
  {
    id: "quadx",
    name: "why QuadX",
    path: "",
  },
  {
    id: "features",
    name: "features",
    path: "",
  },
  {
    id: "pricing",
    name: "pricing",
    path: "",
  },
  {
    id: "learn",
    name: "learn",
    path: "",
  },
  {
    id: "company",
    name: "company",
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

export const getSingleCoinPrice = (coinName, coinData) => {
  return coinData.find((coin) => coin.abbr === coinName.toUpperCase());
};
