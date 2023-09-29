import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Navigate,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Explore from "./pages/explore/Explore";
import Navbar from "./components/Navbar";
import waves from "./assets/wave.svg";
import { RiAppsLine } from "react-icons/ri";
import { AiOutlineSearch, AiOutlineUser, AiOutlinePlus } from "react-icons/ai";
import { BsCalendar4Event, BsBookmark } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

import { courseBanner, userRecomendation } from "./assets/dummy";
import Button from "./components/Button";

const RecomedationList = () => {
  return (
    <div className="flex items-start gap-3 mb-4">
      <img src={userRecomendation} alt="user rekomendation" />
      <div>
        <h6 className="font-medium mb-1">PT. Buana</h6>
        <p className="text-sm text-gray-600 mb-2">Company | Financial Service</p>
        <Button>
          Follow <AiOutlinePlus />
        </Button>
      </div>
    </div>
  );
};

const SideBarLeft = () => {
  const SIDEBARLINK = [
    { display: "Home", to: "/home", Icon: RiAppsLine },
    { display: "Explore", to: "/explore", Icon: AiOutlineSearch },
    { display: "Event", to: "/event", Icon: BsCalendar4Event },
    { display: "Saved", to: "/saved", Icon: BsBookmark },
    { display: "Profile", to: "/profile", Icon: AiOutlineUser },
  ];

  const location = useLocation();

  return (
    <aside className="max-w-[19rem] flex-1 hidden lg:block">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden font-medium">
        {SIDEBARLINK.map((item, i) => (
          <NavLink
            key={i}
            className={`text-xl flex gap-3 items-center p-4 ${
              location.pathname === item.to
                ? "text-blue-400 bg-sky-50"
                : "text-gray-600"
            }`}
            to={item.to}>
            <item.Icon className="text-2xl" /> {item.display}
          </NavLink>
        ))}
      </div>

      <div className="shadow-lg rounded-2xl bg-white overflow-hidden mt-6 p-4">
        <h3 className="text-xl mb-3 font-medium">Recomedation</h3>

        <div>
          <RecomedationList />
          <RecomedationList />
          <RecomedationList />
        </div>

        <button className="text-blue-500 text-md">Show More</button>
      </div>
    </aside>
  );
};

const DateItem = ({ isActive, day, date }) => {
  return (
    <div
      className={`p-2 rounded-lg ${
        isActive ? "bg-blue-500 text-white" : "bg-blue-50"
      }`}>
      <h5
        className={`text-xs text-center ${
          isActive ? "text-white" : "text-gray-500"
        }`}>
        {day}
      </h5>
      <h6 className="font-medium text-lg text-center">{date}</h6>
    </div>
  );
};

const CourseItem = () => {
  return (
    <div className="flex gap-3 items-center ">
      <img src={courseBanner} className="object-contain" />
      <div>
        <h6 className="text-lg font-medium">Webinar - Progammer</h6>
        <p className="text-gray-500 text-sm my-1">Pelita Nur Najmina</p>
        <p className="text-gray-500 text-sm">09:00 - 10:00 WIB</p>
      </div>
    </div>
  );
};

const EventListItem = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="border-r-4 border-r-blue-500 p-3">
        <h5 className="text-xs text-gray-500 ">Tue</h5>
        <h6 className="text-lg">25</h6>
      </div>
      <div>
        <h6 className="text-lg mb-1 font-medium">Webinar - Progammer</h6>
        <p className="text-gray-600 text-xs mt-1">Pelita Nur Najmina</p>
        <p className="text-gray-600 text-xs mt-1">Zoom Meeting</p>
      </div>
    </div>
  );
};

const EClassListItem = () => {
  return (
    <div className="flex gap-3 items-center">
      <img src={courseBanner} className="object-contain" />
      <div>
        <h6 className="text-lg font-medium">Belajar Progammer Hanya 2 jam</h6>
        <p className="text-gray-500 text-sm my-1">Pelita Nur Najmina</p>
      </div>
    </div>
  );
};

const SideBarRight = () => {
  return (
    <aside className="max-w-[23rem] flex-1 hidden lg:block">
      {/* Calender */}
      <div className="bg-white rounded-2xl p-4 shadow-lg mb-5">
        <div className="flex justify-between items-center">
          <h6 className="text-lg font-medium">July 2023</h6>
          <div className="flex items-center">
            <MdKeyboardArrowDown className="rotate-90" />
            <MdKeyboardArrowDown className="-rotate-90" />
          </div>
        </div>

        <div className="mt-5">
          <div className="grid grid-cols-7 gap-1 overflow-hidden">
            <DateItem date={24} day={"Mon"} isActive={true} />
            <DateItem date={25} day={"Tue"} />
            <DateItem date={26} day={"Wed"} />
            <DateItem date={27} day={"Thu"} />
            <DateItem date={28} day={"Fri"} />
            <DateItem date={29} day={"Sat"} />
            <DateItem date={30} day={"Sun"} />
          </div>
        </div>

        <hr className="border-t-t my-5 border-t-gray-400" />

        <div className="space-y-6">
          <CourseItem />
          <CourseItem />
        </div>

        <Button className="font-normal relative left-1/2 -translate-x-1/2 mt-5">
          See All
        </Button>
      </div>

      {/* upComming */}

      <div className="bg-white rounded-2xl p-4 shadow-lg mb-5">
        <h6 className="text-xl font-medium">Upcoming Event</h6>

        <hr className="border-t-2 mt-3 border-t-gray-400" />

        <div className="mt-5 space-y-6">
          <EventListItem />
          <EventListItem />
          <EventListItem />
        </div>

        <Button className="font-normal relative left-1/2 -translate-x-1/2 mt-5">
          View All Schedule
        </Button>
      </div>

      {/* E class */}

      <div className="bg-white rounded-2xl p-4 shadow-lg">
        <h6 className="text-xl font-medium">E-Class</h6>

        <hr className="border-t-2 mt-3 border-t-gray-400" />

        <div className="mt-5 space-y-6">
          <EClassListItem />
          <EClassListItem />
        </div>

        <Button className="font-normal relative left-1/2 -translate-x-1/2 mt-5">
          See All
        </Button>
      </div>
    </aside>
  );
};

function App() {
  return (
    <Router>
      <div className="relative">
        <Navbar />
        <img
          src={waves}
          alt="waves"
          className="-top-12 left-0 w-full rotate-180 -z-10 absolute"
        />
      </div>

      <main className="my-[1rem] max-w-7xl mx-auto px-2 flex gap-3">
        <SideBarLeft />
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />} />

          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
        <SideBarRight />
      </main>
    </Router>
  );
}

export default App;
