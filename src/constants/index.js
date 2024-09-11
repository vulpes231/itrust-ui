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
    path: "/features",
  },
  {
    id: "pricing",
    name: "pricing",
    path: "/pricing",
  },
  {
    id: "learn",
    name: "learn",
    path: "",
  },
  {
    id: "company",
    name: "company",
    path: "/company",
  },
];

export const liveserver = "https://server.quadx.io";
export const devserver = "http://localhost:3300";

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

export const generalQuestions = [
  { id: 1, title: "Does a crypto trading bot perform?", info: "" },
  { id: 2, title: "How do bots trade crypto?", info: "" },
  { id: 3, title: "Why should I use bots to trade crypto?", info: "" },
  {
    id: 4,
    title: "How much does it cost to use a trading bot on an exchange?",
    info: "",
  },
  { id: 5, title: "How much can you make with a crypto bot?", info: "" },
  {
    id: 6,
    title: "Does automated trading work better than buying and holding?",
    info: "",
  },
  { id: 7, title: "How do you set up a crypto bot?", info: "" },
  {
    id: 8,
    title: "How much does it cost to use a bot trading software?",
    info: "",
  },
  {
    id: 9,
    title: "Why cant I get a paid subscription plan on 3Commas?",
    info: "",
  },
];

export const getAccessToken = () => {
  const token = sessionStorage.getItem("accessToken");
  if (token) {
    try {
      return JSON.parse(token); // Return the parsed token
    } catch (error) {
      console.error("Error parsing access token", error);
      return false; 
    }
  }
  return false; 
};
