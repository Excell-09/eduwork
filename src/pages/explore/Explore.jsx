import React from "react";
import InputSearch from "./InputSearch";
import Histories from "./Histories";
import Posts from "./Posts";

export default function Explore() {
  return (
    <section className="flex-1 w-full">
      <InputSearch />
      <Histories />
      <Posts/>
    </section>
  );
}
