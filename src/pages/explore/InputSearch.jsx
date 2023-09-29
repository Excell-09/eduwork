import React from "react";
import { BsSearch } from "react-icons/bs";

export default function InputSearch() {
  return (
    <div className="bg-white flex gap-4 p-4 rounded-xl shadow">
      <BsSearch className="text-xl text-gray-500" />
      <input
        type="text"
        className="bg-transparent focus:outline-none w-full"
        placeholder="Search"
      />
    </div>
  );
}
