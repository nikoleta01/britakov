import { StaticImageData } from "next/image";
import image1 from "../../src/images/humenne/humenne.jpeg";
import image2 from "../../src/images/humenne/humenne2.jpeg";
import image3 from "../../src/images/humenne/humenne3.jpg";
import image4 from "../../src/images/humenne/humenne4.jpg";
import image5 from "../../src/images/humenne/humenne5.jpeg";

export const humenneImages: { src: StaticImageData; alt: string }[] = [
  { src: image1, alt: "Humenne 1" },
  { src: image2, alt: "Humenne 2" },
  { src: image3, alt: "Humenne 3" },
  { src: image4, alt: "Humenne 4" },
  { src: image5, alt: "Humenne 5" },
];
