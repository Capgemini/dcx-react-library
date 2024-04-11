/**
 * It will check a valid date given day.month and year
 * @param day
 * @param month
 * @param year
 * @returns
 */
export function validateDateString(day: number, month: number, year: number) {
  day = Number(day);
  month = Number(month) - 1; //bloody 0-indexed month
  year = Number(year);

  const d = new Date(year, month, day);

  const yearMatches = d.getUTCFullYear() === year;
  const monthMatches = d.getUTCMonth() === month;
  const dayMatches = d.getDate() === day;
  return yearMatches && monthMatches && dayMatches;
}
