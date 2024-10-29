import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../logo512.png";

function Header() {
  const isLoggedIn = !!localStorage.getItem("token"); // Check if the user is logged in

  return (
    <AppBar position="static">
      <Toolbar className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img src={logo} alt="Logo" className="logo" />
          <Typography variant="h6" className="ml-3">
            ATOINIUM
          </Typography>
        </div>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
            </li>
            <li className="nav-item">
              <Button color="inherit" component={Link} to="/about">
                About Us
              </Button>
            </li>
            <li className="nav-item">
              <Button color="inherit" component={Link} to="/contact">
                Contact Us
              </Button>
            </li>
            {isLoggedIn ? (
              <li className="nav-item">
                <Button color="inherit" component={Link} to="/signout">
                  Sign Out
                </Button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Button color="inherit" component={Link} to="/signin">
                    Sign In
                  </Button>
                </li>
                <li className="nav-item">
                  <Button color="inherit" component={Link} to="/signup">
                    Sign Up
                  </Button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
