"use client";

import { Diamond } from "@phosphor-icons/react/dist/ssr";
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
                  className={`p-4 0 flex items-center border-[3px] rounded-xl justify-center ${
                    day.status === "yes"
                      ? "bg-violet-100 border-violet-600"
                      : "bg-slate-100 border-slate-400"
                  }`}>
                  <Diamond
                    size={30}
                    className={`${
                      day.status === "yes"
                        ? "text-violet-600"
                        : "text-slate-400"
                    }`}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <button
            onClick={updateWeekTracker}
            className="px-4 py-2 bg-slate-900 rounded-lg shadow-md text-slate-50">
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
