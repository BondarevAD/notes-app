import { Link } from "react-router-dom";
import { useUserContext } from "../components/UserContextProvider";

const About = () => {
  const { user } = useUserContext();
  return (
    <div className={"flex-col w-screen"}>
      <h1 className={""}>About me</h1>
      <div className="flex-col gap-1">
        <div className="email">Email: {user.email}</div>
        <div className="date">Date sign up: {user.createdAt}</div>
      </div>
      <Link to={"/notes"}>Go to notes</Link>
    </div>
  );
};

export { About };
