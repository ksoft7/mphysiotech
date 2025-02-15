// utils.js
export const truncateString = (text, limit = 12) => {
  if (!text) return "";
  if (text.length > limit) {
    return text.substring(0, limit) + "...";
  }
  return text;
};

export const truncateStringEmpty = (text, limit = 12) => {
  if (!text) return "";
  if (text.length > limit) {
    return text.substring(0, limit) + "";
  }
  return text;
};

export const truncateCombined = (part1, part2, limit = 12) => {
  const combined = `${part1} ${part2}`.trim(); // Concatenate with a space
  return truncateString(combined, limit);
};
