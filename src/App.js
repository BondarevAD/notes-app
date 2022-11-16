import {
  Routes,
  Route,
  Link,
  redirect,
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
    loader: () => {
      const user = localStorage.getItem("user");
      if (!user) {
        return redirect("/login");
      }
    },
    children: [
      {
        path: "/",
        element: <Home />,
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
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
