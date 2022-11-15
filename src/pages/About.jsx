import { Link } from "react-router-dom";

const About = () => {
  const user = localStorage.getItem("user");
  return (
    <>
      <h1>About me</h1>
      <div>Hello, {user.ema}!</div>
      <div className="flex gap-1">
        <div className="email">Email: </div>
        <div className="date">Date sign up: </div>
      </div>
      <Link to={"/notes"}>Go to notes</Link>
    </>
  );
};

export { About };
