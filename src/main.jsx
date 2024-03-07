import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./screens//Login.jsx";
import Home from "./screens/Home.jsx";
import DateConveter from "./screens/DateConveter.jsx";
import AboutUs from "./screens/AboutUs.jsx";
import ContactUs from "./screens/ContactUs.jsx";
import Blog from "./screens/Blog.jsx";
import RomanToNepali from "./screens/RomanToNepali.jsx";
import { Provider } from "react-redux";
import dateStore from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/date-conveter", element: <DateConveter /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/blog", element: <Blog /> },
      { path: "/roman-to-nepali", element: <RomanToNepali /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={dateStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
