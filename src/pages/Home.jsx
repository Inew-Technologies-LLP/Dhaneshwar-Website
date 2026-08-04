import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Stats from "../components/Stats";
import Promise from "../components/Promise";

const Home = () => {
     return (
          <Layout>
               <Hero />
               <Projects />
               <Stats />
               <Promise />
          </Layout>
     );
};

export default Home;