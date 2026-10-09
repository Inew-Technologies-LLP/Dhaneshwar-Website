import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ExploreAltura from "../components/ExploreAltura";
import Stats from "../components/Stats";
import Promise from "../components/Promise";

const Home = () => {
     return (
          <Layout>
               <Hero />
               <ExploreAltura />
               <Stats />
               <Promise />
          </Layout>
     );
};

export default Home;