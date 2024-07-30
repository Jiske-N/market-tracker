// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Welcome from "./pages/Welcome.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Discover from "./pages/Discover.tsx";
import Login from "./pages/Login.tsx";
import SignUp from "./pages/SignUp.tsx";
import AccountSettings from "./pages/AccountSettings.tsx";
import StockPage from "./pages/StockPage.tsx";
// import PageNotFound from "./pages/PageNotFound.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // error: <PageNotFound/>,
        children: [
            {
                index: true,
                element: <Welcome />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/stock",
                element: <StockPage />,
            },
            {
                path: "/stock/:id",
                element: <StockPage />,
            },
            // not yet implemented
            {
                path: "/discover",
                element: <Discover />,
            },
            {
                path: "/log-in",
                element: <Login />,
            },
            {
                path: "/sign-up",
                element: <SignUp />,
            },
            // not yet implemented
            {
                path: "/account-settings",
                element: <AccountSettings />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)