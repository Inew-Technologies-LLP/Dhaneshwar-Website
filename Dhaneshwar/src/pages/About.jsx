import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import AboutStory from "../components/AboutStory";
import AboutValues from "../components/AboutValues";
import BackedBy from "../components/BackedBy";
import Leadership from "../components/Leadership";
import AboutQuote from "../components/AboutQuote";
import photo7 from "../images/photo7.png";

const About = () => {
    return (
        <Layout>

            <PageHero
                title="About Us"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
                image={photo7}
                maxWidth="max-w-[1440px]"
            />

            <AboutStory />

            <AboutValues />

            <BackedBy />

            <Leadership />

            <AboutQuote />

        </Layout>
    );
};

export default About;