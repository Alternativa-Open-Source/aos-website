export const joining = (acc, curr, index) => {
    return index === 0 ? [curr] : [...acc, ", ", curr];
  }