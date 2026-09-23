import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import AboutStory from "../components/AboutStory";
import AboutValues from "../components/AboutValues";
import BackedBy from "../components/BackedBy";
import Leadership from "../components/Leadership";
import photo7 from "../images/photo7.png";

const About = () => {
    return (
        <Layout>

            <PageHero
                title="About Us"
                image={photo7}
                maxWidth="max-w-[1440px]"
                height="h-[460px] sm:h-[560px] lg:h-[660px]"
            />

            <AboutStory />

            <AboutValues />

            <BackedBy />

            <Leadership />

        </Layout>
    );
};

export default About;