import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button.jsx";
import userContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user } = useContext(userContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, [user, navigate]); 

  if (!user) return null;

  const reports = [
    {
      id: 1,
      date: "2025-07-20",
      time: "10:32 AM",
      file: "/reports/report-1.pdf",
      description: "Routine eye screening report with mild DR indication.",
    },
    {
      id: 2,
      date: "2025-06-15",
      time: "02:47 PM",
      file: "/reports/report-2.pdf",
      description: "No major abnormalities detected.",
    },
    {
      id: 3,
      date: "2025-05-01",
      time: "11:10 AM",
      file: "/reports/report-3.pdf",
      description: "Follow-up checkup for previous diagnosis.",
    },
  ];

  return (
    <section className="max-w-2xl mx-auto py-16 px-4">
      <div className="bg-white rounded-2xl shadow-xl border border-neutral-300 dark:border-gray-700 p-8 flex flex-col items-center gap-6 transition hover:shadow-2xl">
        {/* Avatar */}
        <div className="w-28 h-28 rounded-full bg-neutral-100 flex items-center justify-center overflow-hidden shadow-md">
          <span className="text-5xl text-neutral-500">👤</span>
        </div>

        {/* User Info */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-400">
            {user.firstname + " " + user.lastname}
          </h2>
          <p className="text-neutral-600">{user.email}</p>
          <div className="text-sm text-neutral-500">
            Age: {user.age} | Gender: {user.gender}
          </div>
        </div>

        {/* Actions */}
        <div className="w-full flex flex-col sm:flex-row gap-3 mt-6">
          <Link to="/profile/edit" className="w-full">
            <Button className="w-full py-2 rounded-lg bg-neutral-800 text-white font-semibold hover:bg-neutral-700 transition">
              Edit Profile
            </Button>
          </Link>
        </div>
      </div>

      {/* Reports Section */}
      <div className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-center">Recent Reports</h2>

        {reports.map((report) => (
  <div
    key={report.id}
    className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-gray-700 rounded-xl shadow-sm px-6 py-4 hover:shadow-md transition"
  >
    {/* Header Row: Report ID and Date-Time */}
    <div className="flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-400">
      <p>
        Report ID:{" "}
        <span className="font-semibold text-blue-700 dark:text-blue-400">
          {report.id}
        </span>
      </p>
      <p>
        📅 {report.date} &nbsp; 🕒 {report.time}
      </p>
    </div>

    {/* Description */}
    <p className="mt-2 text-base font-medium text-neutral-800 dark:text-neutral-100">
      {report.description}
    </p>

    {/* View Button */}
    <div className="mt-4">
      <Button className="w-full py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition">
        View Report
      </Button>
    </div>
  </div>
))}

      </div>
    </section>
  );
}
