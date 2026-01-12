"use client";
import { skills } from "@/data/about";

const Skills = () => {
  return (
    <div className="flex flex-col gap-8">
      {skills.map((item, i) => (
        <div key={i}>
          <div className="flex justify-between items-center mb-3 font-[500]">
            <h3>{item.skill}</h3>
            <span className="font-mono text-gradient text-base">
              {item.progress}%
            </span>
          </div>
          <div className="w-full relative overflow-hidden h-2 bg-[var(--border-secondary)] rad">
            <div
              className="absolute h-full ease-in-out origin-left rad background-gradient "
              style={{ width: `${item.progress}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
