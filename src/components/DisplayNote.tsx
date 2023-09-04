import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../store/store";
import { deleteNote } from "../store/features/noteSlice";

const DisplayNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const notes = useAppSelector((state) => state.notes);
  const dispatch = useAppDispatch();
  const [noteSelected] = notes.filter((note) => note.id === Number(id));

  const dNote = () => {
    dispatch(deleteNote({ id: id }));
    navigate("/");
  };

  return (
    <div className="display-note">
      <div className="btn-group">
        <button className="">Notes</button>
        <button
          className="btn-green"
          onClick={() => navigate(`/update/note/${id}`)}
        >
          Mettre à jour
        </button>
        <button className="btn-red" onClick={dNote}>
          Supprimer
        </button>
      </div>
      <div className="note-container">
        <h2 className="title">{noteSelected.title}</h2>
        <p className="sub-title">{noteSelected.subTitle}</p>
        <p className="description">{noteSelected.description}</p>
      </div>
    </div>
  );
};

export default DisplayNote;
