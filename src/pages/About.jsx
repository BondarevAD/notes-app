import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>About me</h1>
      <div className="info">
        <div className="email">Email: </div>
        <div className="date">Date sign up: </div>
      </div>
      <Link to={"/notes"}>Go to notes</Link>
    </>
  );
};

export { About };
