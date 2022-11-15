import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Layout = () => {
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
          <NavLink
            to="/login"
            style={({ isActive }) =>
              isActive ? { color: "black" } : { color: "gray" }
            }
          >
            Log out
          </NavLink>
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
