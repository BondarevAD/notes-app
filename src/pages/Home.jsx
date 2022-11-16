import { useContext } from "react";
import { UserContext, useUserContext } from "../components/UserContextProvider";

function Home() {
  const user = useUserContext();
  console.log(user);
  return <div>Hello, {user.email}!</div>;
}

export { Home };
