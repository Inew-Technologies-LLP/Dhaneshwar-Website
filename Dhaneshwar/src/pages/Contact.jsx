import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";
import ContactMap from "../components/ContactMap";
import photo15 from "../images/photo15.png";

const Contact = () => {
    return (
        <Layout>

            <PageHero
                title="Start the Conversation"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
                image={photo15}
                height="h-[720px]"
            />

            <ContactForm />

            <ContactMap />

        </Layout>
    );
};

export default Contact;