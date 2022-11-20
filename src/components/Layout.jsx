import { Outlet, NavLink } from "react-router-dom";
import { useUserContext } from "./UserContextProvider";

export default function Layout() {
  const user = useUserContext();
  const handleLogout = () => {
    user.setUser({ email: "" });
  };

  return (
    <div className="p-2">
      <header className="flex  w-full justify-between">
        <span className=" pl-10 font-medium">Hello, {user.user.email}</span>
        <div className="flex justify-end text-gray-400">
          <NavLink
            to="/about"
            end={true}
            className={({ isActive }) =>
              isActive ? "font-medium text-black pr-10" : "pr-10"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/"
            end={true}
            className={({ isActive }) =>
              isActive ? "font-medium text-black pr-10" : "pr-10"
            }
          >
            Notes
          </NavLink>
          <NavLink
            className="  pr-10 text-red-500"
            to="/login"
            end={true}
            onClick={handleLogout}
          >
            Log out
          </NavLink>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="mt-10">
        <hr></hr>
        <div className="flex justify-between pr-10 pl-10 text-gray-400">
          <span>Created by: Bondarev Andrey</span>{" "}
          <span className="">BSU 2022</span>
        </div>
      </footer>
    </div>
  );
}
