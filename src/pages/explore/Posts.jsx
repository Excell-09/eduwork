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
    <section className="space-y-5 mt-5">
      <Post TopComponent={TopComponent}/>
      <Post />
      <Post />
    </section>
  );
}
