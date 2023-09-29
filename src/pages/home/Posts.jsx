import React from "react";
import Post from "./Post";

export default function Posts() {
  return (
    <section className="space-y-4 mt-2 max-h-[200vh] overflow-y-auto rounded-2xl no-scrollbar">
      <Post isActive={true} />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </section>
  );
}
