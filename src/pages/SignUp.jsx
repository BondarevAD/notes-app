import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCallback } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState("");
  const handleSetEmail = useCallback((e) => setEmail(e.target.value), []);
  const handleSetPassword = useCallback((e) => setPassword(e.target.value), []);
  const handleSetRepPassword = useCallback(
    (e) => setRepPassword(e.target.value),
    []
  );

  const userInUsers = async (newUser) => {
    const usernames = await fetch(
      `http://localhost:5000/users?email=${newUser.email}`
    ).then((r) => r.json());
    console.log(usernames.length);
    return usernames.length === 1;
  };

  const navigate = useNavigate();
  const handleSignUp = () => {
    const user = {
      email: email,
      password: password,
      createdAt: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
    };

    if (userInUsers(user) === true) {
      alert("This name is already exist");
      return;
    }

    if (password === "") {
      alert("Enter password, please");
      return;
    }

    if (password !== repPassword) {
      alert("Passwords aren't the same");
      return;
    }

    fetch("http://localhost:5000/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/login");
    });
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <h1>Sign up</h1>
      <input
        placeholder={"email"}
        value={email}
        onChange={handleSetEmail}
        type={"email"}
      ></input>
      <input
        placeholder={"password"}
        value={password}
        onChange={handleSetPassword}
        type={"password"}
      ></input>
      <input
        placeholder={"repeat password"}
        value={repPassword}
        onChange={handleSetRepPassword}
        type={"password"}
      ></input>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export { SignUp };
