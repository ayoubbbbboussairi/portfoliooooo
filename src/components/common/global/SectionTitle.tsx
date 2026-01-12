const SectionTitle = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  const animate = true;
  return (
    <h1 className="relative md:text-8xl sm:text-6xl text-5xl mb-24 select-none ease-out font-black text-center w-fit mx-auto">
      <span className="absolute position-center md:size-48 sm:size-32 size-24 bg-[var(--border)] rounded-full z-[-1] opacity-35" />

      {title}
      {description ? (
        <p className="text-lg tracking-wide font-semibold mt-4">
          {description}
        </p>
      ) : null}
    </h1>
  );
};

export default SectionTitle;
