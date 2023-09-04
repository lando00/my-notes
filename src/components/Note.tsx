import { Link } from "react-router-dom";
import { FunctionComponent } from "react";
import { typeNote } from "../store/features/noteSlice";

type props = {
  note: typeNote;
};

const Note: FunctionComponent<props> = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`}>
      <div className="note">
        <h3 className="title">{note.title}</h3>
        <p className="description">{note.subTitle}</p>
      </div>
    </Link>
  );
};

export default Note;
