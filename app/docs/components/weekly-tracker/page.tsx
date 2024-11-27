"use client";

import { Diamond } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

type WeekDay = {
  id: number;
  day: string;
  dayCode: string;
  status: string;
};

let initialWeekTracker: WeekDay[];

if (typeof window !== undefined && window.localStorage) {
  initialWeekTracker = [
    { id: 0, day: "Sunday", dayCode: "sun", status: "no" },
    { id: 1, day: "Monday", dayCode: "mon", status: "no" },
    { id: 2, day: "Tuesday", dayCode: "tue", status: "no" },
    { id: 3, day: "Wednesday", dayCode: "wed", status: "no" },
    { id: 4, day: "Thursday", dayCode: "thu", status: "no" },
    { id: 5, day: "Friday", dayCode: "fri", status: "no" },
    { id: 6, day: "Saturday", dayCode: "sat", status: "no" },
  ];

  const storedData: any | null = localStorage.getItem("weekTracker");

  if (!storedData) {
    localStorage.setItem("weekTracker", JSON.stringify(initialWeekTracker));
    initialWeekTracker = [
      { id: 0, day: "Sunday", dayCode: "sun", status: "no" },
      { id: 1, day: "Monday", dayCode: "mon", status: "no" },
      { id: 2, day: "Tuesday", dayCode: "tue", status: "no" },
      { id: 3, day: "Wednesday", dayCode: "wed", status: "no" },
      { id: 4, day: "Thursday", dayCode: "thu", status: "no" },
      { id: 5, day: "Friday", dayCode: "fri", status: "no" },
      { id: 6, day: "Saturday", dayCode: "sat", status: "no" },
    ];
  }

  initialWeekTracker = JSON.parse(storedData);
}

function Page() {
  const [weekDayTracker, setWeekDayTracker] = useState(initialWeekTracker);

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

  const weeklyTrackerComponentCode = `
  "use client";

  import { Diamond } from "@phosphor-icons/react/dist/ssr";
  import { useEffect, useState } from "react";
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
  
  type WeekDay = {
    id: number;
    day: string;
    dayCode: string;
    status: string;
  };
  
  let initialWeekTracker: WeekDay[];

  if (typeof window !== undefined && window.localStorage) {
    initialWeekTracker = [
      { id: 0, day: "Sunday", dayCode: "sun", status: "no" },
      { id: 1, day: "Monday", dayCode: "mon", status: "no" },
      { id: 2, day: "Tuesday", dayCode: "tue", status: "no" },
      { id: 3, day: "Wednesday", dayCode: "wed", status: "no" },
      { id: 4, day: "Thursday", dayCode: "thu", status: "no" },
      { id: 5, day: "Friday", dayCode: "fri", status: "no" },
      { id: 6, day: "Saturday", dayCode: "sat", status: "no" },
    ];
  
    const storedData: any | null = localStorage.getItem("weekTracker");
  
    if (!storedData) {
      localStorage.setItem("weekTracker", JSON.stringify(initialWeekTracker));
      initialWeekTracker = [
        { id: 0, day: "Sunday", dayCode: "sun", status: "no" },
        { id: 1, day: "Monday", dayCode: "mon", status: "no" },
        { id: 2, day: "Tuesday", dayCode: "tue", status: "no" },
        { id: 3, day: "Wednesday", dayCode: "wed", status: "no" },
        { id: 4, day: "Thursday", dayCode: "thu", status: "no" },
        { id: 5, day: "Friday", dayCode: "fri", status: "no" },
        { id: 6, day: "Saturday", dayCode: "sat", status: "no" },
      ];
    }
  
    initialWeekTracker = JSON.parse(storedData);
  }

  
function Page() {
  const [weekDayTracker, setWeekDayTracker] = useState(initialWeekTracker);

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

  return 
    <span>
      <span className="text-red-500 font-semibold">import</span>
      <span>from</span>
    </span>
  `;

  return (
    <div className="flex flex-col  items-start justify-center">
      <div className="space-y-2 mb-8">
        <h2 className="text-xl font-semibold">Weekly Tracker</h2>
        <p className="text-slate-600">
          Simple component to track your weekly progress, use local storage or a
          database
        </p>
      </div>
      <Tabs defaultValue="code" className="w-full">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <div className="border border-slate-200 rounded-lg flex flex-col items-start px-6 py-6">
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
        </TabsContent>
        <TabsContent value="code">
          <div className="rounded-lg flex flex-col items-start px-6 py-6 text-white">
            <SyntaxHighlighter
              className="overflow-hidden rounded-xl"
              language="javascript"
              style={okaidia}>
              {weeklyTrackerComponentCode}
            </SyntaxHighlighter>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Page;
