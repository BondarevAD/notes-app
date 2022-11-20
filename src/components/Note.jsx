import { Link, useNavigate } from "react-router-dom";

export default function Note({ note }) {
  const navigate = useNavigate();
  const handleDelete = () => {
    fetch(`http://localhost:5000/notes/${note.id}`, { method: "DELETE" }).then(
      navigate("/notes")
    );
  };
  return (
    <Link to={`/notes/${note.id}`}>
      <div className={"bg-gray-300 flex flex-row gap-2 w-fit"}>
        <span className={"text-2xl pl-5"}>{note.title}</span>
        <span className={"text-gray-400 p-1.5"}>{note.createdAt}</span>
        <Link to={`/editNote/${note.id}`} key={note.id}>
          <button className={"ml-32 justify-self-end"}>edit</button>
        </Link>
        <Link>
          <button className={"pr-8"} onClick={handleDelete}>
            del
          </button>
        </Link>
      </div>
    </Link>
  );
}
