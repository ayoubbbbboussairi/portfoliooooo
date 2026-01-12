"use client";
import { goals } from "@/data/about";
import CountTitle from "../global/CountTitle";

const Goal = ({
  goal,
  description,
  idx,
}: {
  goal: string;
  description: string;
  idx: number;
}) => {
  return (
    <li className=" flex items-start sm:flex-row flex-col sm:gap-8 gap-4 group">
      <CountTitle idx={idx} className="text-2xl" />

      <div className="space-y-4">
        <h2 className="text-2xl">{goal}</h2>
        <p className="text-[var(--text-tertiary)]">{description}</p>
      </div>
    </li>
  );
};

const Goals = () => {
  return (
    <ul className="space-y-8">
      {goals.map((item, i) => (
        <Goal key={i} idx={i} {...item} />
      ))}
    </ul>
  );
};

export default Goals;
