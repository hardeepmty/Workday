import React, { useContext, useState } from "react";
import { Context } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";  // Ensure you have an appropriate CSS file for styling


const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "https://workday-yp0n.onrender.com/api/v1/user/logout",
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigateTo("/login");
    } catch (error) {
      toast.error(error.response.data.message), setIsAuthorized(true);
    }
  };

  return (
    <nav className={isAuthorized ? "navbarShow" : "navbarHide"}>
      <div className="container">
        <div className="logo">
          <img src="logo.png" alt="logo" />
          <h3 style={{color: "#1b2b57"}}>Workday</h3>
        </div>
        <ul className={!show ? "menu" : "show-menu menu"}>
          <li>
            <Link
              to={"/career"}
              onClick={() => setShow(false)}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "10px",
                background: "rgba(255, 255, 255, 0.1)",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(10px)",
                transition: "background 0.3s ease, transform 0.3s ease",
                color: "#1b2b57",
                fontWeight: "bold",
                textDecoration: "none"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Career
            </Link>
          </li>
          <li>
            <Link to={"/"} onClick={() => setShow(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/job/getall"} onClick={() => setShow(false)}>
              Jobs
            </Link>
          </li>
          <li>
            <Link to={"/applications/me"} onClick={() => setShow(false)}>
              {user && user.role === "Employer"
                ? "Applicants's Applications"
                : "Applied"}
            </Link>
          </li>
          {user && user.role === "Employer" ? (
            <>
              <li>
                <Link to={"/job/post"} onClick={() => setShow(false)}>
                  Post new Job
                </Link>
              </li>
              <li>
                <Link to={"/job/me"} onClick={() => setShow(false)}>
                  View your jobs
                </Link>
              </li>
              
            </>
          ) : (
            <></>
          )}

          <button onClick={handleLogout}>Logout</button>
        </ul>
        <div className="hamburger">
          <GiHamburgerMenu style={{color:"#1b2b57"}} onClick={() => setShow(!show)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
