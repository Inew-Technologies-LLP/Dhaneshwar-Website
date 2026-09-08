import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import AboutStory from "../components/AboutStory";
import AboutValues from "../components/AboutValues";
import BackedBy from "../components/BackedBy";
import Leadership from "../components/Leadership";
import AboutQuote from "../components/AboutQuote";

const About = () => {
    return (
        <Layout>

            <PageHero
                title="About Us"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
                image="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1800"
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