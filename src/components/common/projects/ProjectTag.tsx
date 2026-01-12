const ProjectTag = ({ tag }: { tag: string }) => {
  return (
    <span className="rounded-full capitalize bg-[var(--bg-primary-inverse)] text-[var(--text-primary-inverse)] text-sm text-nowrap font-[300] py-2 px-4">
      {tag}
    </span>
  );
};

export default ProjectTag;
