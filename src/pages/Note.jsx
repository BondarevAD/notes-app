import { useLoaderData } from "react-router-dom";

export default function Note() {
  const note = useLoaderData();

  return (
    <div className={"flex flex-col items-center"}>
      <div className={"flex pt-8 flex-col gap-5 items-center "}>
        <h1 className={"bg-gray-200 p-2"}>{note.title}</h1>
        <span className={"bg-gray-200 p-2"}>{note.body}</span>
      </div>
    </div>
  );
}
