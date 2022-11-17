import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useUserContext } from "./UserContextProvider";

const Layout = () => {
  const user = useUserContext();
  const handleLogout = () => {
    user.setUser({ email: "" });
  };
  return (
    <div className="flex flex-col">
      <header className="flex flex-row justify-around">
        <div> Hello, user</div>
        <div className="flex gap-5">
          <NavLink
            to="/about"
            end={true}
            style={({ isActive }) =>
              isActive ? { color: "black" } : { color: "gray" }
            }
          >
            About
          </NavLink>
          <NavLink
            to="/notes"
            style={({ isActive }) =>
              isActive ? { color: "black" } : { color: "gray" }
            }
          >
            Notes
          </NavLink>
          <button onClick={handleLogout} className="text-red-500">
            Log Out
          </button>
        </div>
      </header>

      <main className="p-2">
        <Outlet />
      </main>

      <footer>
        <span>Student: Andrey Bondarev</span>
        <span>BSU: 2022</span>
      </footer>
    </div>
  );
};

export { Layout };
