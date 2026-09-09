import { useMemo, useState } from "react";

import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import ProjectFilters from "../components/ProjectFilters";
import ProjectSection from "../components/ProjectSection";

import projects from "../data/projects";
import photo14 from "../images/photo14.png";

const Projects = () => {

    const [type, setType] = useState("All");
    const [status, setStatus] = useState("All");

    const filteredProjects = useMemo(() => {

        return projects.filter((project) => {

            const typeMatch =
                type === "All" || project.type === type;

            const statusMatch =
                status === "All" || project.status === status;

            return typeMatch && statusMatch;

        });

    }, [type, status]);

    return (
        <Layout>

            <PageHero
                title="Our Projects"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
                image={photo14}
            />

            <ProjectFilters
                type={type}
                setType={setType}
                status={status}
                setStatus={setStatus}
            />

            <ProjectSection
                title={
                    type === "All"
                        ? "Our Projects"
                        : type
                }
                subtitle={
                    status === "All"
                        ? "All Projects"
                        : `${status} Projects`
                }
                centered={false}
                projectsData={filteredProjects}
            />

        </Layout>
    );
};

export default Projects;