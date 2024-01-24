import React, { createContext, useState } from "react";
import NoteContext from "./NoteContext";



const NoteProvider = (props) => {
  const [noteState, setNoteState] = useState([]);

  return (
    <NoteContext.Provider value={{ noteState, setNoteState }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
