import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ProjectSection from "../components/ProjectSection";
import Stats from "../components/Stats";
import Promise from "../components/Promise";
import projects from "../data/projects";

import { useState } from "react";

const Home = () => {
     const [selected, setSelected] = useState(null);

     return (
          <Layout>
               <Hero />
               <ProjectSection
                    projectsData={projects.slice(0, 3)}
                    selected={selected}
                    setSelected={setSelected}
               />
               <Stats />
               <Promise />
          </Layout>
     );
};

export default Home;