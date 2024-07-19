// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Welcome from "./pages/Welcome.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // error: <NoMatch/>,
        children: [
            {
                index: true,
                element: <Welcome />,
            },
            {
                path: "/home",
                element: <Home />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)