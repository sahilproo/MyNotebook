import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://mynotebook-server.herokuapp.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const temp = await response.json();
    if (temp.success) {
      localStorage.setItem("token", temp.authToken);
      props.showAlert("Successfully logged in !!", "success");
      navigate("/home", { replace: true });
    } else {
      props.showAlert("Invalid Credentials !!", "danger");
    }
  };

  return (
    <div className="container mt-2">
      <div className="w-50 mx-auto">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            onChange={onChange}
            required
          />
        </div>
        <div className="my-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
            minLength={5}
            required
          />
          <div className="form-text">Minimum Length: 5</div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
    </div>
  );
}
