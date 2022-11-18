import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../components/UserContextProvider";

const About = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();

  return (
    <div className={"flex flex-col gap-6 w-screen items-center"}>
      <h1 className={"text-4xl"}>About me</h1>
      <div className="flex-col gap-3">
        <div className="email">
          Email: <span className={"text-gray-400"}>{user.email}</span>
        </div>
        <div className="date">
          Date sign up:{" "}
          <span className={"text-gray-400"}>{user.createdAt}</span>
        </div>
      </div>
      <Link to={"/notes"}>
        <button className={"w-60 h-7 bg-gray-400"}>Go to notes</button>
      </Link>
    </div>
  );
};

export { About };
