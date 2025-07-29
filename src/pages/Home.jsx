import AddNote from "../features/notes/components/AddNote";
import NotesList from "../features/notes/components/NotesList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">SmartNotes</h1>
      <AddNote />
      <NotesList />
    </div>
  );
}
