import { useCallback, useContext, useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext, useUserContext } from "../components/UserContextProvider";

const Login = () => {
  const navigate = useNavigate();
  const userContext = useUserContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSetEmail = useCallback((e) => setEmail(e.target.value), []);
  const handleSetPassword = useCallback((e) => setPassword(e.target.value), []);
  const handleLogin = useCallback(() => {
    fetch(`http://localhost:5000/users/?email=${email}&password=${password}`)
      .then((r) => r.json())
      .then((users) => {
        if (users.length === 1) {
          userContext.setUser(users[0]);
          navigate("/");
        } else {
          alert("User data invalid");
        }
      });
    userContext.setUser(userContext);
  }, [email, userContext, password]);

  useEffect(() => {
    if (userContext.user?.email) {
      navigate("/");
    }
  }, [navigate, userContext.user]);
  return (
    <div className="flex flex-col items-center gap-1">
      <input
        placeholder="email"
        value={email}
        onChange={handleSetEmail}
        type={"email"}
      ></input>
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={handleSetPassword}
      ></input>
      <button onClick={handleLogin}>Login</button>
      <Link to={"/signup"}> Don't have an account. Register</Link>
    </div>
  );
};

export { Login };
