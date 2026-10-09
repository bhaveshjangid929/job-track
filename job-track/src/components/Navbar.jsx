import { useState } from "react";
import { FaRegCheckCircle, FaChevronDown, FaUser } from "react-icons/fa";
import { RxHamburgerMenu , RxCross2} from "react-icons/rx";
import { MdHome, MdDarkMode } from "react-icons/md";
import { IoBagHandleSharp } from "react-icons/io5";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

function Navbar({darkMode,setDarkMode}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`relative px-4 sm:px-7 py-3 ${darkMode?"bg-gray-900 border-gray-700":"bg-white border-gray-200"} border  shadow-sm flex items-center z-50`}>

      {/* Logo */}
      <div className="flex items-center gap-2">
        <FaRegCheckCircle className="text-green-500 text-3xl lg:text-4xl" />

        <div>
          <p
  className={`font-bold text-xl lg:text-2xl leading-none ${
    darkMode ? "text-white" : "text-gray-900"
  }`}
>
  Job<span className="text-green-500">Track</span>
</p>

          <p className="text-[9px] lg:text-[10px] text-gray-400 mt-1">
            Track • Apply • Grow
          </p>
        </div>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden lg:flex flex-1 items-center justify-center gap-10 text-sm font-medium">

        <Link to="/" className={`flex items-center gap-2 px-5 py-2.5 rounded-full cursor-pointer ${darkMode?"bg-green-900 text-green-400":"bg-green-50 text-green-600"}`}>
          <MdHome className="text-xl" />
          Dashboard
        </Link>

        <Link to="/applications"className={`flex items-center gap-2 px-5 py-2.5 rounded-full cursor-pointer ${
  darkMode
    ? "text-gray-300 hover:bg-gray-800 hover:text-white"
    : "text-gray-600 hover:bg-gray-50"
}`}>
          <IoBagHandleSharp className="text-lg" />
          Applications
        </Link>

        <Link to="/analytics" className={`flex items-center gap-2 px-5 py-2.5 rounded-full cursor-pointer ${
  darkMode
    ? "text-gray-300 hover:bg-gray-800 hover:text-white"
    : "text-gray-600 hover:bg-gray-50"
}`}>
          <TbBrandGoogleAnalytics className="text-lg" />
          Analytics
        </Link>

        <Link
  to="/addapplications"
  className={`flex items-center gap-2 px-5 py-2.5 rounded-full cursor-pointer ${
  darkMode
    ? "text-gray-300 hover:bg-gray-800 hover:text-white"
    : "text-gray-600 hover:bg-gray-50"
}`}
>
  <IoBagHandleSharp className="text-lg" />
  Add Application
</Link>

      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 sm:gap-5 ml-auto">

        {/* Notification */}
        <div className="relative pr-4 sm:pr-5 border-r border-gray-200">
          <IoIosNotifications className={`text-2xl cursor-pointer ${darkMode?"text-white":"text-gray-700"}`} />

          <span className="absolute top-0 right-3 sm:right-4 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        {/* Desktop Dark Mode */}
        <div className="w-9 h-9 rounded-full bg-gray-100 hidden lg:flex items-center justify-center cursor-pointer" onClick={()=>setDarkMode(!darkMode)}>
          <MdDarkMode className="text-xl text-gray-600" />
        </div>

        {/* Desktop Profile */}
        <Link to="/profile" className="hidden lg:flex items-center gap-2 cursor-pointer">

          <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
            B
          </div>

          <div>
            <p className={`text-sm font-semibold ${darkMode?"text-white":"text-gray-700"}`}>
              Bhavesh
            </p>

            <p className="text-[10px] text-gray-400">
              Frontend Developer
            </p>
          </div>

          <FaChevronDown className="text-xs text-gray-500 ml-1" />

        </Link>

        {/* Mobile Hamburger */}
        <div className="relative">

          {menuOpen ? (
            <RxCross2 className={`lg:hidden text-2xl ${
    darkMode ? "text-white" : "text-gray-700"
  }`} onClick={()=>setMenuOpen(!menuOpen)}
            />
          ):(
            <RxHamburgerMenu className={`lg:hidden text-2xl ${
    darkMode ? "text-white" : "text-gray-700"
  }`} onClick={()=>setMenuOpen(!menuOpen)}/>
          )}

          {/* Mobile Menu */}
          {menuOpen && (
            <div className={`absolute right-0 top-11 w-64 rounded-xl shadow-xl p-2 z-50 duration-700 transition-all border ${
    darkMode
      ? "bg-gray-900 border-gray-700"
      : "bg-white border-gray-200"
  }`}>

              {/* Dashboard */}
              <Link to="/" className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer ${
  darkMode
    ? "text-gray-300 hover:bg-gray-800 hover:text-white"
    : "text-gray-600 hover:bg-gray-50"
}`}>

                <div className="flex items-center gap-3">
                  <MdHome className="text-xl" />
                  <span className="font-medium">Dashboard</span>
                </div>

                <FaChevronDown className="-rotate-90 text-xs" />
              </Link>

              {/* Applications */}
              <Link to="/applications" className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer ${
  darkMode
    ? "text-gray-300 hover:bg-gray-800 hover:text-white"
    : "text-gray-600 hover:bg-gray-50"
}`}>

                <div className="flex items-center gap-3">
                  <IoBagHandleSharp className="text-lg" />
                  <span>Applications</span>
                </div>

                <FaChevronDown className="-rotate-90 text-xs" />
              </Link>

              {/* Analytics */}
              <Link to="/analytics" className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer ${
  darkMode
    ? "text-gray-300 hover:bg-gray-800 hover:text-white"
    : "text-gray-600 hover:bg-gray-50"
}`}>

                <div className="flex items-center gap-3">
                  <TbBrandGoogleAnalytics className="text-lg" />
                  <span>Analytics</span>
                </div>

                <FaChevronDown className="-rotate-90 text-xs" />
              </Link>
              <Link
  to="/addapplications"
  className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer ${
  darkMode
    ? "text-gray-300 hover:bg-gray-800 hover:text-white"
    : "text-gray-600 hover:bg-gray-50"
}`}
>
  <div className="flex items-center gap-3">
    <IoBagHandleSharp className="text-lg" />
    <span>Add Application</span>
  </div>

  <FaChevronDown className="-rotate-90 text-xs" />
</Link>

              {/* Divider */}
              <div className="border-t border-gray-100 my-2"></div>

              {/* Profile */}
              <Link to="/profile" className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer ${
  darkMode
    ? "text-gray-300 hover:bg-gray-800 hover:text-white"
    : "text-gray-600 hover:bg-gray-50"
}`}>

                <div className="flex items-center gap-3">
                  <FaUser className="text-sm" />
                  <span>Profile</span>
                </div>

                <FaChevronDown className="-rotate-90 text-xs" />
              </Link>

              {/* Dark Mode */}
              <div className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer ${
  darkMode
    ? "text-gray-300 hover:bg-gray-800 hover:text-white"
    : "text-gray-600 hover:bg-gray-50"
}`}>

                <div className="flex items-center gap-3">
                  <MdDarkMode className="text-xl" />
                  <span>Dark Mode</span>
                </div>

                {/* Toggle Design */}
                <div onClick={()=>setDarkMode(!darkMode)} className={`w-11 h-6 rounded-full p-1 cursor-pointer transition-colors ${
    darkMode ? "bg-green-500" : "bg-gray-300"
  }`}>
                  <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${
      darkMode ? "translate-x-5" : "translate-x-0"
    }`}></div>
                </div>

              </div>

            </div>
          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;