export const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

export const capitalizeWords = (text) =>
  text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
