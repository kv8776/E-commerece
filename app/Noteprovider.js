import React, { createContext, useState } from "react";
import NoteContext from "./NoteContext";



const NoteProvider = (props) => {
  const [noteState, setNoteState] = useState([]);
  const [quantity,setquantity]=useState([]);
  return (
    <NoteContext.Provider value={{ noteState, setNoteState, quantity,setquantity}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
