// import { useState } from "react";
import { useEffect } from "react";
// import { useRef } from "react";
import { useLocalStorage } from "../../utils/UseLocalStorage";
import sun from "./../../img/Sun.svg";
import moon from "./../../img/Moon.svg";
import "./BtnDarkMode.css";
import DetectDarkMode from "../../utils/detectDarkMode";
const BtnDarkMode = () => {
  //   const [darkMode, setDarkMode] = useState("light");

  const [darkMode, setDarkMode] = useLocalStorage("darkMode", DetectDarkMode());

  //   const btnRef = useRef(null);

  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
      //   btnRef.current.classList.add("dark-mode-btn-active");
    } else {
      document.body.classList.remove("dark");
      //   btnRef.current.classList.remove("dark-mode-btn-active");
    }
  }, [darkMode]);

  useEffect(() => {
    // проверка темной темы через время суток
    window
      .matchMedia("(prefers-color-scheme:dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.mathces ? "dark" : "light";
        setDarkMode(newColorScheme);
      });
  }, [setDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevState) => {
      return prevState === "light" ? "dark" : "light";
    });
  };

  const btnNormal = "dark-mode-btn";
  const btnActive = "dark-mode-btn dark-mode-btn-active";

  return (
    <button
      //   ref={btnRef}
      className={darkMode === "dark" ? btnActive : btnNormal}
      onClick={toggleDarkMode}
    >
      <img src={sun} alt="light mode" className="dark-mode-btn-icon" />
      <img src={moon} alt="dark mode" className="dark-mode-btn-icon" />
    </button>
  );
};

export default BtnDarkMode;
