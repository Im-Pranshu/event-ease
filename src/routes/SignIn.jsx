import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import "../css/SignIn.css"; // Import the CSS file

const SignIn = () => {
  const [selectedLogin, setSelectedLogin] = useState("");
  const navigate = useNavigate(); // Use useNavigate hook

  const handleChange = (event) => {
    setSelectedLogin(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedLogin) {
      navigate(selectedLogin); // Navigate to the selected login page
    }
  };

  return (
    <div className="sign-in-container">
      <h1>Login Options</h1>
      <form onSubmit={handleSubmit}>
        <select
          value={selectedLogin}
          onChange={handleChange}
          className="login-dropdown"
        >
          <option value="" disabled>
            Select your login type
          </option>
          <option value="/sign-in-user">Login as User</option>
          <option value="/sign-in-vendor">Login as Vendor</option>
          <option value="/sign-in-admin">Login as Admin</option>
        </select>
        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;
