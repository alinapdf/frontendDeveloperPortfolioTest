import gitHubWhite from "./../../img/gitHub-white.svg";
import gitHubBlack from "./../../img/gitHub-black.svg";
import "./BtnGitHub.css";
const BtnGitHub = (props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className="btn-outline"
    >
      <img src={gitHubBlack} alt="gitHub" className="project-github" />
      <img
        src={gitHubWhite}
        alt="gitHub"
        className="project-github display-none"
      />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
