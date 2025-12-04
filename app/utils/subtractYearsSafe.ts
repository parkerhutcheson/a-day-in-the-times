// Safely subtract N years from a date (auto-corrects Feb 29 → Mar 1, etc.)
export function subtractYearsSafe(date: Date, years: number): Date {
    const newDate = new Date(date);
    newDate.setFullYear(date.getFullYear() - years);
    return newDate;
}
