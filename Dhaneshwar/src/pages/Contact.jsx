import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";
import ContactMap from "../components/ContactMap";
import photo15 from "../images/photo15.png";

const Contact = () => {
    return (
        <Layout>

            <PageHero
                title="Start a Conversation"
                description="Connect with our experts to turn your real estate aspirations into reality"
                image={photo15}
                height="h-[460px] sm:h-[560px] lg:h-[640px]"
            />

            <ContactForm />

            <ContactMap />

        </Layout>
    );
};

export default Contact;