export const COLOR_OPTIONS = [
  "blue",
  "teal",
  "green",
  "cyan",
  "orange",
  "pink",
  "purple",
  "fuchsia",
  "red",
  "yellow",
  "lime",
  "black",
] as const;

export type ColorType = (typeof COLOR_OPTIONS)[number];

export const COLORS = {
  blue: "#3b82f6",
  teal: "#14b8a6",
  green: "#22c55e",
  cyan: "#06b6d4",
  orange: "#f97316",
  pink: "#ec4899",
  purple: "#a855f7",
  fuchsia: "#d946ef",
  red: "#ef4444",
  yellow: "#eab308",
  lime: "#84cc16",
  black: "#000",
};

export const LIGHT_COLORS = {
  blue: "#3b82f620",
  teal: "#14b8a620",
  green: "#22c55e20",
  cyan: "#06b6d420",
  orange: "#f9731620",
  pink: "#ec489920",
  purple: "#a855f720",
  fuchsia: "#d946ef20",
  red: "#ef444420",
  yellow: "#eab30820",
  lime: "#84cc1620",
  black: "#00000020",
};

export const CURSOR_COLORS = {
  blue: "#60a5fa", // done
  teal: "#2dd4bf",
  green: "#4ade80",
  cyan: "#22d3ee",
  orange: "#fb923c",
  pink: "#f472b6",
  purple: "#c084fc",
  fuchsia: "#e879f9",
  red: "#f87171",
  yellow: "#facc15",
  lime: "#a3e635",
  black: "",
};

export const HEAVY_COLORS = {
  blue: "#172554",
  teal: "#042f2e",
  green: "#052e16",
  cyan: "#083344",
  orange: "#431407",
  pink: "#500724",
  purple: "#3b0764",
  fuchsia: "#4a044e",
  red: "#450a0a",
  yellow: "#422006",
  lime: "#1a2e05",
  black: "#000",
};
