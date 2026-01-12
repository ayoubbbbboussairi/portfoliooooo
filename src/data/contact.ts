/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  faFacebook as facebook,
  faGithub as github,
  faLinkedin as linkedin,
  faInstagram as instagram,
  faYoutube as youtube,
  faSquareUpwork as upwork,
  faXTwitter as x,
  faDribbble as dribble,
  faBehance as behance,
} from "@fortawesome/free-brands-svg-icons";

/*
  Available Social media icons
  |
  1 - facebook
  2 - github
  3 - linkedin
  4 - instagram
  5 - youtube
  6 - upwork
  7 - dribble
  8 - x
  9 - behance
*/

// ==================[ Social Links ]================== //
export const social_links = [
  // 1
  {
    Icon: dribble,
    link: "https://dribble.com",
    color: "pink",
  },

  // 2
  {
    Icon: github,
    link: "https://github.com/ayoubbbbboussairi",
    color: "black",
  },

  // 3
  {
    Icon: linkedin,
    link: "https://www.linkedin.com/in/ayoub-boussairi/",
    color: "blue",
  },

  // 4
  {
    Icon: x,
    link: "https://x.com",
    color: "black",
  },

  // 5
  {
    Icon: instagram,
    link: "https://instagram.com",
    color: "fuchsia",
  },

  // 6
  {
    Icon: behance,
    link: "https://behance.com",
    color: "blue",
  },

  // 7
  {
    Icon: upwork,
    link: "https://upwork.com",
    color: "green",
  },

  // 8
  {
    Icon: youtube,
    link: "https://youtube.com",
    color: "red",
  },
] as const;
//

// ==================[ Contact Info ]================== //
// ==================[ Contact Info ]================== //
export const contact_info = [
  // 1
  {
    title: "Phone Number",
    info: "+33 6 69 10 06 31",
  },

  // 2
  {
    title: "Email",
    info: "ayoubboussairi4@gmail.com",
  },

  // 3
  {
    title: "Location",
    info: "Paris, France",
  },
] as const;
//
