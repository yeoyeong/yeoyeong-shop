export const stringToNumber = (str: string) => {
  const num = Number(str.replace(/,/g, ""));
  return num;
};
