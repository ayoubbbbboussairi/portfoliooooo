import {
  AboutSectionOptions,
  HomeBackgroundOptions,
  ProjectCardOptions,
  ProjectImageAspectOptions,
} from "@/context/ThemeVariantsContext";

// ==================[ App Info ]================== //
export const app_info = {
  title: "Ayoub Boussairi - Ingénieur Sûreté Nucléaire",

  description:
    "Portfolio d'Ayoub Boussairi, Ingénieur spécialisé en Sûreté Nucléaire, Simulation et Analyse de Risques. Découvrez mes projets et mon parcours en ingénierie et recherche.",
} as const;
//

// ==================[ theme configuration ]================== //

// -------[ custom cursor ]------- //
export const custom_cursor = true;
//
//
//
// -------[ theme ]------- //
export const theme_panel = true;
export const variants_panel = true;
export const dark_theme = true;
//
//
//
// -------[ background ]------- //
/* options:
1 - hex
2 - grid
3 - no
*/
export const home_background: HomeBackgroundOptions = "hex";
export const landing_background_image = "";
//
//
//
// -------[ smooth scrolling & scrollbar ]------- //
export const smooth_scrolling = true;
export const smooth_scrolling_duration = 2; // in seconds
export const scrollbar = true;
//
//
//
// -------[ about section ]------- //
/* options:
1 - default
2 - cards
*/
export const about_section: AboutSectionOptions = "default";
//
//
//
// -------[ portfolio section ]------- //
/* options:
1 - stacked-cards
2 - cards
*/
export const project_card_option: ProjectCardOptions = "stacked-cards";

/* options:
1 - video
2 - square
*/
export const project_image_aspect: ProjectImageAspectOptions = "video";
//
//
//
// -------[ count title ]------- //
export const count_title = true;
