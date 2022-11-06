import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Layout.css";
const Layout = () => {
  return (
    <>
      <header>
        <div className="navigation">
          <NavLink
            to="/"
            end={true}
            style={({ isActive }) =>
              isActive ? { color: "black" } : { color: "gray" }
            }
          >
            Albums
          </NavLink>
          <NavLink
            to="/users"
            style={({ isActive }) =>
              isActive ? { color: "black" } : { color: "gray" }
            }
          >
            Users
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
