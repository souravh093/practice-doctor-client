import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import CreateService from "../Pages/Dashboard/CreateService/CreateService";
import BookingItems from "../Pages/Dashboard/BookingItems/BookingItems";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/doctors"),
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
          {
            path: 'createUser',
            element: <CreateService />
          },
          {
            path: 'bookingItems',
            element: <BookingItems />,
            loader: () => fetch("http://localhost:5000/doctors")
          }
        ]
      }
    ],
  },
]);
