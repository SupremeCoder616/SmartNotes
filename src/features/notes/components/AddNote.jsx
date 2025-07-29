import { useState } from "react";
import { useNoteContext } from "../NoteContext";

export default function AddNote() {
  const { addNote } = useNoteContext();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    addNote({ title, content, tag });
    setTitle("");
    setContent("");
    setTag("");
  };

  return (
    <div className="max-w-xl w-full bg-white shadow-lg rounded-2xl p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        📝 Add a New Note
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            placeholder="Enter note title"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Content Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Content
          </label>
          <textarea
            placeholder="Write your note here..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            rows="4"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        {/* Tag Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Tag
          </label>
          <input
            type="text"
            placeholder="e.g., Work, Personal"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all"
        >
          ➕ Add Note
        </button>
      </form>
    </div>
  );
}
