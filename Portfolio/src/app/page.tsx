import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { FlagshipProject } from "@/components/sections/FlagshipProject";
import { AppliedAIProjects } from "@/components/sections/AppliedAIProjects";
import { WebProjects } from "@/components/sections/WebProjects";
import { LearningAndAchievements } from "@/components/sections/LearningAndAchievements";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      
      <FlagshipProject />
      <AppliedAIProjects />
      <WebProjects />

      <LearningAndAchievements />

      <Contact />
    </div>
  );
}
