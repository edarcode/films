export const normalize = (txt: string) => {
  return txt.toLowerCase().replace(/[¿?]/g, "").split(" ").join("_");
};
