import React from "react";
import { useNavigate } from "react-router-dom";

function Signout() {
  const navigate = useNavigate();

  const handleSignout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <div className="signout-container">
      <h2>Sign Out</h2>
      <button onClick={handleSignout}>Sign Out</button>
    </div>
  );
}

export default Signout;
