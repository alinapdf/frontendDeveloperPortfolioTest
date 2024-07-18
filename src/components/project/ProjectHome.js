import "./ProjectHome.css";
import { NavLink } from "react-router-dom";
const ProjectHome = (props) => {
  return (
    <li className="projects-list-item">
      <NavLink
        to={`/project/${props.index}`}
        className="projects-list-item-link"
      >
        <img src={props.img} alt="01" className="project-img" />
        <h3 className="project-title">{props.title}</h3>
      </NavLink>
    </li>
  );
};

export default ProjectHome;
