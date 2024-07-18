import sun from "./../../img/Sun.svg";
import moon from "./../../img/Moon.svg";
import "./BtnDarkMode.css";
const BtnDarkMode = () => {
  const toggleDarkMode = () => {
    console.log("ooo");
  };
  return (
    <button className="dark-mode-btn" onClick={toggleDarkMode}>
      <img src={sun} alt="light mode" className="dark-mode-btn-icon" />
      <img src={moon} alt="dark mode" className="dark-mode-btn-icon" />
    </button>
  );
};

export default BtnDarkMode;
