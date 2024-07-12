import Header from "./components/Header";
import Introduction from "./components/Introduction";
import ProjectsList from "./components/Projects";
import Skills from "./components/Skills";
import { ProjectsProvider } from "./hooks/use-projects";
import { SkillsProvider } from "./hooks/use-skills";

function App() {
    return (
        <>
            <Header />

            {/* Contents */}
            <section className="pt-[165px]">
                <Introduction />

                <SkillsProvider>
                    <Skills />

                    <ProjectsProvider>
                        <ProjectsList />
                    </ProjectsProvider>
                </SkillsProvider>
            </section>
        </>
    );
}

export default App;
