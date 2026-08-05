import { useMemo, useState, useEffect } from "react";

import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import ProjectFilters from "../components/ProjectFilters";
import ProjectSection from "../components/ProjectSection";
import projects from "../data/projects";

const Projects = () => {

    const [type, setType] = useState("All");
    const [status, setStatus] = useState("All");
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        setSelected(null);
    }, [type, status]);

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
                image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800"
            />

            <ProjectFilters
                type={type}
                setType={setType}
                status={status}
                setStatus={setStatus}
            />

            <ProjectSection
                title={type === "All" ? "Our Projects" : type}
                subtitle={
                    status === "All"
                        ? "All Projects"
                        : `${status} Projects`
                }
                centered={false}
                projectsData={filteredProjects}
                selected={selected}
                setSelected={setSelected}
            />

        </Layout>

    );

};

export default Projects;