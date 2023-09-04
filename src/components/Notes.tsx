import { useAppSelector } from "../store/store";
import Note from "./Note";

const Notes = () => {
  const notes = useAppSelector((state) => state.notes);
  return (
    <div className="notes">
      <h2>Mes notes</h2>
      {notes.map((note) => (
        <Note note={note} key={note.id} />
      ))}
    </div>
  );
};

export default Notes;
