import { Link, useLoaderData, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    const user = {
      email: "123@",
      password: "1234",
      createdAt: Date.now().toString(),
    };

    fetch("http://localhost:5000/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate("/login");
      })
      .catch(alert("email must be email"));
  };

  return (
    <div className="sign-up">
      <h1>Sign up</h1>
      <div className="inputs">
        <input className="input-email"></input>
        <input className="input-password"></input>
        <input className="input-again"></input>
      </div>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export { SignUp };
