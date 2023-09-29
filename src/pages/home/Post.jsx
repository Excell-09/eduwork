import React from "react";
import { postImage, userImage, userPostImage } from "../../assets/dummy";
import Button from "../../components/Button";
import { AiOutlineLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { PiShareFat } from "react-icons/pi";
import { BsBookmark, BsThreeDots } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";

const ActionPost = ({ display, Icon }) => {
  return (
    <div className="text-gray-500 flex flex-col justify-center items-center ">
      <Icon className="text-2xl" />
      <h6>{display}</h6>
    </div>
  );
};

export default function Post({ isActive }) {
  return (
    <article className="bg-white p-5 rounded-2xl shadow-lg">
      {isActive ? (
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
      ) : null}

      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <div>
            <img src={userPostImage} className="rounded-full w-[4rem]" />
          </div>
          <div>
            <h6>Pelita Nur Najmina</h6>
            <p className="text-gray-500 text-xs">CTO Eduwork</p>
            <p className="text-gray-500 text-xs">3w &#183; &#127760; </p>
          </div>
        </div>
        <Button>Follow +</Button>
      </div>

      <div className="mt-4">
        <img src={postImage} />
      </div>

      <div className="mt-4 flex justify-between items-center">
        <ActionPost display={"Like"} Icon={AiOutlineLike} />
        <ActionPost display={"Comment"} Icon={GoComment} />
        <ActionPost display={"Share"} Icon={PiShareFat} />
        <ActionPost display={"Save"} Icon={BsBookmark} />
      </div>
    </article>
  );
}
