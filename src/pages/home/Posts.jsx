import React from "react";
import Post from "../../components/Post";
import { LiaTimesSolid } from "react-icons/lia";
import { userImage } from "../../assets/dummy";
import {  BsThreeDots } from "react-icons/bs";


const TopComponent = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 px-2">
          <img src={userImage} className="rounded-full" />
          <h6 className="text-gray-600 text-sm">
            Kathryn Murphy{" "}
            <span className="text-gray-500 text-xs">likes this post</span>
          </h6>
        </div>
        <div className="text-gray-800 flex items-center gap-3">
          <BsThreeDots />
          <LiaTimesSolid />
        </div>
      </div>
      <hr className="border my-2" />
    </>
  );
};

export default function Posts() {
  return (
    <section className="space-y-4 mt-2 max-h-[200vh] overflow-y-auto rounded-2xl no-scrollbar">
      <Post TopComponent={TopComponent} />
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
