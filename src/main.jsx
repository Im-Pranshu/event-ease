import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home";
import Root from "./routes/Root";
import SignIn from "./routes/SignIn.jsx";
import SignUp from "./routes/SignUp.jsx";
import AdminLogin from "./routes/AdminLogin.jsx";
import UserLogin from "./routes/UserLogin.jsx";
import VendorLogin from "./routes/VendorLogin.jsx";

// import Root from "./routes/Root.jsx";
// import Home from "./routes/Home.jsx";
// import ContactUs from "./routes/ContactUs.jsx";
// import AboutUs from "./routes/AboutUs.jsx";
// import SignIn, { action as signInAction } from "./routes/SignIn.jsx";
// import SignUp, { action as signUpAction } from "./routes/SignUp.jsx";
// import Dashboard from "./routes/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        index: true, // This renders the Index component at the root path
        element: <Home />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/sign-in-admin",
        element: <AdminLogin />,
      },
      {
        path: "/sign-in-user",
        element: <UserLogin />,
      },
      {
        path: "/sign-in-vendor",
        element: <VendorLogin />,
      },
      // {
      //   path: "/sign-up",
      //   element: <SignUp />,
      //   action: signUpAction,
      // },
      // {
      //   path: "/dashboard",
      //   element: <Dashboard />,
      // },
      // {
      //   path: "/contact-us",
      //   element: <ContactUs />,
      // },
      // {
      //   path: "/about-us",
      //   element: <AboutUs />,
      // },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
