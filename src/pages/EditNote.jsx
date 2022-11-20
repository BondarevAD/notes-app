import { Await, useLoaderData } from "react-router-dom";
import * as PropTypes from "prop-types";
import { Suspense, useState } from "react";
import { useCallback } from "react";

export const loader = async ({ params }) => {
  console.log(params.id);
  const note = await fetch(`http://localhost:5000/notes/${params.id}`).then(
    (r) => r.json()
  );
  return note;
};

function EditNote() {
  const note = useLoaderData();
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);

  const handleSetName = useCallback((e) => setTitle(e.target.value), []);
  const handleSetText = useCallback((e) => setBody(e.target.value), []);

  const handleEdit = () => {
    fetch(`http://localhost:5000/notes/${note.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: title,
        body: body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div className={"flex flex-col items-center"}>
      <h1 className={"text-4xl "}>Edit note</h1>
      <div className={"flex pt-8 flex-col gap-5 items-center "}>
        <input
          placeholder={"Name"}
          value={title}
          onChange={handleSetName}
          className={"w-fit"}
        ></input>
        <input
          placeholder={"EditNote text..."}
          value={body}
          type={"text"}
          onChange={handleSetText}
          className={"w-fit"}
        ></input>
        <button className={"bg-gray-400 w-20 h-9"} onClick={handleEdit}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default EditNote;
