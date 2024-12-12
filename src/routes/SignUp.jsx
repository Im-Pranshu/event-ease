import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import "../css/SignIn.css"; // Import the CSS file

const SignUp = () => {
  const [selectedSignUp, setSelectedSignUp] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSelectedSignUp(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedSignUp) {
      navigate(selectedSignUp);
    }
  };

  return (
    <div className="sign-in-container">
      <h1>Sign Up Options</h1>
      <form onSubmit={handleSubmit}>
        <select
          value={selectedSignUp}
          onChange={handleChange}
          className="login-dropdown"
        >
          <option value="" disabled>
            Select your sign up type
          </option>
          <option value="/sign-up-user">Sign up as User</option>
          <option value="/sign-up-vendor">Sign up as Vendor</option>
          <option value="/sign-up-admin">Sign up as Admin</option>
        </select>
        <button type="submit" className="submit-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
