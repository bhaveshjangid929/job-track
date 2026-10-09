import { useState } from "react";

function AddApplications({ applications, setApplications, darkMode }) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [jobUrl, setJobUrl] = useState("");
  const [notes, setNotes] = useState("");

  function addApplication() {
    const application = {
      company,
      position,
      location,
      jobType,
      status,
      date,
      jobUrl,
      notes,
    };

    setApplications([...applications, application]);

    // Clear form
    setCompany("");
    setPosition("");
    setLocation("");
    setJobType("");
    setStatus("");
    setDate("");
    setJobUrl("");
    setNotes("");
  }

  const labelClass = `mb-2 text-sm font-medium ${
    darkMode ? "text-gray-300" : "text-gray-700"
  }`;

  const inputClass = `w-full rounded-lg border px-4 py-3 text-sm sm:text-base outline-none transition ${
    darkMode
      ? "bg-gray-100 border-gray-700 text-gray-800 placeholder:text-gray-500"
      : "bg-white border-gray-300 text-gray-800 placeholder:text-gray-400"
  } focus:border-green-500 focus:ring-2 focus:ring-green-100`;

  const selectClass = `w-full rounded-lg border px-4 py-3 text-sm sm:text-base outline-none transition ${
    darkMode
      ? "bg-gray-100 border-gray-700 text-gray-800"
      : "bg-white border-gray-300 text-gray-600"
  } focus:border-green-500 focus:ring-2 focus:ring-green-100`;

  return (
    <div
      className={`min-h-screen px-3 sm:px-5 py-6 sm:py-10 ${
        darkMode ? "bg-gray-950" : "bg-gray-50"
      }`}
    >
      <div
        className={`w-full sm:w-[90%] md:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 rounded-2xl border shadow-sm ${
          darkMode
            ? "bg-gray-900 border-gray-700"
            : "bg-white border-gray-200"
        }`}
      >
        {/* Heading */}
        <div className="mb-6 sm:mb-8">
          <p
            className={`font-bold text-2xl sm:text-3xl ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Add Application
          </p>

          <span
            className={`text-sm sm:text-base ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Add a new job application to your tracker.
          </span>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {/* Company */}
          <div>
            <p className={labelClass}>Company Name</p>

            <input
              type="text"
              placeholder="e.g. Google"
              className={inputClass}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          {/* Position */}
          <div>
            <p className={labelClass}>Job Position</p>

            <input             type="text"
              placeholder="e.g. Frontend Developer"
              className={inputClass}
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>

          {/* Location */}
          <div>
            <p className={labelClass}>Location</p>

            <input
              type="text"
              placeholder="e.g. Jaipur, Rajasthan"
              className={inputClass}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          {/* Job Type */}
          <div>
            <p className={labelClass}>Job Type</p>

            <select
              className={selectClass}
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            >
              <option value="">Select job type</option>
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Internship</option>
              <option>Contract</option>
            </select>
          </div>

          {/* Status */}
          <div>
            <p className={labelClass}>Status</p>

            <select
              className={selectClass}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Select Status</option>
              <option>Applied</option>
              <option>Interview</option>
              <option>Offer</option>
              <option>Rejected</option>
            </select>
          </div>

          {/* Date */}
          <div>
            <p className={labelClass}>Applied Date</p>

            <input
              type="date"
              className={inputClass}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        {/* Job URL */}
        <div className="mt-4 sm:mt-5">
          <p className={labelClass}>Job URL</p>

          <input
            type="url"
            placeholder="https://company.com/job"
            className={inputClass}
            value={jobUrl}
            onChange={(e) => setJobUrl(e.target.value)}
          />
        </div>

        {/* Notes */}
        <div className="mt-4 sm:mt-5">
          <p className={labelClass}>Notes</p>

          <textarea
            rows="4"
            placeholder="Add some notes..."
            className={`${inputClass} resize-none`}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </div>

        {/* Button */}
        <div className="mt-5 flex justify-end">
          <button
            className="w-full sm:w-auto rounded-lg bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-700 active:scale-[0.98]"
            onClick={addApplication}
          >
            Add Application
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddApplications;