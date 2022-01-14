import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

export default function AddNote(props) {
  const { addNote } = useContext(noteContext);

  const [note, setnote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setnote({
      title: "",
      description: "",
      tag: "",
    });
    props.showAlert("Added Successfully !!", "success");
  };

  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value }); // ...note means paste old value of note as it is but update the stated right side value
  };

  return (
    <div className="container my-3">
      <div className="w-50 mx-auto">
      <h2>Add a Note</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={note.title}
            onChange={onChange}
            aria-describedby="title"
            minLength={3}
            required
          />

          <div className="form-text">Minimum Length: 3</div>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={note.description}
            onChange={onChange}
            aria-describedby="description"
            minLength={5}
            required
          />
          <div className="form-text">Minimum Length: 5</div>
        </div>
        
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            value={note.tag}
            onChange={onChange}
            aria-describedby="tag"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
          disabled={note.title.length < 3 || note.description.length < 5}
        >
          Submit
        </button>
      </form>
     
        <h2 className="mt-3 text-center">Your Notes</h2>
      </div>
     </div>
  );
}
