import { Link, NavLink } from "react-router-dom";
import { TbIcons } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-b-gray-500 p-4">
      <Link to="https://hamedakbari.vercel.app">
        <div className="w-10 h-10 text-3xl text-white bg-blue-500 flex justify-center items-center rounded-full">
          <i className="fa-brands fa-facebook-f"></i>
        </div>
      </Link>

      {/* Menu Items */}
      <div className="w-full hidden lg:flex justify-center items-center gap-20 text-2xl text-gray-500">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white" : ""
          }
        >
          <i className="transition-all ease-linear cursor-pointer fa-solid fa-house active hover:opacity-80"></i>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white" : ""
          }
        >
          <i className="transition-all ease-linear cursor-pointer fa-solid fa-user hover:opacity-80"></i>
        </NavLink>

        <NavLink
          to="/youtube"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white" : ""
          }
        >
          <i className="transition-all ease-linear cursor-pointer fa-brands fa-square-youtube hover:opacity-80"></i>
        </NavLink>

        <NavLink
          to="/group"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white" : ""
          }
        >
          <i className="transition-all ease-linear cursor-pointer fa-solid fa-users hover:opacity-80"></i>
        </NavLink>

        <NavLink
          to="/triangle"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white" : ""
          }
        >
          <i className="transition-all ease-linear cursor-pointer fa-solid fa-circle-nodes hover:opacity-80"></i>
        </NavLink>

        <NavLink
          to="/pixel"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white" : ""
          }
        >
          <TbIcons className="transition-all ease-linear cursor-pointer hover:opacity-80 text-3xl" />
        </NavLink>
      </div>

      <div className="hidden lg:flex items-center justify-center">
        <div className="flex items-center justify-center bg-[#35383c] rounded-3xl p-2 gap-2">
          <i className="text-gray-400 fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search"
            className="text-white bg-transparent outline-none"
          />
        </div>

        <button className="px-4 py-2 ml-2 text-sm font-normal text-white transition-all ease-linear bg-blue-500 shadow-2xl rounded-3xl hover:opacity-90">
          <a href="#">Create</a>
        </button>

        <div className="flex gap-2 mx-2">
          <i className="text-2xl text-gray-500 fa-solid fa-bell transition-all duration-300 hover:opacity-60 cursor-pointer"></i>
          <div className="relative">
            <i className="text-2xl fa-brands fa-facebook-messenger transition-all duration-300 hover:opacity-60 cursor-pointer text-white"></i>
            <div className="w-1 h-1 rounded-full bg-green-500 absolute top-0 right-0"></div>
          </div>
          <i className="text-2xl text-gray-500 fa-solid fa-caret-down transition-all duration-300 hover:opacity-60 cursor-pointer"></i>
        </div>
      </div>

      {/* hamburger menu */}
      <GiHamburgerMenu className="lg:hidden text-gray-500 text-2xl cursor-pointer" />
    </header>
  );
}
