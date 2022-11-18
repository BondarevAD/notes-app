export default function Note({ note }) {
  return (
    <div className={"bg-gray-300 flex flex-row gap-2 w-fit"}>
      <span className={"text-2xl pl-5"}>{note.title}</span>
      <span className={"text-gray-400 p-1.5"}>{note.createdAt}</span>
      <button className={"ml-32 justify-self-end"}>edit</button>
      <button className={"pr-8"}>del</button>
    </div>
  );
}
