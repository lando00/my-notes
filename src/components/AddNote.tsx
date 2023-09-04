import { addNote, typeNote } from "../store/features/noteSlice";
import { useState, ChangeEvent } from "react";
import { useAppDispatch } from "../store/store";

const AddNote = () => {
  const [note, setNote] = useState<typeNote>({
    title: "",
    subTitle: "",
    description: "",
  });

  const dispatch = useAppDispatch();

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setNote((note) => {
      return { ...note, [e.target.id]: e.target.value };
    });
  };

  const saveNote = () => {
    dispatch(addNote(note));
    setNote({ title: "", subTitle: "", description: "" });
  };

  return (
    <div className="add-note">
      <h3 className="title">Ajouter une note</h3>
      <div className="input-group">
        <label htmlFor="title">Le titre</label>
        <input
          type="text"
          id="title"
          value={note.title}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="subTitle">Le sous-titre</label>
        <input
          type="text"
          id="subTitle"
          value={note.subTitle}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="description">Contenu de la note</label>
        <textarea
          id="description"
          value={note.description}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <button onClick={saveNote}>Enregistrer</button>
    </div>
  );
};

export default AddNote;
