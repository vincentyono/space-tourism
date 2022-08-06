export type destinationType = {
  [key: string]: {
    destination: string;
    imagePath: string;
    description: string;
    averageDistance: string;
    travelTime: string;
  };
};

export const destinations: destinationType = {
  moon: {
    destination: "MOON",
    imagePath: "/static/destination/image-moon.webp",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    averageDistance: "384,400 KM",
    travelTime: "3 DAYS",
  },
  mars: {
    destination: "MARS",
    imagePath: "/static/destination/image-mars.webp",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    averageDistance: "225 MIL. KM",
    travelTime: "9 MONTHS",
  },
  europa: {
    destination: "EUROPA",
    imagePath: "/static/destination/image-europa.webp",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    averageDistance: "628 MIL. KM",
    travelTime: "3 YEARS",
  },
  titan: {
    destination: "TITAN",
    imagePath: "/static/destination/image-titan.webp",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    averageDistance: "1.6 BIL. KM",
    travelTime: "7 YEARS",
  },
};
