import { Link, useLoaderData } from "react-router-dom";
import Note from "../components/Note";
import { useUserContext } from "../components/UserContextProvider";

export const loader = () => {
  const notes = fetch(
    `http://localhost:5000/notes?userId=${
      JSON.parse(localStorage.getItem("user")).id
    }`
  ).then((r) => r.json());
  return notes;
};

export function Notes() {
  const notes = useLoaderData();

  return (
    <div className={"flex flex-col w-screen items-center gap-6"}>
      <h1 className={"justify-self-end text-4xl"}>Notes:</h1>
      <Link to={"/AddNote"}>
        <button className={"bg-gray-200 w-32 h-10 "}>Add new note</button>
      </Link>

      <div className={"flex flex-col gap-2"}>
        {notes
          .sort((a, b) => a.id < b.id)
          .map((note) => (
            <Note note={note} />
          ))}
      </div>
    </div>
  );
}
