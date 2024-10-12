export const joining = (acc, curr, index) => {
  return index === 0 ? [curr] : [...acc, ", ", curr];
};

export const unique = (array) => [...new Set(array)]
