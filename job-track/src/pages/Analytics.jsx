import {
  BsBriefcase,
  BsCheckCircle,
  BsClock,
  BsXCircle,
} from "react-icons/bs";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Analytics({ applications, darkMode }) {
  const applied = applications.filter(
    (item) => item.status === "Applied"
  ).length;

  const interview = applications.filter(
    (item) => item.status === "Interview"
  ).length;

  const offer = applications.filter(
    (item) => item.status === "Offer"
  ).length;

  const rejected = applications.filter(
    (item) => item.status === "Rejected"
  ).length;

  const total = applications.length;

  const getPercentage = (value) => {
    return total ? Math.round((value / total) * 100) : 0;
  };

  const chartData = [
    {
      status: "Applied",
      count: applied,
    },
    {
      status: "Interview",
      count: interview,
    },
    {
      status: "Offer",
      count: offer,
    },
    {
      status: "Rejected",
      count: rejected,
    },
  ];

  const responseRate = total
    ? Math.round(((interview + offer + rejected) / total) * 100)
    : 0;

  const interviewRate = getPercentage(interview);
  const offerRate = getPercentage(offer);
  const rejectedRate = getPercentage(rejected);

  return (
    <div
      className={`min-h-screen px-4 sm:px-6 lg:px-8 py-6 ${
        darkMode ? "bg-gray-950" : "bg-gray-50"
      }`}
    >
      {/* Header */}
      <div className="mb-6">
        <h1
          className={`text-2xl sm:text-3xl font-bold ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Analytics
        </h1>

        <p
          className={`text-sm mt-1 ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Track your job application performance
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {/* Total Applications */}
        <div
          className={`rounded-xl border p-5 shadow-sm ${
            darkMode
              ? "bg-gray-900 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Total Applications
              </p>

              <h2
                className={`text-3xl font-bold mt-2 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {total}
              </h2>
            </div>

            <div className="w-11 h-11 rounded-lg bg-green-50 flex items-center justify-center">
              <BsBriefcase className="text-xl text-green-600" />
            </div>
          </div>
        </div>

        {/* Applied */}
        <div
          className={`rounded-xl border p-5 shadow-sm ${
            darkMode
              ? "bg-gray-900 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Applied
              </p>

              <h2
                className={`text-3xl font-bold mt-2 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {applied}
              </h2>
            </div>

            <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center">
              <BsCheckCircle className="text-xl text-blue-600" />
            </div>
          </div>
        </div>

        {/* Interviews */}
        <div
          className={`rounded-xl border p-5 shadow-sm ${
            darkMode
              ? "bg-gray-900 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Interviews
              </p>

              <h2
                className={`text-3xl font-bold mt-2 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {interview}
              </h2>
            </div>

            <div className="w-11 h-11 rounded-lg bg-yellow-50 flex items-center justify-center">
              <BsClock className="text-xl text-yellow-600" />
            </div>
          </div>
        </div>

        {/* Rejected */}
        <div
          className={`rounded-xl border p-5 shadow-sm ${
            darkMode
              ? "bg-gray-900 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Rejected
              </p>

              <h2
                className={`text-3xl font-bold mt-2 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {rejected}
              </h2>
            </div>

            <div className="w-11 h-11 rounded-lg bg-red-50 flex items-center justify-center">
              <BsXCircle className="text-xl text-red-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">

        {/* Application Status */}
        <div
          className={`rounded-xl border shadow-sm p-5 ${
            darkMode
              ? "bg-gray-900 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <h2
            className={`text-lg font-semibold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Application Status
          </h2>

          <p
            className={`text-sm mt-1 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Overview of your applications
          </p>

          {/* Chart */}
          <div className="h-64 mt-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis
                  dataKey="status"
                  tick={{
                    fill: darkMode ? "#9ca3af" : "#6b7280",
                  }}
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis
                  allowDecimals={false}
                  tick={{
                    fill: darkMode ? "#9ca3af" : "#6b7280",
                  }}
                  axisLine={false}
                  tickLine={false}
                />

                <Tooltip
                  contentStyle={{
                    backgroundColor: darkMode ? "#111827" : "#ffffff",
                    border: darkMode
                      ? "1px solid #374151"
                      : "1px solid #e5e7eb",
                    borderRadius: "10px",
                    color: darkMode ? "#ffffff" : "#111827",
                  }}
                />

                <Bar
                  dataKey="count"
                  fill="#22c55e"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Progress Bars */}
          <div className="mt-6 space-y-5">

            {/* Applied */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span
                  className={
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }
                >
                  Applied
                </span>

                <span
                  className={`font-medium ${
                    darkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {getPercentage(applied)}%
                </span>
              </div>

              <div
                className={`h-2 rounded-full ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                }`}
              >
                <div
                  className="h-2 bg-blue-500 rounded-full transition-all duration-500"
                  style={{
                    width: `${getPercentage(applied)}%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Interview */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span
                  className={
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }
                >
                  Interview
                </span>

                <span
                  className={`font-medium ${
                    darkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {getPercentage(interview)}%
                </span>
              </div>

              <div
                className={`h-2 rounded-full ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                }`}
              >
                <div
                  className="h-2 bg-yellow-500 rounded-full transition-all duration-500"
                  style={{
                    width: `${getPercentage(interview)}%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Offer */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span
                  className={
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }
                >
                  Offer
                </span>

                <span
                  className={`font-medium ${
                    darkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {getPercentage(offer)}%
                </span>
              </div>

              <div
                className={`h-2 rounded-full ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                }`}
              >
                <div
                  className="h-2 bg-green-500 rounded-full transition-all duration-500"
                  style={{
                    width: `${getPercentage(offer)}%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Rejected */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span
                  className={
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }
                >
                  Rejected
                </span>

                <span
                  className={`font-medium ${
                    darkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {getPercentage(rejected)}%
                </span>
              </div>

              <div
                className={`h-2 rounded-full ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                }`}
              >
                <div
                  className="h-2 bg-red-500 rounded-full transition-all duration-500"
                  style={{
                    width: `${getPercentage(rejected)}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Application Performance */}
        <div
          className={`rounded-xl border shadow-sm p-5 ${
            darkMode
              ? "bg-gray-900 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <h2
            className={`text-lg font-semibold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Application Performance
          </h2>

          <p
            className={`text-sm mt-1 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Your application progress
          </p>

          <div className="mt-6 space-y-5">

            {/* Response Rate */}
            <div className="flex justify-between items-center">
              <span
                className={
                  darkMode ? "text-gray-400" : "text-gray-600"
                }
              >
                Response Rate
              </span>

              <span className="text-xl font-bold text-green-600">
                {responseRate}%
              </span>
            </div>

            <div
              className={`border-t ${
                darkMode ? "border-gray-700" : "border-gray-100"
              }`}
            ></div>

            {/* Interview Rate */}
            <div className="flex justify-between items-center">
              <span
                className={
                  darkMode ? "text-gray-400" : "text-gray-600"
                }
              >
                Interview Rate
              </span>

              <span className="text-xl font-bold text-blue-600">
                {interviewRate}%
              </span>
            </div>

            <div
              className={`border-t ${
                darkMode ? "border-gray-700" : "border-gray-100"
              }`}
            ></div>

            {/* Offer Rate */}
            <div className="flex justify-between items-center">
              <span
                className={
                  darkMode ? "text-gray-400" : "text-gray-600"
                }
              >
                Offer Rate
              </span>

              <span className="text-xl font-bold text-green-600">
                {offerRate}%
              </span>
            </div>

            <div
              className={`border-t ${
                darkMode ? "border-gray-700" : "border-gray-100"
              }`}
            ></div>

            {/* Rejected Rate */}
            <div className="flex justify-between items-center">
              <span
                className={
                  darkMode ? "text-gray-400" : "text-gray-600"
                }
              >
                Rejected Rate
              </span>

              <span className="text-xl font-bold text-red-500">
                {rejectedRate}%
              </span>
            </div>
          </div>

          {/* Bottom Summary */}
          <div
            className={`mt-8 rounded-xl p-4 border ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-gray-50 border-gray-200"
            }`}
          >
            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Total Applications
            </p>

            <p
              className={`text-2xl font-bold mt-1 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              {total}
            </p>

            <p
              className={`text-xs mt-1 ${
                darkMode ? "text-gray-500" : "text-gray-400"
              }`}
            >
              Keep tracking your applications consistently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;