import React from "react";
import { Link, useNavigate, redirect, useActionData } from "react-router-dom";
import { useState } from "react";
import "../css/AdminLogin.css";

export const action = async ({ request }) => {
  const formData = new URLSearchParams(await request.text());
  const username = formData.get("username");
  console.log("Username : " + username);
  const password = formData.get("password");
  console.log("Password : " + password);

  //   // Call API to authenticate admin
  //   const response = await fetch("/api/admin/login", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ username, password }),
  //   });
  //   const data = await response.json();

  return redirect("/admin/dashboard");

  //   if (data.success) {
  //     // Login successful, redirect to admin dashboard
  //   } else {
  //     return json({ error: "Invalid username or password" });
  //   }
};

const UserLogin = () => {
  const navigate = useNavigate();

  const actionData = useActionData();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <form method="post" className="login-form">
        <fieldset className="fieldLog">
          <legend className="legendField">User Login</legend>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="input-field"
              placeholder="User"
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="input-field"
              placeholder="User"
            />
          </label>
          <Link className="forgotPass">forgot password ?</Link>

          {actionData?.error && (
            <p className="error-message">{actionData.error}</p>
          )}
          <div className="button-container">
            <button
              type="button"
              className="btn"
              onClick={() => navigate("/sign-in")}
            >
              Cancel
            </button>

            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default UserLogin;
