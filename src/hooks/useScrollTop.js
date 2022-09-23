import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function useScrollTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
}
