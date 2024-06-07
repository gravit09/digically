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
import MobileDashNav from "./Dashboard/MobileDashNav";
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

  const MainLayout = () => {
    return (
      <div className="app">
        <Navbar />
        <MobileNav />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const DashboardLayout = () => {
    return (
      <div className="dashboard-app">
        <DashNav />
        <MobileDashNav />
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/services",
          element: <Service />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/dashboard/messages",
          element: <Messages />,
        },
        {
          path: "/dashboard/services",
          element: <Services />,
        },
        {
          path: "/dashboard/addServices",
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
