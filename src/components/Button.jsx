import React from "react";

export default function Button({ className, children }) {
  return (
    <button
      className={`${className} flex items-center justify-center gap-1 font-light text-white bg-blue-500 px-5 py-1 rounded-full whitespace-nowrap`}>
      {children}
    </button>
  );
}
