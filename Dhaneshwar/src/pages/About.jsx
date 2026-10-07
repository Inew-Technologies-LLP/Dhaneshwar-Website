import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import AboutStory from "../components/AboutStory";
import AboutValues from "../components/AboutValues";
import BackedBy from "../components/BackedBy";
import Leadership from "../components/Leadership";
import about_hero from "../images/about_hero.jpg";

const About = () => {
    return (
        <Layout>

            <PageHero
                title="Places That Become Part of Life."
                description="Thoughtfully created for the way people live, grow and connect."
                image={about_hero}
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