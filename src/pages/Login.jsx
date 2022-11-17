import { useCallback, useContext } from "react";
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
    userContext.setUser({ email, password });
    navigate("/");
  }, [email, userContext, password]);
  return (
    <div className="flex flex-col items-center gap-1">
      <input
        placeholder="email"
        value={email}
        onChange={handleSetEmail}
      ></input>
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={handleSetPassword}
      ></input>
      <div> {email + " " + password} </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export { Login };
