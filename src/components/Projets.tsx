import React, {useRef} from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';
import {Image, Text, useScroll} from '@react-three/drei';

interface ProjectProps {
    project: {
        title: string;
        url: string;
        image: string;
        description: string;
    };
}
export const projects = [
    {
        title: "AWeekOfCulture",
        url: "https://www.youtube.com/watch?v=LooODvrYXzE",
        image: "projects/2.jpg",
        description: "OPEN PROJECT",
    },
    {
        title: "GSB",
        url: "https://www.youtube.com/watch?v=LooODvrYXzE",
        image: "projects/2.jpg",
        description: "Educated project, Business manager",
    },
    {
        title: "IDon'tKnow",
        url: "https://www.youtube.com/watch?v=LooODvrYXzE",
        image: "projects/2.jpg",
        description: "I don't fuc***g know what is it!",
    },
    {
        title: "IDon'tKnow",
        url: "https://www.youtube.com/watch?v=LooODvrYXzE",
        image: "projects/2.jpg",
        description: "I don't fuc***g know what is it!",
    },
    {
        title: "IDon'tKnow",
        url: "https://www.youtube.com/watch?v=LooODvrYXzE",
        image: "projects/2.jpg",
        description: "I don't fuc***g know what is it!",
    },
    {
        title: "IDon'tKnow",
        url: "https://www.youtube.com/watch?v=LooODvrYXzE",
        image: "projects/2.jpg",
        description: "I don't fuc***g know what is it!",
    },
    {
        title: "IDon'tKnow",
        url: "https://www.youtube.com/watch?v=LooODvrYXzE",
        image: "projects/2.jpg",
        description: "I don't fuc***g know what is it!",
    },
    {
        title: "IDon'tKnow",
        url: "https://www.youtube.com/watch?v=LooODvrYXzE",
        image: "projects/2.jpg",
        description: "I don't fuc***g know what is it!",
    },
];

const Project: React.FC<ProjectProps> = ({ project }) => {
    return (
        <group>
            <Image scale={[9, 5.5]}
                   url={project.image}
                   toneMapped={false}
                   position-y={0.3}
            />
            <Text maxWidth={2} fontSize={0.8} color="white" position={[0, 1, 0.5]}>
                {project.title}
            </Text>
            <Text maxWidth={2} fontSize={0.1} color={'white'} position={[0, 0, 0.4]}>
                {project.description}
            </Text>
        </group>
    );
};

export const Projects: React.FC = () => {
    const { viewport } = useThree();
    const ref = useRef<any>();
    const scroll = useScroll();
    useFrame(() => (ref.current.position.x = -scroll.offset * 100));

    return <group position-x={viewport.left} ref={ref} >
        {
            projects.map((project, index) => (
                <motion.group key={"project_" + index} position={[index * 11.5, index * -3.6, -1]}>
                    <Project project={project} />
                </motion.group>
            ))
        }
    </group>;
};