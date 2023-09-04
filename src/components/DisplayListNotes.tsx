import CardNote from "./CardNote";
import { useAppSelector } from "../store/store";

const DisplayListNotes = () => {
  const notes = useAppSelector((state) => state.notes);

  return (
    <div className="display-list-notes">
      <h3 className="title">Bienvenue sur MyNotes</h3>
      <div className="card-container">
        {notes.map((note) => (
          <CardNote note={note} key={note.id} />
        ))}
      </div>
    </div>
  );
};

export default DisplayListNotes;
