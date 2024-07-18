import Header from "./../components/header/Header";
import ProjectHome from "../components/project/ProjectHome";
import { projects } from "../helpers/projectsList";
const Home = () => {
  return (
    <>
      {" "}
      <Header />
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects-list">
            {projects.map((project, index) => {
              return (
                <ProjectHome
                  key={project.id}
                  title={project.title}
                  img={project.img}
                  index={index}
                />
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
