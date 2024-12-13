function ContributionGraphPreview() {
  const themeColors = {
    grass: {
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
  const currentYear = new Date().getFullYear();

  function getMonthLabels() {
    return months.map((month, index) => {
      const firstDay = new Date(currentYear, index, 1);
      const lastDay = new Date(currentYear, index + 1, 0);

      const firstWeekIndex = Math.floor(
        (firstDay.getTime() - new Date(currentYear, 0, 1).getTime()) /
          (7 * 24 * 60 * 60 * 1000)
      );

      const lastWeekIndex = Math.floor(
        (lastDay.getTime() - new Date(currentYear, 0, 1).getTime()) /
          (7 * 24 * 60 * 60 * 1000)
      );

      const colSpan = lastWeekIndex - firstWeekIndex + 1;

      return { name: month, colSpan, startWeek: firstWeekIndex };
    });
  }

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

  const monthLabels = getMonthLabels();
  const datesFromYear = getDatesInYear();

  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-lg flex flex-col items-start p-12">
      <div className="w-full mb-8">
        <table className="w-full">
          <thead className="w-full">
            <tr className="">
              <td className="text-xs p-1">&nbsp;</td>
              {monthLabels.map((month) => {
                return (
                  <td
                    key={month.name}
                    colSpan={month.colSpan}
                    className="text-xs text-center">
                    {month.name}
                  </td>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {[0, 1, 2, 3, 4, 5, 6].map((day, dayIndex) => {
              return (
                <tr key={dayIndex} className="">
                  <td className="text-xs font-light text-slate-500 text-left pr-2">
                    {
                      ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
                        dayIndex
                      ]
                    }
                  </td>
                  {datesFromYear.map((week, weekIndex) => {
                    return (
                      <td
                        key={weekIndex}
                        className="w-3 h-3 rounded-sm bg-gray-300 "
                        title={week[dayIndex]}></td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
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
                  themeColors.grass[
                    `level${level}` as keyof typeof themeColors.grass
                  ],
              }}
              className="w-3 h-3 mx-[1px] rounded-sm"></div>
          );
        })}
        <span className="text-xs ml-2">More</span>
      </div>
    </div>
  );
}

export default ContributionGraphPreview;
