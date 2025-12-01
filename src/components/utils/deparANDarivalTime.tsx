// departure এবং arrival time নিয়ে duration হিসাব করবে
export const calculateDuration = (departure?: string, arrival?: string): string => {
  if (!departure || !arrival) return "";

  const dep = new Date(departure + " UTC"); // departure time
  const arr = new Date(arrival + " UTC");   // arrival time

  let diffMs = arr.getTime() - dep.getTime(); // মিলিসেকেন্ডে পার্থক্য
  if (diffMs < 0) diffMs += 24 * 60 * 60 * 1000; // পরের দিনের ফ্লাইট হলে ঠিক করা

  const hours = Math.floor(diffMs / (1000 * 60 * 60)); // ঘণ্টা
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60)); // মিনিট

  return `${hours}h ${minutes}m`; // ফরম্যাট: 1h 30m
};
