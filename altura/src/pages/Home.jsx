import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ProjectSection from "../components/ProjectSection";
import Stats from "../components/Stats";
import Promise from "../components/Promise";
import projects from "../data/projects";

const Home = () => {
     return (
          <Layout>
               <Hero />
               <ProjectSection
                    projectsData={projects.slice(0, 3)}
               />
               <Stats />
               <Promise />
          </Layout>
     );
};

export default Home;