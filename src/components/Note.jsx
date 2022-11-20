import { Link, useNavigate } from "react-router-dom";
import edit from "../images/edit.png";
import deleteImg from "../images/delete.png";

export default function Note({ note }) {
  const navigate = useNavigate();
  const handleDelete = () => {
    fetch(`http://localhost:5000/notes/${note.id}`, { method: "DELETE" }).then(
      navigate("/notes")
    );
  };
  return (
    <Link to={`/notes/${note.id}`}>
      <div className={"bg-gray-200 flex flex-row gap-2 w-96 justify-between"}>
        <div>
          <span className={"text-2xl pl-5"}>{note.title}</span>
          <span className={"text-gray-500 p-1.5"}>{note.createdAt}</span>
        </div>
        <div className={"flex justify-between"}>
          <Link to={`/editNote/${note.id}`} key={note.id}>
            <button className={"w-4 h-4"}>
              <img src={edit} />
            </button>
          </Link>
          <Link>
            <button className={" w-4 h-4"} onClick={handleDelete}>
              <img src={deleteImg} />
            </button>
          </Link>
        </div>
      </div>
    </Link>
  );
}
