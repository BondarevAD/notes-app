import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCallback } from "react";

export default function AddNote() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const navigate = useNavigate();

  const handleSetName = useCallback((e) => setName(e.target.value), []);
  const handleSetText = useCallback((e) => setText(e.target.value), []);

  const handleCreate = () => {
    const note = {
      userId: JSON.parse(localStorage.getItem("user")).id,
      title: name,
      body: text,
      createdAt: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
    };

    fetch("http://localhost:5000/notes", {
      method: "POST",
      body: JSON.stringify(note),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <>
      <div className={"flex flex-row justify-around"}>
        <Link to={"/notes"}>
          <button className={"bg-gray-400 w-12 h-7"}>Back</button>
        </Link>
        <h1 className={"pr-96 text-4xl"}>Create new note</h1>
      </div>
      <div className={"flex pt-8 flex-col gap-5 items-center "}>
        <input
          placeholder={"Name"}
          value={name}
          onChange={handleSetName}
          className={"w-fit"}
        ></input>
        <input
          placeholder={"Note text..."}
          value={text}
          type={"text"}
          onChange={handleSetText}
          className={"w-fit"}
        ></input>
        <button className={"bg-gray-400 w-20 h-9"} onClick={handleCreate}>
          Create
        </button>
      </div>
    </>
  );
}
