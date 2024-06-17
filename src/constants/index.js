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

export const liveserver = "https://quadx.onrender.com";
export const devserver = "http://localhost:3300";

export const getAccessToken = () => {
  const token = sessionStorage.getItem("accessToken");
  return token ? JSON.parse(token) : null;
};
