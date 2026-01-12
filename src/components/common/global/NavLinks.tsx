"use client";
import {
  Dock,
  DockIcon,
  DockItem,
  DockLabel,
} from "@/components/motion-primitives/dock";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon as FAI } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFlask,
  faHome,
  faLayerGroup,
  faList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { Magnetic } from "@/components/motion-primitives/magnetic";

const NavLinks = () => {
  const scrollTo = useScrollToSection();

  const [show, setShow] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 200) setShow(true);
      else setShow(false);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const sections = [
    { name: "about-me", Icon: faUser },
    { name: "services", Icon: faList },
    { name: "experience", Icon: faFlask },
    { name: "portfolio", Icon: faLayerGroup },
    { name: "contact", Icon: faEnvelope },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed z-30 bottom-0 left-1/2 max-w-full -translate-x-1/2 duration",
          show ? "-translate-y-4" : "translate-y-full"
        )}
      >
        <Dock className="items-end pb-3 hover:backdrop-blur-0 hover:bg-[var(--bg-primary)] dark:hover:bg-[var(--bg-primary)] bg-[#bbb]/25 dark:bg-[#666]/25 backdrop-blur-lg rounded-full duration border border-[var(--border)]">
          {sections.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <DockItem
                key={idx}
                onClick={() => scrollTo(item.name.toLowerCase())}
                className="aspect-square rounded-full transition-colors duration group bg-[var(--bg-secondary)] hover:bg-[var(--bg-primary-inverse)] flex-center border border-[var(--border)]"
              >
                <DockLabel className="!bg-[var(--bg-primary-inverse)] !text-[var(--text-primary-inverse)] uppercase border-none">
                  {item.name.split("-").join(" ")}
                </DockLabel>
                <DockIcon className="text-[var(--text-primary)] group-hover:text-[var(--text-primary-inverse)] duration">
                  <FAI icon={Icon} />
                </DockIcon>
              </DockItem>
            );
          })}
        </Dock>
      </nav>

      <div
        className={cn(
          "fixed bottom-0 right-4 size-16 flex-center  border border-[var(--border)] z-40 cursor-pointer group rounded-full background-blurry duration",
          show ? "sm:-translate-y-4 -translate-y-24" : "translate-y-full"
        )}
        onClick={() => scrollTo("home")}
        aria-label="back to home section"
      >
        <Magnetic>
          <div className="bg-[var(--bg-secondary)] rounded-full size-10 group-hover:size-16 dark:bg-[var(--bg-primary)] group-hover:bg-[var(--bg-primary-inverse)]  flex-center border border-[var(--border)] duration">
            <FAI
              icon={faHome}
              className="text-primary group-hover:text-[var(--text-primary-inverse)] duration"
            />

            <div className="absolute top-0 group-hover:opacity-100 opacity-0 -translate-y-6 rounded-lg px-2 py-0.5 text-xs !bg-[var(--bg-primary-inverse)] !text-[var(--text-primary-inverse)] border-none duration uppercase">
              home
            </div>
          </div>
        </Magnetic>
      </div>
    </>
  );
};

export default NavLinks;
