export const pathNameIncludesString = (pathname: string, keyword: string) => {
  if (pathname.split("/").includes(keyword)) return true;
  else false;
};
