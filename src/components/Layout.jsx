import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Layout.css";
const Layout = () => {
  return (
    <>
      <header>
        <div className="username"> Hello, user</div>
        <div className="navigation">
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

      <main className="container">
        <Outlet />
      </main>

      <footer>
        <span>Student: Andrey Bondarev</span>
        <span>BSU: 2022</span>
      </footer>
    </>
  );
};

export { Layout };
