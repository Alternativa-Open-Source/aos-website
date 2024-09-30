export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(".", "-")
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
};
