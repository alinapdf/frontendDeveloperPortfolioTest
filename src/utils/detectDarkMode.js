const DetectDarkMode = () => {
  // проверка темной темы через систему
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme:dark)").matches
  ) {
    return "dark";
  }
  return "light";
};

export default DetectDarkMode;
