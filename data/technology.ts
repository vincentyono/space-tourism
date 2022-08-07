export interface technologyType {
  [key: string]: {
    technology: string;
    description: string;
    imagePortraitPath: string;
    imageLandscapePath: string;
    imageAlt: string;
  };
}

export const technologies: technologyType = {
  "launch-vehicle": {
    technology: "Launch Vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    imagePortraitPath: "/static/technology/image-launch-vehicle-portrait.jpg",
    imageLandscapePath: "/static/technology/image-launch-vehicle-landscape.jpg",
    imageAlt: "launch vehicle",
  },
  spaceport: {
    technology: "Spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    imagePortraitPath: "/static/technology/image-spaceport-portrait.jpg",
    imageLandscapePath: "/static/technology/image-spaceport-landscape.jpg",
    imageAlt: "spaceport",
  },
  "space-capsule": {
    technology: "Space Capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    imagePortraitPath: "/static/technology/image-space-capsule-portrait.jpg",
    imageLandscapePath: "/static/technology/image-space-capsule-landscape.jpg",
    imageAlt: "space capsule",
  },
};
