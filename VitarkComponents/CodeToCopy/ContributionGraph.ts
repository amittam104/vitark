export const contributionGraphCode = `

import { useState } from "react";
import { dummyContributionData } from "../../components/dummyContributionData";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ContributionData {
  date: string;
  level: 0 | 1 | 2 | 3 | 4;
  count: number;
}

export type { ContributionData };

const dummyData: Record<string, ContributionData> = dummyContributionData;

const themeColors = {
  default: {
    level0: "#ebedf0",
    level1: "#cbb0f8",
    level2: "#a375f2",
    level3: "#7c3aed",
    level4: "#5729a6",
  },
};

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function ContributionGraphPreview() {
  const [contributionData, setContributionData] = useState(dummyData);

  function getDatesInYear() {
    const year = new Date().getFullYear();
    const startDate = new Date(year, 0, 1);

    return Array.from({ length: 53 }, (_, weekIndex) => {
      return Array.from({ length: 7 }, (_, dayIndex) => {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + weekIndex * 7 + dayIndex);
        return currentDate.toISOString().split("T")[0];
      });
    });
  }

  const datesFromYear = getDatesInYear();

  // Function to get contribution level for a date
  const getContributionLevel = (date: string): number => {
    return contributionData[date]?.level || 0;
  };

  // Function to get tooltip content for a date
  const getTooltipContent = (date: string): string => {
    const data = contributionData[date];
    if (!data) return \`No contributions on \${date}\`;
    return \`\${data.count} contributions on \${date}\`;
  };

  // Function to simulate new commits being added
  const addNewCommit = () => {
    const today = new Date().toISOString().split("T")[0];
    const currentData: ContributionData = contributionData[today] || {
      date: today,
      level: 0,
      count: 0,
    };
    const newLevel =
      currentData.count === 0
        ? 1
        : (Math.min(Math.floor((currentData.count + 1) / 2), 4) as
            | 0
            | 1
            | 2
            | 3
            | 4);
    const updatedData: Record<string, ContributionData> = {
      ...dummyData,
      [today]: {
        date: today,
        count: currentData.count + 1,
        level: newLevel,
      },
    };
    setContributionData(updatedData);
  };

  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-lg flex flex-col items-start p-4 md:p-8 lg:p-12">
      <div className="w-auto mb-8 px-12 md:px-0 md:max-w-none max-w-72 md:mx-0 mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:flex">
          <div className="w-8">{/* Empty space for alignment */}</div>
          <div className="flex-1 overflow-x-auto">
            <div className="flex justify-between text-xs text-slate-500 mb-2">
              {months.map((month) => (
                <span key={month}>{month}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex md:hidden mb-4">
          {/* Mobile weekdays - horizontal at top */}
          <div className="w-8">{/* Space for months */}</div>
          <div className="flex-1">
            <div className="grid grid-cols-7 gap-[2px]">
              {["Sun", "", "Tue", "", "Thu", "", "Sat"].map((day) => (
                <span
                  key={day}
                  className="text-[10px] text-slate-500 text-center">
                  {day}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Desktop weekdays - vertical */}
          <div className="hidden md:flex w-8 flex-col justify-between pr-2">
            {["Sun", "", "Tue", "", "Thu", "", "Sat"].map((day, index) => (
              <span
                key={index}
                className="text-xs font-light text-slate-500 h-[10px] leading-[10px]">
                {day}
              </span>
            ))}
          </div>

          {/* Mobile months - vertical */}
          <div className="flex md:hidden w-8">
            <div className="flex flex-col justify-between text-[10px] text-slate-500">
              {months.map(
                (month, index) =>
                  index % 2 === 0 && (
                    <span key={month} className="h-[10px] leading-[10px]">
                      {month}
                    </span>
                  )
              )}
            </div>
          </div>

          <div className="flex-1">
            <div className="grid md:grid-rows-7 md:grid-flow-col grid-cols-7 grid-flow-row gap-[2px]">
              {datesFromYear.map((week) =>
                week.map((date, dayIndex) => {
                  const level = getContributionLevel(date);
                  return (
                    <TooltipProvider key={\`$\{date}-\${dayIndex}\`}>
                      <Tooltip>
                        <TooltipTrigger>
                          <div
                            className="w-[10px] h-[10px] rounded-sm"
                            style={{
                              backgroundColor:
                                themeColors.default[
                                  \`level\${level}\` as keyof typeof themeColors.default
                                ],
                            }}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          {contributionData[date] && (
                            <p className="text-xs">{getTooltipContent(date)}</p>
                          )}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-end mt-2 place-self-end">
        <span className="text-xs mr-2">Less</span>
        {[0, 1, 2, 3, 4].map((level) => {
          return (
            <div
              key={level}
              style={{
                backgroundColor:
                  themeColors.default[
                    \`level\${level}\` as keyof typeof themeColors.default
                  ],
              }}
              className="w-3 h-3 mx-[1px] rounded-sm"></div>
          );
        })}
        <span className="text-xs ml-2">More</span>
      </div>

      <div className="mt-4">
        <Button onClick={() => addNewCommit()}>Add Commit</Button>
      </div>
    </div>
  );
}

export default ContributionGraphPreview;
`;
