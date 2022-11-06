import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <div className="inputs">
        <input className="input-email"></input>
        <input className="input-password"></input>
      </div>
      <Link to={"/about"}>Sign up</Link>
    </div>
  );
};

export { Login };
