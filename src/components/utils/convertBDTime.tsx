export const formatBDTime = (dateString?: string): string => {
  if (!dateString) return ""; // handle undefined safely

  // Convert UTC string to Date
  const date = new Date(dateString + " UTC");

  // Add +6 hours for Bangladesh time
  const bdTime = new Date(date.getTime() + 6 * 60 * 60 * 1000);

  // Format time: HH:MM AM/PM
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  return bdTime.toLocaleTimeString("en-GB", options);
};
