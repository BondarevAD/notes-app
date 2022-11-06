import {
  Routes,
  Route,
  Link,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { Posts } from "./pages/Posts";
import { Users } from "./pages/Users";
import { User } from "./pages/User";
import { Notfoundpage } from "./pages/Notfoundpage";
import { Album } from "./pages/Album";

import { Layout } from "./components/Layout";

import { loader as usersLoader } from "./pages/Users";
import { loader as userLoader } from "./pages/User";
import { loader as albumsLoader } from "./pages/Posts";
import { loader as albumLoader } from "./pages/Album";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        loader: albumsLoader,
        element: <Posts />,
      },
      {
        path: "/users",
        loader: usersLoader,
        element: <Users />,
      },
      {
        path: "/users/:id",
        loader: userLoader,
        element: <User />,
      },
      {
        path: "/albums/:id",
        loader: albumLoader,
        element: <Album />,
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
