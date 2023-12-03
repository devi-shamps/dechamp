import React from "react";
import { Projects } from "./Projets";

interface ExperienceProps {
    section: number;
    menuOpened: boolean;
}

export const Experience: React.FC<ExperienceProps> = () => {
    return (
        <>
            <Projects />
        </>
    );
};
