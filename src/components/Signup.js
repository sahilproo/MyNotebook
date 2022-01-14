import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup(props) {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  let navigate = useNavigate();

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.confirmPassword) {
      props.showAlert("Password not matching !!", "danger");
      setcredentials({ ...credentials, password: "", confirmPassword: "" });
      return;
    }
  

    const { name, email, password } = credentials;
    const response = await fetch("https://mynotebook-server.herokuapp.com/api/auth/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const temp = await response.json();
    if (temp.success) {
      localStorage.setItem("token", temp.authToken);
      props.showAlert("Successfully created account !!", "success");
      navigate("/home", { replace: true });
    } else {
      props.showAlert(temp.error, "danger");
    }
  };

  return (
    <div className="container mt-2">
      <div className="w-50 mx-auto">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            minLength={3}
            onChange={onChange}
            value={credentials.name}
            required
          />
          <div className="form-text">Minimum Length: 3</div>
        </div>
        <div className="my-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={onChange}
            value={credentials.email}
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
            onChange={onChange}
            value={credentials.password}
            minLength={5}
            required
          />
          <div className="form-text">Minimum Length: 5</div>
        </div>
        <div className="my-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            onChange={onChange}
            value={credentials.confirmPassword}
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
