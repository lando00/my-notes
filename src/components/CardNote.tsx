import { Link } from "react-router-dom";
import { typeNote } from "../store/features/noteSlice";
import { FunctionComponent } from "react";

type props = {
  note: typeNote;
};

const CardNote: FunctionComponent<props> = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`}>
      <div className="card-note">
        <h3 className="title">{note.title}</h3>
        <p className="description">{note.subTitle}</p>
      </div>
    </Link>
  );
};

export default CardNote;
