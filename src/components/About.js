import React from "react";
import Logo from "./logo.png";

export default function About() {
  return (
    <div className="container">
      <img className="d-block mx-auto" src={Logo} alt="logo" />
      <h3 className="text-center mt-5">
        MyNotebook gives you a personal space where you can always save all of
        your most important thoughts and information in a form of notes. You can
        sign up or log in to the platform and immediately access the notes. The
        notes can also be edited and deleted.
      </h3>
    </div>
  );
}
