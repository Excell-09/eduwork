import React from "react";
import { NavLogo } from "../assets/logo";
import { NavLink } from "react-router-dom";
import { arrowDown, chat, notif } from "../assets/icon";
import { userImage } from "../assets/dummy";

const NavNavLink = () => {
  return (
    <div className="items-center gap-14 text-gray-600 hidden lg:flex">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/Comunity"} className="text-blue-400">
        Community
      </NavLink>
      <NavLink to={"/"} className="flex items-center">
        Learning
        <img src={arrowDown} alt="icon arrow" />
      </NavLink>
      <NavLink to={"/"} className="flex items-center">
        Learning
        <img src={arrowDown} alt="icon arrow" />
      </NavLink>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="flex items-center text-gray-600">
      <img className="rounded-full mr-2" src={userImage} alt="user image" />
      <h6>Maudy Ayunda</h6>
      <img src={arrowDown} alt="icon arrow" />
    </div>
  );
};

const NavProfile = () => {
  return (
    <div className="flex items-center gap-6">
      <img className="hidden lg:block" src={chat} alt="icon arrow" />
      <img className="hidden lg:block" src={notif} alt="icon arrow" />
      <Profile />
    </div>
  );
};

export default function Navbar() {
  return (
    <nav className="bg-white">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-2 py-5 ">
        <img src={NavLogo} alt="logo" className="w-[9.375rem]" />
        <NavNavLink />
        <NavProfile />
      </div>
    </nav>
  );
}
