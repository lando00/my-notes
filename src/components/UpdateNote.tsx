import { updateNote, typeNote } from "../store/features/noteSlice";
import { useState, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/store";

const UpdateNote = () => {
  const { id } = useParams();
  const notes = useAppSelector((state) => state.notes);
  const [noteSelected] = notes.filter((note) => note.id === Number(id));
  const [note, setNote] = useState<typeNote>(noteSelected);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setNote((note) => {
      return { ...note, [e.target.id]: e.target.value };
    });
  };

  const saveNote = () => {
    dispatch(updateNote(note));
    navigate("/");
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

export default UpdateNote;
