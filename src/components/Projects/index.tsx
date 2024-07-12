import { FC, useMemo } from "react";
import { useProjects } from "../../hooks/use-projects";
import { Project } from "../../models/Project";
import Layout from "../Layout";
import CoffeeMug from "./CoffeeMug";
import "./Projects.css";
import { useSkills } from "../../hooks/use-skills";

type TechnologyPillProps = {
    technology: string;
    variant?: "light" | "dark";
};

const TechnologyPill: FC<TechnologyPillProps> = ({ technology, variant = "dark" }) => {
    const { getSkillByName } = useSkills();

    const hyperLinkableSkill = useMemo(
        () => getSkillByName(technology),
        [getSkillByName, technology]
    );

    return (
        <span
            className={`mr-2 border rounded-full px-2 py-1 ${variant === "dark" ? "border-dark" : ""} ${hyperLinkableSkill ? (variant === "light" ? "hover:bg-light hover:bg-opacity-20 focus:bg-light focus:bg-opacity-20" : "hover:bg-dark hover:bg-opacity-5 focus:bg-dark focus:bg-opacity-5") : ""}`}
        >
            {hyperLinkableSkill === null ? (
                technology
            ) : (
                <a href={`#skill-${hyperLinkableSkill.name}`}>{technology}</a>
            )}
        </span>
    );
};

type ProjectCardProps = {
    project: Project;
};

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="project-card z-0">
            <div className="w-full lg:max-w-[550px] h-[350px] border relative bg-light shadow-md after:absolute after:w-full after:bg-dark after:top-1 after:left-2 after:h-[350px] after:z-[-1]">
                <div className="relative overflow-y-auto sm:overflow-hidden p-5 h-full flex flex-col justify-between">
                    <h3 className="text-center relative z-10 text-2xl pb-3 mt-2 sm:mt-0">
                        {project.name}
                    </h3>

                    {/* Show directly on Mobile */}
                    <div className="w-full h-[200px] sm:h-[270px] order-[-1] sm:order-none">
                        <img
                            className="block w-full h-full rounded-md"
                            src={project.imageUrl}
                            alt={`${project.name} poster`}
                        />
                    </div>

                    {/* Description */}
                    <p className="sm:hidden">{project.description}</p>

                    {/* Technologies Used */}
                    <div className="my-2 sm:hidden">
                        <h4 className="font-bold underline">Technologies:</h4>

                        <div className="flex flex-wrap gap-1 py-1">
                            {project.technologiesUsed.map((technology) => (
                                <TechnologyPill
                                    key={`tech-used-${technology}-${project.name}`}
                                    variant={"dark"}
                                    technology={technology}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Hyperlinks */}
                    <div className="sm:hidden flex self-end gap-5">
                        <a
                            className="px-3 py-1 border border-dark inline-flex gap-1 items-center rounded-md hover:bg-dark hover:bg-opacity-5 focus:bg-dark focus:bg-opacity-5"
                            href={project.deployedLink}
                            target="_blank"
                        >
                            Visit
                            <i className="devicon-cloudflare-plain"></i>
                        </a>
                        <a
                            className="px-3 py-1 border border-dark inline-flex gap-1 items-center rounded-md hover:bg-dark hover:bg-opacity-5 focus:bg-dark focus:bg-opacity-5"
                            href={project.githubLink}
                            target="_blank"
                        >
                            GitHub
                            <i className="devicon-github-original"></i>
                        </a>
                    </div>

                    {/* Overlay for Desktop */}
                    <div className="project-info-overlay hidden sm:block pt-[60px] p-5 text-light w-full h-[350px] overflow-y-auto absolute inset-0 bg-dark opacity-90 translate-y-full">
                        <div className="flex flex-col h-full">
                            <p>{project.description}</p>

                            {/* Technologies */}
                            <div className="mt-2 mb-3">
                                <h4 className="font-bold underline">Technologies:</h4>

                                <div className="flex flex-wrap gap-1 py-1">
                                    {project.technologiesUsed.map((technology) => (
                                        <TechnologyPill
                                            key={`tech-used-${technology}-${project.name}`}
                                            variant={"light"}
                                            technology={technology}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Hyperlinks */}
                            <div className="flex justify-self-end mt-auto self-end gap-5">
                                <a
                                    className="px-3 py-1 border border-light inline-flex gap-1 items-center rounded-md hover:bg-light hover:bg-opacity-20 focus:bg-light focus:bg-opacity-20"
                                    href={project.deployedLink}
                                    target="_blank"
                                >
                                    Visit
                                    <i className="devicon-cloudflare-plain"></i>
                                </a>
                                <a
                                    className="px-3 py-1 border border-light inline-flex gap-1 items-center rounded-md hover:bg-light hover:bg-opacity-20 focus:bg-light focus:bg-opacity-20"
                                    href={project.githubLink}
                                    target="_blank"
                                >
                                    GitHub
                                    <i className="devicon-github-original"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProjectsList = () => {
    const projects = useProjects();

    return (
        <Layout id={"projects"}>
            <h2 className="font-headings font-semibold text-4xl text-center mt-2">Projects</h2>

            <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Programmer with Coffee, not showing on mobile */}
                <div className="hidden lg:block mt-24 lg:col-span-2">
                    <div className="sticky left-0 top-[166px]">
                        <div className="relative w-max">
                            {/* Programmer */}
                            <img
                                className="w-72"
                                src="/images/programmer-desk.png"
                                alt="Cool Programmer"
                            />

                            {/* His Coffee */}
                            <CoffeeMug />
                        </div>
                    </div>
                </div>

                {/* List of Projects */}
                <div className="py-14 flex flex-col gap-10 lg:col-span-3">
                    {projects.map((project, index) => (
                        <ProjectCard key={`project-${index}`} project={project} />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default ProjectsList;
