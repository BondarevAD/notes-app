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

import "./main.css";
import UserContextProvider from "./components/UserContextProvider";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Notes } from "./pages/Notes";

import { loader as notesLoader } from "./pages/Notes";
import AddNote from "./pages/AddNote";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
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
        path: "/notes",
        loader: notesLoader,
        element: <Notes />,
      },
      {
        path: "/addNote",
        element: <AddNote />,
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
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={router} />;
    </UserContextProvider>
  );
}
export default App;
