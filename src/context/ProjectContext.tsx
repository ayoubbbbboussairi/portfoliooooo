"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type ProjectContextProps = {
  isOpenProject: boolean;
  setIsOpenProject: React.Dispatch<React.SetStateAction<boolean>>;
  projectIdx: number;
  setProjectIdx: React.Dispatch<React.SetStateAction<number>>;
  projectImageIdxMap: Record<number, number>;
  setProjectImageIdx: (projectIdx: number, imageIdx: number) => void;
};

export const ProjectContext = createContext({} as ProjectContextProps);

export const useProjectContext = () => useContext(ProjectContext);

export const ProjectContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isOpenProject, setIsOpenProject] = useState(false);
  const [projectIdx, setProjectIdx] = useState<number>(0);

  const [projectImageIdxMap, setProjectImageIdxMap] = useState<
    Record<number, number>
  >({});

  const setProjectImageIdx = (projectIdx: number, imageIdx: number) => {
    setProjectImageIdxMap((p) => ({
      ...p,
      [projectIdx]: imageIdx,
    }));
  };

  useEffect(() => {
    if (isOpenProject) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "auto";
  }, [isOpenProject]);

  return (
    <ProjectContext.Provider
      value={{
        isOpenProject,
        setIsOpenProject,
        projectIdx,
        setProjectIdx,
        projectImageIdxMap,
        setProjectImageIdx,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContext;
