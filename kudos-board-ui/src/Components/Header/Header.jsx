import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({ isAuthenticated, onLogout }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="header-buttons">
        <button className="dashboard-button" onClick={() => navigate("/")}>
          Dashboard
        </button>
        {isAuthenticated ? (
          <button className="sign-in-button" onClick={onLogout}>
            Sign Out
          </button>
        ) : (
          <button className="sign-in-button" onClick={() => navigate("/login")}>
            Sign In
          </button>
        )}
      </div>
      <header className="header">
        <div className="banner">
          <img
            src="/kudos-logo.png"
            alt="Kudoboard Logo"
            className="header-icon"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
