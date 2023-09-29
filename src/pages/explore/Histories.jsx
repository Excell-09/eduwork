import React from "react";
import { BiTime } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";

const History = () => {
  return (
    <div>
      <div className="p-2 flex justify-between">
        <div className="flex items-center gap-3">
          <BiTime className="text-blue-500 text-lg" />
          <p className="text-gray-600">Belajar UI?UX</p>
        </div>
        <BsThreeDots className="text-2xl text-gray-600" />
      </div>
      <hr className="border-t" />
    </div>
  );
};

export default function Histories() {
  return (
    <section className="bg-white rounded-3xl mt-3 shadow-lg p-2">
      <h3 className="text-2xl px-2 font-bold">History</h3>
      <div className="mt-2">
        <History />
        <History />
        <History />
        <History />
      </div>

      <button className="text-xl text-blue-500 p-3">Show More</button>
    </section>
  );
}
