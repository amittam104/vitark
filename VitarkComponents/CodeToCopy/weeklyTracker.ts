export const weeklyTrackerCode = `
"use client";

import { Button } from "@/components/ui/button";
import { Diamond } from "@phosphor-icons/react/dist/ssr";
import { isSameWeek } from "date-fns";
import { useEffect, useState } from "react";

type WeekDay = {
  id: number;
  day: string;
  dayCode: string;
  status: string;
  date: Date | null;
};

let initialWeekTracker: WeekDay[];

if (typeof window !== undefined && window.localStorage) {
  initialWeekTracker = [
    { id: 0, day: "Sunday", dayCode: "sun", status: "no", date: null },
    { id: 1, day: "Monday", dayCode: "mon", status: "no", date: null },
    { id: 2, day: "Tuesday", dayCode: "tue", status: "no", date: null },
    { id: 3, day: "Wednesday", dayCode: "wed", status: "no", date: null },
    { id: 4, day: "Thursday", dayCode: "thu", status: "no", date: null },
    { id: 5, day: "Friday", dayCode: "fri", status: "no", date: null },
    { id: 6, day: "Saturday", dayCode: "sat", status: "no", date: null },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const storedData: any | null = localStorage.getItem("weekTracker");

  if (!storedData) {
    localStorage.setItem("weekTracker", JSON.stringify(initialWeekTracker));
    initialWeekTracker = [
      { id: 0, day: "Sunday", dayCode: "sun", status: "no", date: null },
      { id: 1, day: "Monday", dayCode: "mon", status: "no", date: null },
      { id: 2, day: "Tuesday", dayCode: "tue", status: "no", date: null },
      { id: 3, day: "Wednesday", dayCode: "wed", status: "no", date: null },
      { id: 4, day: "Thursday", dayCode: "thu", status: "no", date: null },
      { id: 5, day: "Friday", dayCode: "fri", status: "no", date: null },
      { id: 6, day: "Saturday", dayCode: "sat", status: "no", date: null },
    ];
  }

  initialWeekTracker = JSON.parse(storedData);
}

function WeeklyTrackerPreview() {
  const [weekDayTracker, setWeekDayTracker] = useState(initialWeekTracker);

  function updateWeekTracker() {
    const todayDay = new Date().getDay();
    const todayDate = new Date();

    const completedDaysFromWeek = weekDayTracker.filter(
      (day) => day.date !== null
    );

    if (completedDaysFromWeek.length > 0) {
      const isItSameWeek = isSameWeek(
        completedDaysFromWeek[completedDaysFromWeek.length - 1].date!,
        todayDate.toString()
      );

      if (!isItSameWeek)
        initialWeekTracker = [
          { id: 0, day: "Sunday", dayCode: "sun", status: "no", date: null },
          { id: 1, day: "Monday", dayCode: "mon", status: "no", date: null },
          { id: 2, day: "Tuesday", dayCode: "tue", status: "no", date: null },
          {
            id: 3,
            day: "Wednesday",
            dayCode: "wed",
            status: "no",
            date: null,
          },
          {
            id: 4,
            day: "Thursday",
            dayCode: "thu",
            status: "no",
            date: null,
          },
          { id: 5, day: "Friday", dayCode: "fri", status: "no", date: null },
          {
            id: 6,
            day: "Saturday",
            dayCode: "sat",
            status: "no",
            date: null,
          },
        ];
      setWeekDayTracker(initialWeekTracker);
    }

    const updatedWeekTracker = weekDayTracker.map((day: WeekDay) => {
      if (day.id === todayDay) {
        day.status = "yes";
        day.date = todayDate;

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
    <div className="border border-slate-200 dark:border-slate-700 rounded-lg flex flex-col items-start p-12  w-full">
      <div className="mb-8 w-full">
        <ul className="flex flex-wrap justify-between gap-4 w-full items-center px-6">
          {weekDayTracker.map((day: WeekDay) => {
            return (
              <div className="flex flex-col items-center gap-3" key={day.id}>
                <li
                  className={\`p-4 0 flex items-center border-[2px] rounded-lg justify-center \${
                    day.status === "yes"
                      ? "bg-violet-100 border-violet-600  dark:bg-violet-900 dark:border-violet-400"
                      : "border-slate-400 bg-slate-100 dark:bg-slate-900 dark:border-slate-400"
                  }\`}>
                  <Diamond
                    size={30}
                    className={\`\${
                      day.status === "yes"
                        ? "text-violet-800 dark:text-violet-400"
                        : "text-slate-400 dark:text-slate-400"
                    }\`}
                  />
                </li>
                <p className="text-xs text-slate-500 dark:text-slate-300">
                  {day.dayCode}
                </p>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="flex items-center gap-8 mb-12 place-self-end">
        <div className="flex flex-col items-center gap-3">
          <li className="p-2 flex  items-center border-[2px] rounded-md justify-center border-slate-400 bg-slate-100 dark:bg-slate-900 dark:border-slate-400">
            <Diamond size={16} className="text-slate-400 dark:text-slate-400" />
          </li>
          <p className="text-xs text-slate-500 dark:text-slate-300">
            Not Completed
          </p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <li className="p-2 flex items-center border-[2px] rounded-md justify-center bg-violet-100 border-violet-600  dark:bg-violet-900 dark:border-violet-400">
            <Diamond
              size={16}
              className="text-violet-800 dark:text-violet-400 "
            />
          </li>
          <p className="text-xs text-slate-500 dark:text-slate-300">
            Completed
          </p>
        </div>
      </div>
      <div>
        <Button onClick={updateWeekTracker} className="px-4 py-2  shadow-md ">
          Done
        </Button>
      </div>
    </div>
  );
}

export default WeeklyTrackerPreview;`;
