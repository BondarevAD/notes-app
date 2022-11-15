import { Link, useLoaderData } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="sign-up">
      <h1>Sign up</h1>
      <div className="inputs">
        <input className="input-email"></input>
        <input className="input-password"></input>
        <input className="input-again"></input>
      </div>
      <Link to={"/login"}>Sign up</Link>
    </div>
  );
};

export { SignUp };
