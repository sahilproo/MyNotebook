import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

export default function NoteItem(props) {
  const { note, updateNote } = props;
  const { deleteNote } = useContext(noteContext);

  return (
    <div className="col-md-3">
      <div className="card my-3 border-dark" style={{ width: "18rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-success">{note.tag}</span>
        </div>

        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text"> {note.description}</p>
          <i
            className="far fa-trash-alt mx-1"
            onClick={() => {
              deleteNote(note._id);
              props.showAlert("Deleted Successfully !!", "success");
            }}
          ></i>
          <i className="far fa-edit mx-3" onClick={() => updateNote(note)}></i>
        </div>
      </div>
    </div>
  );
}
