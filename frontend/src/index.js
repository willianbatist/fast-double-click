import "./styles/global.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import RegisterDatetime from "./pages/registerDatetime/RegisterDatetime"
import TimeLine from "./pages/timeLine/TimeLine";
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/RegisterDatetime" />,
  },
  {
    path:"/RegisterDatetime",
    element: <RegisterDatetime/>,
  },
  {
    path:"/TimeLine",
    element: <TimeLine/>,
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
