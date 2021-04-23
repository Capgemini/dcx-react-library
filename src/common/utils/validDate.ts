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

  let d = new Date(year, month, day);

  let yearMatches = d.getUTCFullYear() === year;
  let monthMatches = d.getUTCMonth() === month;
  let dayMatches = d.getDate() === day;
  return yearMatches && monthMatches && dayMatches;
}
