import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo1 from "./logo1.png";

export default function Navbar(props) {
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    props.showAlert("Logged out successfully !!", "success");
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        
        <Link className="navbar-brand" to="/">
        <img src={Logo1} alt="logo 1" />
          <span className="mx-2 mt-5">MyNotebook</span>
        </Link>
       
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        
      
        {localStorage.getItem("token") ? (
          <button className="btn btn-primary" onClick={handleLogout}>
            Log Out
          </button>
        ) : (
            <>
            <Link className="btn btn-primary mx-2" to="/login" role="button">
              Login
            </Link>
            <Link className="btn btn-primary mx-2" to="/signup" role="button">
              SignUp
            </Link>
         </>
        )}
 </div>
      </div>
    </nav>
  );
}
