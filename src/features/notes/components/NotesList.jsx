import { useNoteContext } from "../NoteContext";

export default function NotesList() {
  const { notes, deleteNote } = useNoteContext();

  if (notes.length === 0) {
    return (
      <p className="text-gray-500 mt-6 text-center">
        🗒️ No notes yet. Start by adding one above!
      </p>
    );
  }

  return (
    <div className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {notes.map((note) => (
        <div
          key={note.id}
          className="bg-white rounded-2xl shadow-md p-5 flex flex-col justify-between hover:shadow-lg transition-all"
        >
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {note.title}
            </h3>
            <p className="text-gray-600 mb-3 whitespace-pre-line">
              {note.content}
            </p>
            {note.tag && (
              <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                #{note.tag}
              </span>
            )}
          </div>

          <button
            onClick={() => deleteNote(note.id)}
            className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-1 rounded-lg transition-all"
          >
            🗑 Delete
          </button>
        </div>
      ))}
    </div>
  );
}
