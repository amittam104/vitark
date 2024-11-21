import { Button } from "@/components/ui/button";
import { Diamond } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const weeklyTracker = [
  { id: 0, day: "sun", status: "yes" },
  { id: 1, day: "mon", status: "no" },
  { id: 2, day: "tue", status: "yes" },
  { id: 3, day: "wed", status: "yes" },
  { id: 4, day: "thu", status: "no" },
  { id: 5, day: "fri", status: "no" },
  { id: 6, day: "sat", status: "no" },
];

export default function Home() {
  return (
    <div className="w-full  flex flex-col items-center pb-20 gap-16 max-w-[85rem] mx-auto">
      <h1 className="text-5xl font-light max-w-3xl text-center leading-snug">
        Library for logical components Not just UI components
      </h1>
      <div className="grid grid-cols-12 grid-rows-12 w-full gap-5">
        <div className="col-start-1 col-end-5 row-start-1 row-end-11 bg-white border border-slate-200 dark:bg-slate-950 dark:border-slate-900 rounded-lg px-8 py-6">
          <p className="text-sm mb-7">
            This is a library of functional components. This is not a library of
            UI components. But our components are built with Shadcn library, so
            you don’t have to worry about that ui.
          </p>
          <div className="text-sm space-y-4 mb-7">
            <p>Using this library is as simple as it gets</p>
            <ul className="space-y-2">
              <li>Copy the code</li>
              <li>Paste it in your codebase</li>
              <li>Use it as it is or modify per your need</li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/components">
              <Button>Browse Components</Button>
            </Link>
            <Link href="https://github.com/amittam104/vitark" target="_blank">
              <Button variant="outline">Github</Button>
            </Link>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg px-8 py-6 dark:bg-slate-950 dark:border-slate-900 col-start-5 col-end-8 row-start-1 row-end-7">
          2
        </div>
        <div className="bg-white border border-slate-200 rounded-lg px-8 py-6 dark:bg-slate-950 dark:border-slate-900 row-start-7 row-end-13 col-start-5 col-end-8">
          <p className="text-sm mb-2">Weekly tracker</p>
          <div className="flex items-center justify-between gap-2 w-full">
            {weeklyTracker.map((day) => {
              return (
                <div
                  key={day.id}
                  className={`flex items-center border-[1.5px] justify-center p-2 rounded-sm ${
                    day.status === "yes"
                      ? " border-violet-600 bg-violet-100"
                      : ""
                  }`}>
                  <Diamond
                    size={12}
                    weight="bold"
                    className={`${
                      day.status === "yes" ? "text-violet-800" : ""
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-slate-900 border border-slate-800 text-slate-50 rounded-lg px-8 py-6 dark:bg-slate-300 dark:border-slate-100 col-start-8 col-end-13 row-start-1 row-end-6">
          4
        </div>
        <div className="bg-white border text-sm border-slate-200 rounded-lg px-8 py-6 dark:bg-slate-950 dark:border-slate-900 col-start-8 col-end-13 row-start-6 row-end-10">
          <p className="mb-4">Provide your feedback or request new comments.</p>
          <Button variant="outline">Your Feedback</Button>
        </div>
      </div>
    </div>
  );
}
