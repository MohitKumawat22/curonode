"use client";

import { useState } from "react";

export default function Loginbtn() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div className="p-10  top-1/2">
      <button
        onClick={() => setOpen(!open)}
        className="bg-red-400 text-white px-4 py-2 rounded"
      >
        Toggle Div
      </button>

      
    </div>
    {open && (
        <div className="p-5 bg-gray-200 h-screen w-screen w-full absolute  right-0 top-0 rounded">
          I appear on button click 🚀
        </div>
      )}
      </>
  );
}