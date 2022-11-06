import { Link } from "react-router-dom";

const Notfoundpage = () => {
  return (
    <div className="error">
      <h1>Error 404</h1>
      This page doesn't exist. <Link to="/">Home</Link>
    </div>
  );
};

export { Notfoundpage };
