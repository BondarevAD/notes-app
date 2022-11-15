import {
  Routes,
  Route,
  Link,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { Notfoundpage } from "./pages/Notfoundpage";
import { Login } from "./pages/Login";
import { About } from "./pages/About";

import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";

import { loader as signUpLoader } from "./pages/SignUp";
import "./main.css";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "*",
        element: <Notfoundpage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
