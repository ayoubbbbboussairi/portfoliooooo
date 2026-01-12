"use client";
import Panel from "./Panel";
import { Dispatch, SetStateAction, useState } from "react";
import { Settings2 } from "lucide-react";
import {
  aboutSectionOptions,
  homeBackgroundOptions,
  projectCardOptions,
  projectImageAspectOptions,
  useThemeVariantsContext,
} from "@/context/ThemeVariantsContext";
import Switch from "../Switch";

type VariantsPanelSectionProps<T extends string> = {
  title: string;
  value: T;
  options: T[];
  setOption: Dispatch<SetStateAction<T>>;
};

const VariantsPanelSection = <T extends string>({
  title,
  value,
  options,
  setOption,
}: VariantsPanelSectionProps<T>) => {
  return (
    <div className="space-y-2">
      <h2 className="text-sm font-light capitalize">{title}</h2>
      <select
        className="text-primary p-2 w-full border border-[var(--text-primary)]"
        value={value}
        onChange={(e) => setOption(e.target.value as T)}
      >
        {options.map((o, i) => (
          <option key={i} value={o} className="text-black">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
};

const VariantsPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    homeBackground,
    setHomeBackground,

    aboutSection,
    setAboutSection,

    projectCard,
    setProjectCard,

    projectImageAspect,
    setProjectImageAspect,

    isSmoothScrolling,
    setIsSmoothScrolling,

    isCustomCursor,
    setIsCustomCursor,

    isScrollbar,
    setIsScrollbar,
  } = useThemeVariantsContext();

  return (
    <Panel
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      Icon={Settings2}
      className="right-0 top-2 z-[41] w-60"
    >
      <div className="space-y-4">
        <VariantsPanelSection
          title="home background"
          value={homeBackground}
          options={homeBackgroundOptions}
          setOption={setHomeBackground}
        />

        <VariantsPanelSection
          title="about section"
          value={aboutSection}
          options={aboutSectionOptions}
          setOption={setAboutSection}
        />

        <VariantsPanelSection
          title="project variants"
          value={projectCard}
          options={projectCardOptions}
          setOption={setProjectCard}
        />

        <VariantsPanelSection
          title="project image aspect"
          value={projectImageAspect}
          options={projectImageAspectOptions}
          setOption={setProjectImageAspect}
        />

        <div className="flex gap-3">
          <Switch
            label="custom cursor"
            isOn={isCustomCursor}
            onToggle={() => setIsCustomCursor(!isCustomCursor)}
          />
        </div>

        <div className="flex gap-3">
          <Switch
            label="smooth scrolling"
            isOn={isSmoothScrolling}
            onToggle={() => setIsSmoothScrolling(!isSmoothScrolling)}
          />

          <Switch
            label="scrollbar"
            isOn={isScrollbar}
            onToggle={() => setIsScrollbar(!isScrollbar)}
          />
        </div>
      </div>
    </Panel>
  );
};

export default VariantsPanel;
