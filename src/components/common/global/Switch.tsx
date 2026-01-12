type SwitchProps = {
  isOn?: boolean;
  onToggle?: () => void;
  label?: string;
};

const Switch = ({ isOn = false, onToggle, label }: SwitchProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[var(--text-secondary)] text-sm font-light capitalize">
        {label}
      </label>
      <div
        className={`relative inline-flex items-center h-6 w-12 cursor-pointer ${
          isOn ? "bg-[var(--main)]" : "bg-[var(--bg-secondary)]"
        } rounded-full transition-colors duration`}
        onClick={onToggle}
      >
        <span
          className={`absolute top-0.5 left-0.5 h-5 w-5 bg-[var(--text-primary)] rounded-full shadow-md duration ${
            isOn ? "translate-x-6 bg-white" : "translate-x-0"
          }`}
        ></span>
      </div>
    </div>
  );
};

export default Switch;
