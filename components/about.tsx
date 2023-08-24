"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I've been learning programming for more than two years now, diving into both frontend and backend development.
        My main focus is on Frontend work, especially using React and Redux.
        <br/><br/>
        I've got a bunch of projects built with React and Redux that you can check out on my GitHub.
        <br/><br/>
        Back in university, I completed a course on "Object-Oriented Programming" using C++, which gave me a solid understanding of coding concepts.
        <br/><br/>
        Working with others is something I enjoy – I once led a team of three on a project using tools like Jira and GitHub for task management.
        As the team leader, I assigned tasks, tracked progress, and made sure everything ran smoothly.
        <br/><br/>
        Recently, I tackled a cool personal project where I recreated a live website using React with TypeScript and Redux.
        I designed the user interface to be user-friendly and also made sure all the interactive parts worked.
        <br/><br/>
        I had commercial experience in one Lviv company. There I
        was working in team, creating increment to sites and mobile
        apps and communicated with client.
        <br/><br/>
        I'm excited to use my skills and experience for new challenges.
        My passion for programming and ability to work well with others make me ready for whatever comes next.
      </p>

    </motion.section>
  );
}
