import { useState, useEffect } from "react";

const STORAGE_KEY = "smartnotes_notes";

export function useNotes() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes((prev) => [...prev, { id: Date.now(), ...note }]);
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const updateNote = (id, updatedNote) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, ...updatedNote } : note))
    );
  };

  return { notes, addNote, deleteNote, updateNote };
}
