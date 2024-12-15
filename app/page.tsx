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
    <div className="w-full flex flex-col items-center pt-8 sm:pt-20 px-4 sm:px-6 gap-6 sm:gap-12 max-w-[88rem] mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-light max-w-2xl text-center leading-snug text-slate-900 dark:text-slate-50 tracking-tight">
        Library for logical components Not just UI components
      </h1>
      <div className="flex flex-col max-w-[35rem] lg:max-w-full lg:grid lg:grid-cols-12 xl:grid-cols-16 w-full gap-4 lg:gap-5 ">
        <div className="lg:col-span-4 xl:col-start-1 xl:col-end-5 xl:row-start-1 xl:row-end-8 bg-white border flex flex-col justify-between border-slate-200 dark:bg-slate-950 dark:border-slate-800 rounded-lg p-4 sm:px-6 sm:py-6">
          <div className="space-y-4 sm:space-y-2">
            <p className="text-sm">
              This is a collection of ready-to-use functional React components
              designed to streamline your development process, built on top of
              the Shadcn library.
            </p>
            <p className="text-sm">
              Use it in your{" "}
              <span className="font-medium text-slate-800 dark:text-slate-400">
                React
              </span>{" "}
              or{" "}
              <span className="font-medium text-slate-800 dark:text-slate-400">
                Next.js
              </span>{" "}
              project.
            </p>
          </div>

          <div className="flex flex-col flex-wrap xl:flex-row items-stretch xl:items-center gap-3 sm:gap-4 mt-6">
            <Link
              href="/docs/components/weekly-tracker"
              className="w-full xl:w-auto">
              <Button className="w-full">Browse Components</Button>
            </Link>
            <Link
              href="https://github.com/amittam104/vitark"
              target="_blank"
              className="w-full sm:w-auto">
              <Button variant="outline" className="w-full">
                Github
              </Button>
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 xl:col-start-5 xl:col-end-10 xl:row-start-1 xl:row-end-6 bg-gradient-to-br from-slate-50/20 to-slate-100/60 dark:from-slate-900/90 dark:to-slate-800/60 border relative border-slate-200 overflow-hidden rounded-lg p-4 sm:px-6 sm:py-6 dark:bg-slate-950 dark:border-slate-800">
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
            className="absolute top-40 sm:top-32 -right-4 text-slate-800 dark:text-slate-300/80 opacity-50 bg-slate-100 dark:bg-slate-400/60">
            <p className="">Filter data </p>
            <span>
              <ListFilter />
            </span>
          </Button>
          <Button
            variant="outline"
            className="absolute top-44 hidden xl:flex -right-4 text-slate-800 dark:text-slate-300/80 opacity-50 bg-slate-100 dark:bg-slate-400/60">
            <p className="">Sort data</p>
            <span>
              <ArrowUpDown />
            </span>
          </Button>
        </div>
        <div className="lg:col-span-5 xl:col-start-5 xl:col-end-10 xl:row-start-6 xl:row-end-12 bg-white border border-slate-200 rounded-lg p-4 sm:px-6 sm:py-6 dark:bg-slate-950 dark:border-slate-800">
          <p className="text-sm mb-4">Weekly tracker</p>
          <div className="flex flex-wrap items-center justify-start gap-2 lg:justify-between gap-auto w-full mb-8">
            {weeklyTracker.map((day) => {
              return (
                <div key={day.id} className="flex flex-col items-center gap-1">
                  <div
                    className={`flex flex-wrap items-center border-2 justify-center p-3 rounded-lg ${
                      day.status === "yes"
                        ? " border-violet-600 bg-violet-100 dark:bg-violet-900 dark:border-violet-400"
                        : "border-slate-400 bg-slate-100 dark:bg-slate-900 dark:border-slate-400"
                    }`}>
                    <Diamond
                      size={16}
                      weight="bold"
                      className={`${
                        day.status === "yes"
                          ? "text-violet-800 dark:text-violet-400"
                          : "text-slate-400 dark:text-slate-400"
                      }`}
                    />
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {day.day}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-4 justify-self-end">
            <div className="flex flex-col items-center gap-1 justify-center">
              <div className="flex items-center border-2 justify-center p-1 rounded border-violet-600 bg-violet-100 dark:bg-violet-900 dark:border-violet-400">
                <Diamond
                  size={12}
                  weight="bold"
                  className="text-violet-800 dark:text-violet-400"
                />
              </div>
              <p className="text-[0.5rem] text-slate-500 dark:text-slate-400">
                Completed
              </p>
            </div>
            <div className="flex flex-col items-center gap-1 justify-center">
              <div className="flex items-center border-2 justify-center p-1 rounded border-slate-400 bg-slate-100 dark:bg-slate-900 dark:border-slate-400">
                <Diamond size={12} weight="bold" className="text-slate-400" />
              </div>
              <p className="text-[0.5rem] text-slate-500 dark:text-slate-400">
                Not Completed
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 xl:col-start-10 xl:col-span-7 xl:row-start-1 xl:row-end-6 bg-slate-900 dark:bg-slate-400/20 border border-slate-800 text-slate-50 rounded-lg p-4 sm:px-6 sm:py-6 dark:border-slate-700">
          <p className="text-sm mb-4">Yearly tracker</p>
          <div className="grid grid-flow-col grid-rows-12 grid-cols-[20] sm:grid-rows-7 sm:grid-cols-[35] md:grid-cols-53 gap-x-[0.4rem] sm:gap-x-1 gap-y-2">
            {Array.from({ length: 200 }).map((block, i) => (
              <div
                key={i}
                className={`h-[0.4rem] w-[0.4rem] sm:h-[0.4rem] sm:w-[0.4rem] md:h-[0.4rem] md:w-[0.4rem] rounded-[2px] ${
                  randomYearGraphColor[Math.floor(Math.random() * 4)]
                }`}
              />
            ))}
            <div className="hidden sm:contents">
              {Array.from({ length: 70 }).map((block, i) => (
                <div
                  key={i + 175}
                  className={`h-[0.4rem] w-[0.4rem] md:h-[0.4rem] md:w-[0.4rem] rounded-[2px] ${
                    randomYearGraphColor[Math.floor(Math.random() * 4)]
                  }`}
                />
              ))}
            </div>
            <div className="hidden md:contents">
              {Array.from({ length: 124 }).map((block, i) => (
                <div
                  key={i + 245}
                  className={`h-[0.4rem] w-[0.4rem] rounded-[2px] ${
                    randomYearGraphColor[Math.floor(Math.random() * 4)]
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 xl:col-start-10 xl:col-span-7 xl:row-start-6 xl:row-end-10 bg-white border text-sm border-slate-200 rounded-lg p-4 sm:px-6 sm:py-6 dark:bg-slate-950 dark:border-slate-800">
          <p className="mb-4">
            Provide your feedback or request new components.
          </p>
          <Link href="/docs/feedback">
            <Button variant="outline">Your Feedback</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
