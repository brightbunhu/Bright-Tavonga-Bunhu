/**
 * Truncates a string to a maximum number of words
 * @param {string} text - The text to truncate
 * @param {number} maxWords - Maximum number of words (default: 10)
 * @returns {string} - Truncated text
 */
export const truncateWords = (text, maxWords = 10) => {
  if (!text) return "";
  const words = text.split(" ");
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "...";
};

