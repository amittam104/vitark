import { Button } from "@/components/ui/button";
import { Diamond } from "@phosphor-icons/react/dist/ssr";
import {
  ArrowUpDown,
  ClipboardList,
  Copy,
  ListFilter,
  PencilRuler,
} from "lucide-react";
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

const randomYearGraphColor = [
  "bg-violet-900",
  "bg-violet-700",
  "bg-violet-400",
  "bg-violet-100",
];

export default function Home() {
  // const randomNo = Math.floor(Math.random() * 4 + 1);

  return (
    <div className="w-full  flex flex-col items-center pt-20 gap-12 max-w-[88rem] mx-auto">
      <h1 className="text-5xl font-light max-w-2xl text-center leading-snug text-slate-900 tracking-tight">
        Library for logical components Not just UI components
      </h1>
      <div className="grid grid-cols-16 grid-rows-12 w-full gap-5">
        <div className="col-start-1 col-end-5 row-start-1 row-end-8 bg-white border flex flex-col justify-between border-slate-200 dark:bg-slate-950 dark:border-slate-900 rounded-lg px-6 py-6">
          <p className="text-sm mb-2">
            This is a collection of ready-to-use functional React components
            designed to streamline your development process, built on top of the
            Shadcn library.
          </p>
          <p className="text-sm mb-7">
            Use it in your{" "}
            <span className="font-medium text-slate-800">React</span> or{" "}
            <span className="font-medium text-slate-800">Next.js</span> project.
          </p>

          <div className="flex items-center gap-4">
            <Link href="/components">
              <Button>Browse Components</Button>
            </Link>
            <Link href="https://github.com/amittam104/vitark" target="_blank">
              <Button variant="outline">Github</Button>
            </Link>
          </div>
        </div>
        <div className="bg-gradient-to-br from-slate-50/20 to-slate-100/60 border relative border-slate-200 overflow-hidden rounded-lg px-6 py-6 dark:bg-slate-950 dark:border-slate-900 col-start-5 col-end-10 row-start-1 row-end-6">
          <div className="text-sm space-y-4 mb-7 z-10">
            <p>Using this library is as simple as it gets</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span>
                  <Copy size={14} />
                </span>{" "}
                Copy the code
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span>
                  <ClipboardList size={14} />
                </span>{" "}
                Paste it in your codebase
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span>
                  <PencilRuler size={14} />
                </span>{" "}
                Use it as it is or modify per your need
              </li>
            </ul>
          </div>

          <Button
            variant="outline"
            className="absolute top-32 -right-4 text-slate-800 opacity-50 bg-slate-100">
            <p className="">Filter data </p>
            <span>
              <ListFilter />
            </span>
          </Button>
          <Button
            variant="outline"
            className="absolute top-44 -right-4 text-slate-800 opacity-50 bg-slate-100">
            <p className="">Sort all components </p>
            <span>
              <ArrowUpDown />
            </span>
          </Button>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg px-6 py-6 dark:bg-slate-950 dark:border-slate-900 row-start-6 row-end-12 col-start-5 col-end-10">
          <p className="text-sm mb-4">Weekly tracker</p>
          <div className="flex items-center justify-between gap-auto w-full mb-8">
            {weeklyTracker.map((day) => {
              return (
                <div key={day.id} className="flex flex-col items-center gap-1">
                  <div
                    className={`flex items-center border-2 justify-center p-3 rounded-sm ${
                      day.status === "yes"
                        ? " border-violet-600 bg-violet-100"
                        : "border-slate-300 bg-slate-100"
                    }`}>
                    <Diamond
                      size={16}
                      weight="bold"
                      className={`${
                        day.status === "yes"
                          ? "text-violet-800"
                          : "text-slate-400"
                      }`}
                    />
                  </div>
                  <p className="text-xs text-slate-600">{day.day}</p>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-4 justify-self-end">
            <div className="flex flex-col items-center gap-1 justify-center">
              <div className="flex items-center border-2 justify-center p-1 rounded border-violet-600 bg-violet-100">
                <Diamond size={12} weight="bold" className="text-violet-800" />
              </div>
              <p className="text-[0.5rem] text-slate-500">Completed</p>
            </div>
            <div className="flex flex-col items-center gap-1 justify-center">
              <div className="flex items-center border-2 justify-center p-1 rounded border-slate-300 bg-slate-100">
                <Diamond size={12} weight="bold" className="text-slate-400" />
              </div>
              <p className="text-[0.5rem] text-slate-500">Not Completed</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-900 border border-slate-800 text-slate-50 rounded-lg px-6 py-6 dark:bg-slate-300 dark:border-slate-100 col-start-10 col-span-7  row-start-1 row-end-6">
          <p className="text-sm mb-4">Yearly tracker</p>
          <div className="grid grid-flow-col grid-rows-7 grid-cols-53 gap-x-1 gap-y-2">
            {Array.from({ length: 369 }).map((block, i) => {
              return (
                <div
                  key={i}
                  className={`h-[0.4rem] w-[0.4rem] rounded-[2px] ${
                    randomYearGraphColor[Math.floor(Math.random() * 4)]
                  }`}></div>
              );
            })}
          </div>
        </div>
        <div className="bg-white border text-sm border-slate-200 rounded-lg px-6 py-6 dark:bg-slate-950 dark:border-slate-900 col-start-10 col-span-7  row-start-6 row-end-10">
          <p className="mb-4">
            Provide your feedback or request new components.
          </p>
          <Button variant="outline">Your Feedback</Button>
        </div>
      </div>
    </div>
  );
}
