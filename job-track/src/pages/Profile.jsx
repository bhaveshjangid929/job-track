import { useState } from "react";
import {
  FaEdit,
  FaSave,
  FaTimes,
  FaMapMarkerAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

function Profile({ darkMode }) {
  const [editMode, setEditMode] = useState(false);

  const [name, setName] = useState("Bhavesh Jangid");
  const [editName, setEditName] = useState("");

  const [role, setRole] = useState("Frontend Developer");
  const [editRole, setEditRole] = useState("");

  const [email, setEmail] = useState("bhaveshjangid929@gmail.com");
  const [editEmail, setEditEmail] = useState("");

  const [location, setLocation] = useState("Phulera, Rajasthan");
  const [editLocation, setEditLocation] = useState("");

  const [portfolio, setPortfolio] = useState(
    "https://port-bhavesh.vercel.app/"
  );
  const [editPortfolio, setEditPortfolio] = useState("");

  function handleEdit() {
    setEditMode(true);
    setEditName(name);
    setEditRole(role);
    setEditEmail(email);
    setEditLocation(location);
    setEditPortfolio(portfolio);
  }

  function handleSave() {
    setEditMode(false);

    setName(editName);
    setRole(editRole);
    setEmail(editEmail);
    setLocation(editLocation);
    setPortfolio(editPortfolio);
  }

  function handleCancel() {
    setEditMode(false);

    setEditName(name);
    setEditRole(role);
    setEditEmail(email);
    setEditLocation(location);
    setEditPortfolio(portfolio);
  }

  return (
    <div
      className={`min-h-screen px-4 sm:px-6 lg:px-8 py-6 ${
        darkMode ? "bg-gray-950" : "bg-gray-50"
      }`}
    >
      {/* Page Header */}
      <div className="mb-6">
        <h1
          className={`text-2xl sm:text-3xl font-bold ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Profile
        </h1>

        <p
          className={`text-sm mt-1 ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Manage your profile information
        </p>
      </div>

      {/* Profile Card */}
      <div
        className={`border rounded-2xl shadow-sm overflow-hidden ${
          darkMode
            ? "bg-gray-900 border-gray-700"
            : "bg-white border-gray-200"
        }`}
      >
        {/* Green Top Line */}
        <div className="h-1 bg-green-500"></div>

        <div className="p-5 sm:p-6 lg:p-8">
          {/* Profile Header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Avatar */}
            <div className="w-20 h-20 shrink-0 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl font-bold shadow-sm">
              B
            </div>

            {/* Name & Role */}
            <div className="flex-1">
              <h2
                className={`text-xl sm:text-2xl font-bold ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {name}
              </h2>

              <p
                className={`text-sm mt-1 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {role}
              </p>
            </div>

            {/* Edit Button */}
            {!editMode && (
              <button
                onClick={handleEdit}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 active:scale-95 transition"
              >
                <FaEdit />
                Edit Profile
              </button>
            )}
          </div>

          {/* Divider */}
          <div
            className={`border-t my-7 ${
              darkMode ? "border-gray-700" : "border-gray-100"
            }`}
          ></div>

          {/* Edit Form */}
          {editMode && (
            <div
              className={`border rounded-xl p-4 sm:p-6 mb-7 ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <div className="mb-5">
                <h3
                  className={`text-lg font-semibold ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Edit Profile
                </h3>

                <p
                  className={`text-xs mt-1 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Update your personal information
                </p>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-100 border border-gray-300 rounded-lg outline-none text-sm text-gray-800 focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Role */}
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Role
                  </label>

                  <input
                    type="text"
                    value={editRole}
                    onChange={(e) => setEditRole(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-100 border border-gray-300 rounded-lg outline-none text-sm text-gray-800 focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                    placeholder="Enter your role"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-100 border border-gray-300 rounded-lg outline-none text-sm text-gray-800 focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Location */}
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Location
                  </label>

                  <input
                    type="text"
                    value={editLocation}
                    onChange={(e) => setEditLocation(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-100 border border-gray-300 rounded-lg outline-none text-sm text-gray-800 focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                    placeholder="Enter your location"
                  />
                </div>

                {/* Portfolio */}
                <div className="md:col-span-2">
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Portfolio URL
                  </label>

                  <input
                    type="url"
                    value={editPortfolio}
                    onChange={(e) => setEditPortfolio(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-100 border border-gray-300 rounded-lg outline-none text-sm text-gray-800 focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                    placeholder="https://yourportfolio.com"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 mt-6">
                {/* Cancel */}
                <button
                  onClick={handleCancel}
                  className={`flex items-center justify-center gap-2 px-5 py-2.5 border rounded-lg text-sm font-medium transition ${
                    darkMode
                      ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                      : "border-gray-300 text-gray-700 hover:bg-white"
                  }`}
                >
                  <FaTimes />
                  Cancel
                </button>

                {/* Save */}
                <button
                  onClick={handleSave}
                  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 active:scale-95 transition"
                >
                  <FaSave />
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Profile Information */}
          <div>
            <h3
              className={`text-lg font-semibold mb-5 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Personal Information
            </h3>

            <div className="space-y-5">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-xs text-gray-500 mb-1">
                    Email
                  </p>

                  <p
                    className={`text-sm font-medium break-all ${
                      darkMode ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    {email}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-xs text-gray-500 mb-1">
                    Location
                  </p>

                  <p
                    className={`text-sm font-medium ${
                      darkMode ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    {location}
                  </p>
                </div>
              </div>

              {/* Portfolio */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                  <FaGlobe />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-gray-500 mb-1">
                    Portfolio
                  </p>

                  <a
                    href={portfolio}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-green-600 hover:text-green-700 break-all"
                  >
                    {portfolio}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;