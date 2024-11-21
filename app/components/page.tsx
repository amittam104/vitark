"use client";

import { useEffect, useState } from "react";

const initialWeekTracker = [
  { id: 0, day: "Sunday", dayCode: "sun", status: "no" },
  { id: 1, day: "Monday", dayCode: "mon", status: "no" },
  { id: 2, day: "Tuesday", dayCode: "tue", status: "no" },
  { id: 3, day: "Wednesday", dayCode: "wed", status: "no" },
  { id: 4, day: "Thursday", dayCode: "thu", status: "no" },
  { id: 5, day: "Friday", dayCode: "fri", status: "no" },
  { id: 6, day: "Saturday", dayCode: "sat", status: "no" },
];

type WeekDay = {
  id: number;
  day: string;
  dayCode: string;
  status: string;
};

function Page() {
  const [weekDayTracker, setWeekDayTracker] = useState(() => {
    const storedData = localStorage.getItem("weekTracker");

    if (!storedData) {
      localStorage.setItem("weekTracker", JSON.stringify(initialWeekTracker));
      return initialWeekTracker;
    }

    return JSON.parse(storedData);
  });

  function updateWeekTracker() {
    const today = new Date().getDay();

    const updatedWeekTracker = weekDayTracker.map((day: WeekDay) => {
      if (day.id === today) {
        day.status = "yes";

        return day;
      }

      return day;
    });

    setWeekDayTracker(updatedWeekTracker);
  }

  useEffect(
    function () {
      localStorage.setItem("weekTracker", JSON.stringify(weekDayTracker));
    },
    [weekDayTracker]
  );

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="">
        <div className="mb-20">
          <ul className="flex gap-6 items-center">
            {weekDayTracker.map((day: WeekDay) => {
              return (
                <li
                  key={day.id}
                  className={`px-8 py-6 0 flex items-center justify-center ${
                    day.status === "yes" ? "bg-indigo-600" : "bg-slate-300"
                  }`}
                >
                  &nbsp;
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <button
            onClick={updateWeekTracker}
            className="px-4 py-2 bg-slate-900 rounded-lg shadow-md text-slate-50"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
