
import { useState } from "react";
import {
  FaEdit,
  FaTrash,
  FaMapMarkerAlt,
  FaBriefcase,
  FaCalendarAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Applications({ applications, setApplications,darkMode }) {
  const [editIndex, setEditIndex] = useState(null);

  const [editForm, setEditform] = useState({
    company: "",
    position: "",
    location: "",
    jobType: "",
    status: "",
    date: "",
    jobUrl: "",
    notes: "",
  });

  return (
    <div className={`min-h-screen px-4 sm:px-6 lg:px-8 py-8 ${
  darkMode ? "bg-gray-950" : "bg-gray-50"
}`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-7">
        <div>
          <h2 className={`text-2xl font-bold ${
  darkMode ? "text-white" : "text-gray-900"
}`}>
            Applications
          </h2>

          <p className={`text-sm mt-1 ${
  darkMode ? "text-gray-400" : "text-gray-500"
}`}>
            Manage and track your job applications
          </p>
        </div>

        <div className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border ${
  darkMode
    ? "bg-green-900/30 border-green-800"
    : "bg-green-50 border-green-100"
}`}>
          <span className={`text-sm ${
  darkMode ? "text-gray-400" : "text-gray-500"
}`}>Total</span>

          <span className="text-lg font-bold text-green-600">
            {applications.length}
          </span>
        </div>
      </div>

      {/* Applications */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {applications.map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl p-5 shadow-sm hover:shadow-md transition duration-300 border ${
    darkMode
      ? "bg-gray-900 border-gray-700"
      : "bg-white border-gray-200"
  }`}
          >
            {/* Company Header */}
            <div className="flex items-start justify-between gap-3 mb-5">
              <div className="min-w-0">
                <h3 className={`text-lg font-semibold truncate ${
    darkMode ? "text-white" : "text-gray-900"
  }`}>
                  {item.company}
                </h3>

                <p className={`text-sm mt-1 truncate ${
    darkMode ? "text-gray-400" : "text-gray-500"
  }`}>
                  {item.position}
                </p>
              </div>

              {/* Status */}
              <span className={`shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold ${
  darkMode
    ? "bg-green-900/40 text-green-400"
    : "bg-green-50 text-green-600"
}`}>
                {item.status || "Applied"}
              </span>
            </div>

            {/* Details */}
            <div className="space-y-3 mb-6">
              <div className={`flex items-center gap-3 text-sm ${
  darkMode ? "text-gray-400" : "text-gray-600"
}`}>
                <FaMapMarkerAlt className="text-green-500" />
                <span>{item.location || "Location not added"}</span>
              </div>

              <div className={`flex items-center gap-3 text-sm ${
  darkMode ? "text-gray-400" : "text-gray-600"
}`}>
                <FaBriefcase className="text-green-500" />
                <span>{item.jobType || "Job type not added"}</span>
              </div>

              <div className={`flex items-center gap-3 text-sm ${
  darkMode ? "text-gray-400" : "text-gray-600"
}`}>
                <FaCalendarAlt className="text-green-500" />
                <span>{item.date || "Date not added"}</span>
              </div>
            </div>

            {/* Job URL */}
            {item.jobUrl && (
              <a
                href={item.jobUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-green-600 font-medium hover:text-green-700 mb-5"
              >
                View Job
                <FaExternalLinkAlt className="text-xs" />
              </a>
            )}

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setEditIndex(index);
                  setEditform(applications[index]);
                }}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium active:scale-[0.98] transition ${
  darkMode
    ? "bg-green-900/30 text-green-400 hover:bg-green-900/50"
    : "bg-green-50 text-green-600 hover:bg-green-100"
}`}
              >
                <FaEdit className="text-sm" />
                Edit
              </button>

              <button
                onClick={() => {
                  const newApplications = applications.filter(
                    (item, i) => i !== index
                  );

                  setApplications(newApplications);
                }}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium active:scale-[0.98] transition ${
  darkMode
    ? "bg-red-900/30 text-red-400 hover:bg-red-900/50"
    : "bg-red-50 text-red-500 hover:bg-red-100"
}`}
              >
                <FaTrash className="text-sm" />
                Delete
              </button>
            </div>

            {/* Edit Form */}
            {editIndex === index && (
              <div className={`mt-6 pt-6 border-t ${
  darkMode ? "border-gray-700" : "border-gray-200"
}`}>
                <div className="mb-4">
                  <h4 className={`text-base font-semibold ${
  darkMode ? "text-white" : "text-gray-900"
}`}>
                    Edit Application
                  </h4>

                  <p className={`text-xs mt-1 ${
  darkMode ? "text-gray-400" : "text-gray-500"
}`}>
                    Update your application details
                  </p>
                </div>

                <div className="space-y-3">
                  {/* Company */}
                  <input
                    value={editForm.company}
                    onChange={(e) => {
                      setEditform({
                        ...editForm,
                        company: e.target.value,
                      });
                    }}
                    placeholder="Company name"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                  />

                  {/* Position */}
                  <input
                    value={editForm.position}
                    onChange={(e) => {
                      setEditform({
                        ...editForm,
                        position: e.target.value,
                      });
                    }}
                    placeholder="Job position"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                  />

                  {/* Location */}
                  <input
                    value={editForm.location}
                    onChange={(e) => {
                      setEditform({
                        ...editForm,
                        location: e.target.value,
                      });
                    }}
                    placeholder="Location"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                  />

                  {/* Job Type */}
                  <input
                    value={editForm.jobType}
                    onChange={(e) => {
                      setEditform({
                        ...editForm,
                        jobType: e.target.value,
                      });
                    }}
                    placeholder="Job type"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                  />

                  {/* Status */}
                  <select
                    value={editForm.status}
                    onChange={(e) => {
                      setEditform({
                        ...editForm,
                        status: e.target.value,
                      });
                    }}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 outline-none focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                  >
                    <option value="">Select status</option>
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Offer">Offer</option>
                    <option value="Rejected">Rejected</option>
                  </select>

                  {/* Date */}
                  <input
                    type="date"
                    value={editForm.date}
                    onChange={(e) => {
                      setEditform({
                        ...editForm,
                        date: e.target.value,
                      });
                    }}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 outline-none focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                  />

                  {/* Job URL */}
                  <input
                    type="url"
                    value={editForm.jobUrl}
                    onChange={(e) => {
                      setEditform({
                        ...editForm,
                        jobUrl: e.target.value,
                      });
                    }}
                    placeholder="Job URL"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                  />

                  {/* Notes */}
                  <textarea
                    value={editForm.notes}
                    onChange={(e) => {
                      setEditform({
                        ...editForm,
                        notes: e.target.value,
                      });
                    }}
                    placeholder="Notes"
                    rows="3"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-100 transition resize-none"
                  />

                  {/* Actions */}
                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={() => {
                        const updatedApplications = applications.map(
                          (item, i) => {
                            if (i === editIndex) {
                              return editForm;
                            }

                            return item;
                          }
                        );

                        setApplications(updatedApplications);
                        setEditIndex(null);
                      }}
                      className="flex-1 px-4 py-2.5 rounded-xl bg-green-600 text-white text-sm font-semibold hover:bg-green-700 active:scale-[0.98] transition"
                    >
                      Update
                    </button>

                    <button
                      onClick={() => setEditIndex(null)}
                      className="flex-1 px-4 py-2.5 rounded-xl bg-gray-100 text-gray-600 text-sm font-semibold hover:bg-gray-200 active:scale-[0.98] transition"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Empty State */}
      {applications.length === 0 && (
        <div className="text-center py-16 bg-white border border-dashed border-gray-300 rounded-2xl">
          <h3 className="text-lg font-semibold text-gray-800">
            No Applications Yet
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Add your first job application to start tracking.
          </p>
        </div>
      )}
    </div>
  );
}

export default Applications;
