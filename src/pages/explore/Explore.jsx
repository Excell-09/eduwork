import React from "react";
import InputSearch from "./InputSearch";
import History from "./History";

export default function Explore() {
  return (
    <section className="flex-1">
      <InputSearch />
      <History />
    </section>
  );
}
