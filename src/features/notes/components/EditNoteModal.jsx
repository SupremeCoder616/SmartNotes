import { useState, useEffect } from "react";
import { useNoteContext } from "../NoteContext";

export default function EditNoteModal({ note, onClose }) {
  const { editNote } = useNoteContext();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
      setTag(note.tag || "");
    }
  }, [note]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editNote(note.id, { title, content, tag });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Edit Note</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Note title"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your note..."
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
          />
          <input
            type="text"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            placeholder="Tag (optional)"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
