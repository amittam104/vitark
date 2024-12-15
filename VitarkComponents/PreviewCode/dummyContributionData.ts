import { ContributionData } from "./ContributionGraphPreview";

// Helper function to generate a random contribution count based on level
const getRandomCount = (level: 0 | 1 | 2 | 3 | 4): number => {
  switch (level) {
    case 0:
      return 0;
    case 1:
      return Math.floor(Math.random() * 2) + 1; // 1-2
    case 2:
      return Math.floor(Math.random() * 3) + 2; // 3-5
    case 3:
      return Math.floor(Math.random() * 3) + 4; // 6-8
    case 4:
      return Math.floor(Math.random() * 2) + 7; // 9-10
  }
};

// Generate data for a specific date with a given level
const generateDayData = (
  date: string,
  level: 0 | 1 | 2 | 3 | 4
): ContributionData => ({
  date,
  level,
  count: getRandomCount(level),
});

const todayDate = new Date().getDate();

// Generate contribution data for the year
const generateYearData = () => {
  const data: Record<string, ContributionData> = {};

  // Generate data for each month until December 13, 2024
  for (let month = 0; month < 12; month++) {
    const monthStr = String(month + 1).padStart(2, "0");
    const daysInMonth = month === 11 ? todayDate - 1 : 30; // Only up to Dec 15 in December

    // Generate entries for most days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      // Skip some random days (about 20% of days) to create gaps
      if (Math.random() > 0.9) continue;

      const dayStr = String(day).padStart(2, "0");
      const date = `2024-${monthStr}-${dayStr}`;

      // Randomly assign levels with weighted probability
      let level: 0 | 1 | 2 | 3 | 4;
      const rand = Math.random();
      if (rand < 0.1) level = 0; // 10% chance
      else if (rand < 0.3) level = 1; // 20% chance
      else if (rand < 0.6) level = 2; // 30% chance
      else if (rand < 0.85) level = 3; // 25% chance
      else level = 4; // 15% chance

      data[date] = generateDayData(date, level);
    }
  }

  return data;
};

// Generate and export the dummy data
export const dummyContributionData = generateYearData();
