import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 0);

    return () => clearTimeout(timer);
  }, [navigate]);

  // Return null or a loading state while redirecting
  return null;
};

export default NotFound;
