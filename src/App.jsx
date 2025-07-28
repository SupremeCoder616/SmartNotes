import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-6">
        <div className="flex gap-8 mb-6">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img
              src={viteLogo}
              className="w-20 hover:scale-110 transition-transform"
              alt="Vite logo"
            />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img
              src={reactLogo}
              className="w-20 hover:scale-110 transition-transform"
              alt="React logo"
            />
          </a>
        </div>

        <h1 className="text-4xl font-bold mb-4">Vite + React + Tailwind</h1>

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </button>
          <p className="mt-4 text-sm text-gray-600">
            Edit <code className="bg-gray-200 px-1 rounded">src/App.jsx</code>{" "}
            and save to test HMR
          </p>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;
