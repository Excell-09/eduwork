import React from "react";
import Post from "../../components/Post";

const TopComponent = () => {
  return (
    <>
      <div>
        <h3 className="text-xl font-bold">What's Happening</h3>
        <hr className="border my-2" />
      </div>
    </>
  );
};

export default function Posts() {
  return (
    <section className="space-y-4 mt-2 max-h-[120vh] overflow-y-auto rounded-2xl no-scrollbar">
      <Post TopComponent={TopComponent}/>
      <Post />
      <Post />
    </section>
  );
}
