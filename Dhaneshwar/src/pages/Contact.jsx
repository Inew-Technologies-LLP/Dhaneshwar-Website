import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";
import ContactMap from "../components/ContactMap";

const Contact = () => {
    return (
        <Layout>

            <PageHero
                title="Start the Conversation"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
                image="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1800"
            />

            <ContactForm />

            <ContactMap />

        </Layout>
    );
};

export default Contact;