import React from "react";
import { userImage } from "../../assets/dummy";
import { MdPhotoCameraBack,MdOutlineVideoCameraBack } from "react-icons/md";
import { AiOutlineFolder } from "react-icons/ai"
import {BsBag,BsCalendarDate} from "react-icons/bs"


const ActionIcon = ({ display, Icon, classNameIcon }) => {
  return (
    <div className="flex items-center gap-2">
      <Icon className={`${classNameIcon} text-xl`} />
      <p className="text-gray-500">{display}</p>
    </div>
  );
};

export default function CreatePost() {
  return (
    <section className="p-5 rounded-xl shadow-md bg-white">
      <div className="flex gap-4 ">
        <div>
          <img className="w-[3.5rem] rounded-full" src={userImage} />
        </div>
        <input
          type="text"
          className="border border-gray-500 px-4 rounded-full w-full focus:outline-none"
          placeholder="Mulai membuat postingan"
        />
      </div>

      <div className="mt-5 flex justify-between">
        <ActionIcon
          display={"Foto"}
          Icon={MdPhotoCameraBack}
          classNameIcon={"text-blue-500"}
        />
        <ActionIcon
          display={"Video"}
          Icon={MdOutlineVideoCameraBack}
          classNameIcon={"text-green-500"}
        />{" "}
        <ActionIcon
          display={"Document"}
          Icon={AiOutlineFolder}
          classNameIcon={"text-yellow-700"}
        />{" "}
        <ActionIcon
          display={"Job"}
          Icon={BsBag}
          classNameIcon={"text-yellow-500"}
        />
        <ActionIcon
          display={"Acara"}
          Icon={BsCalendarDate}
          classNameIcon={"text-red-700"}
        />
      </div>
    </section>
  );
}
