import React, { createContext, useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar/Navbar";
import MobileNav from "./Navbar/MobileNav";
import Footer from "./Footer";
import Service from "./Service";
import DashNav from "./Dashboard/DashNav";
import Payouts from "./Dashboard/Payouts";
import Dashboard from "./Dashboard/Dashboard";
import Messages from "./Dashboard/Messages";
import Services from "./Dashboard/Services";
import AddService from "./Dashboard/AddService";
import Signup from "./SignUp";
import SignIn from "./SignIn";

export const ToggleContext = createContext();

function App() {
  const [show, setShow] = useState(true);

  const handleToggle = () => {
    setShow(!show);
  };

  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <MobileNav />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/services",
          element: <Service />,
        },
        {
          path: "/addServices",
          element: <AddService />,
        },
      ],
    },
    {
      path: "/login",
      element: <Home />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
  ]);

  return (
    <ToggleContext.Provider value={{ handleToggle, show }}>
      <RouterProvider router={router} />
    </ToggleContext.Provider>
  );
}

export default App;
