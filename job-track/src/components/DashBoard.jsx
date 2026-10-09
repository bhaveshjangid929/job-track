import {
  BsBag,
  BsCheckCircle,
  BsClock,
  BsXCircle,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
function DashBoard({applications,darkMode}) {
  const navigate = useNavigate();
  return (
    <div className={darkMode?"bg-gray-950 text-white min-h-screen":"bg-gray-50 text-gray-900 min-h-screen"}>

      {/* Heading */}
      <div className="px-5 sm:px-8 py-5">
        <h1 className={`font-bold text-2xl md:text-3xl ${darkMode?"text-white":"text-gray-800"}`}>
          Welcome Back, Bhavesh 👋
        </h1>

        <p className={`text-sm md:text-base mt-1 ${darkMode?"text-gray-200":"text-gray-500"}`}>
          Track and manage your job applications.
        </p>
      </div>


      {/* Cards */}
      <div className="px-5 sm:px-8 grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* Total Applications */}
        <div className={`rounded-2xl p-5 shadow-sm flex justify-between items-center border ${
    darkMode
      ? "bg-gray-900 border-gray-700"
      : "bg-white border-gray-200"
  }`}>
          <div>
            <p  className={`text-sm ${
    darkMode ? "text-gray-400" : "text-gray-500"
  }`}>
              Total Applications
            </p>

            <span  className={`block text-3xl font-bold mt-2 ${
    darkMode ? "text-white" : "text-gray-800"
  }`}>
              {applications.length}
            </span>
          </div>

          <div className="w-12 h-12 rounded-xl bg-green-50 text-green-500 flex items-center justify-center text-xl">
            <BsBag />
          </div>
        </div>


        {/* Applied */}
        <div  className={`rounded-2xl p-5 shadow-sm flex justify-between items-center border ${
    darkMode
      ? "bg-gray-900 border-gray-700"
      : "bg-white border-gray-200"
  }`}>
          <div>
            <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
              Applied
            </p>

            <span className={`block text-3xl font-bold mt-2 ${
    darkMode ? "text-white" : "text-gray-800"
  }`}>
              {applications.filter((item)=>item.status === "Applied").length}
            </span>
          </div>

          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center text-xl">
            <BsCheckCircle />
          </div>
        </div>


        {/* Interviews */}
        <div className={`rounded-2xl p-5 shadow-sm flex justify-between items-center border ${
    darkMode
      ? "bg-gray-900 border-gray-700"
      : "bg-white border-gray-200"
  }`}>
          <div>
            <p  className={`text-sm ${
    darkMode ? "text-gray-400" : "text-gray-500"
  }`}>
              Interviews
            </p>

            <span className={`block text-3xl font-bold mt-2 ${
    darkMode ? "text-white" : "text-gray-800"
  }`}>
              {applications.filter((item)=>item.status === "Interview").length}
            </span>
          </div>

          <div className="w-12 h-12 rounded-xl bg-yellow-50 text-yellow-500 flex items-center justify-center text-xl">
            <BsClock />
          </div>
        </div>


        {/* Rejected */}
        <div  className={`rounded-2xl p-5 shadow-sm flex justify-between items-center border ${
    darkMode
      ? "bg-gray-900 border-gray-700"
      : "bg-white border-gray-200"
  }`}>
          <div>
            <p  className={`text-sm ${
    darkMode ? "text-gray-400" : "text-gray-500"
  }`}>
              Rejected
            </p>

            <span className={`block text-3xl font-bold mt-2 ${
    darkMode ? "text-white" : "text-gray-800"
  }`}>
              {applications.filter((item)=>item.status === "Rejected").length}
            </span>
          </div>

          <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center text-xl">
            <BsXCircle />
          </div>
        </div>

      </div>


      {/* Recent Applications */}
      <div className={`mx-5 sm:mx-8 mt-6 rounded-2xl shadow-sm border ${
    darkMode
      ? "bg-gray-900 border-gray-700"
      : "bg-white border-gray-200"
  }`}>

        {/* Recent Heading */}
        <div className="px-5 py-5 flex justify-between items-center">

          <div>
            <h2 className={`text-lg md:text-xl font-bold ${
    darkMode ? "text-white" : "text-gray-800"
  }`}>
              Recent Applications
            </h2>

            
            <p className={`text-sm mt-1 ${
    darkMode ? "text-gray-400" : "text-gray-500"
  }`}>
              Your latest job applications
            </p>
          </div>

          <button className="text-sm font-medium text-green-600 hover:text-green-700"onClick={()=>navigate("/applications")}>
            View All
          </button>

        </div>

           {applications.map((item,index) => (

  <div className="px-5 py-4 border-t border-gray-100 flex justify-between items-center" key={index}>

    <div >
      <h3 className="font-semibold text-gray-800">
        {item.company}
      </h3>

      <p className="text-sm text-gray-500 mt-1">
        {item.position}
      </p>
    </div>

    <span className={item.status === "Applied"?"text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-2 rounded-lg":item.status==="Interview"?"text-xs font-semibold bg-yellow-50 text-yellow-600 px-3 py-2 rounded-lg":item.status==="Rejected"?"text-xs font-semibold text-red-600 bg-red-50 px-3 py-2 rounded-lg":"text-xs font-semibold text-green-600 bg-green-50 px-3 py-2 rounded-lg"}>
      {item.status}
    </span>

  </div>

))}


       

      </div>

    </div>
  );
}

export default DashBoard;