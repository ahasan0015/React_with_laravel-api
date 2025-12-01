// utils/formatBDDate.ts
export const formatBDDate = (dateString: string): string => {
  if (!dateString) return "";

  // Convert UTC string to Date
  const date = new Date(dateString + " UTC");

  // Add +6 hours for Bangladesh (UTC+6)
  const bdTime = new Date(date.getTime() + 6 * 60 * 60 * 1000);

  // Format date: 26 Oct, Sunday
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    weekday: "long",
  };

  const formatted = bdTime.toLocaleDateString("en-GB", options);
  const parts = formatted.split(" ");
  return `${parts[0]} ${parts[1]}, ${parts[2]}`;
};
