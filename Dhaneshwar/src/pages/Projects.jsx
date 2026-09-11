import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import ProjectFilters from "../components/ProjectFilters";
import ProjectSection from "../components/ProjectSection";

import projects from "../data/projects";
import photo14 from "../images/photo14.png";

const Projects = () => {

    const [type, setType] = useState("All");
    const [status, setStatus] = useState("All");
    const [searchParams] = useSearchParams();
    const selectedProjectId = searchParams.get("project");

    const filteredProjects = useMemo(() => {

        return projects.filter((project) => {

            const typeMatch =
                type === "All" || project.type === type;

            const statusMatch =
                status === "All" || project.status === status;

            return typeMatch && statusMatch;

        });

    }, [type, status]);

    useEffect(() => {
        if (!selectedProjectId) return;

        let cancelled = false;

        const scrollToProject = async () => {
            const projectElement = document.getElementById(`project-${selectedProjectId}`);

            if (!projectElement) return;

            const images = Array.from(projectElement.querySelectorAll("img"));
            await Promise.all(images.map((image) => image.decode().catch(() => undefined)));

            if (document.fonts?.ready) {
                await document.fonts.ready;
            }

            requestAnimationFrame(() => {
                if (cancelled) return;

                const header = document.querySelector("header");
                const headerHeight = header?.getBoundingClientRect().height ?? 0;
                const targetTop = window.scrollY + projectElement.getBoundingClientRect().top;

                window.scrollTo({
                    top: Math.max(0, targetTop - headerHeight),
                    behavior: "smooth",
                });
            });
        };

        scrollToProject();

        return () => {
            cancelled = true;
        };
    }, [selectedProjectId, filteredProjects]);

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
                expanded
            />

        </Layout>
    );
};

export default Projects;