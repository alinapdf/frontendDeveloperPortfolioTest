import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="container header-wrapper">
        <h1 className="header-title">
          <strong>
            Hi, my name is <span>Alina</span>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header-text">
          <p>with passion for learning and creating.</p>
        </div>
        <button className="header-btn">Download CV</button>
      </div>
    </header>
  );
};

export default Header;
