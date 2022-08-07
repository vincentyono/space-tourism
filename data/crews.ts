export interface crewType {
  [key: string]: {
    name: string;
    description: string;
    position: string;
    imagePath: string;
    imageAlt: string;
  };
}

export const crews: crewType = {
  "douglas-hurley": {
    name: "Douglas Hurley",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    position: "Commander",
    imagePath: "/static/crew/image-douglas-hurley.webp",
    imageAlt: "Commander Douglas Hurley",
  },
  "mark-shuttleworth": {
    name: "Mark Shuttleworth",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    position: "Mission Specialist",
    imagePath: "/static/crew/image-mark-shuttleworth.webp",
    imageAlt: "Mission Specialist Mark SHuttleworth",
  },
  "victor-glover": {
    name: "Victor Glover",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    position: "Pilot",
    imagePath: "/static/crew/image-victor-glover.webp",
    imageAlt: "Pilot Victor Glover",
  },
  "anousheh-ansari": {
    name: "Anousheh Ansari",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    position: "Flight Engineer",
    imagePath: "/static/crew/image-anousheh-ansari.webp",
    imageAlt: "Flight Engineer Anousheh Ansari",
  },
};
