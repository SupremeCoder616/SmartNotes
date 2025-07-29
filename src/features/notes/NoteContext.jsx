import { createContext, useContext } from "react";
import { useNotes } from "./hooks/useNotes";

const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const noteData = useNotes();
  return (
    <NoteContext.Provider value={noteData}>{children}</NoteContext.Provider>
  );
};

export const useNoteContext = () => useContext(NoteContext);
