import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ offset = 0 }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, offset);
  }, [pathname, offset]);

  return null;
};

export default ScrollToTop;
