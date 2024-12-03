import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/auth");
    }

    const handleStorageChange = () => {
      const newToken = localStorage.getItem("token");
      if (!newToken) {
        navigate("/auth");
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [navigate]);

  return <Outlet />; 
};

export default ProtectedRoute;
