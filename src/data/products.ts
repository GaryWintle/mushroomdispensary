import imgMushrooms from "@images/products/mushrooms.webp";
import imgCapsules from "@images/products/mushroom-capsules.jpg";
import imgKratom from "@images/products/kratom.jpg";
import imgCocaLeaf from "@images/products/coca-leaf.avif";
import imgPeyote from "@images/products/peyote.jpg";
import imgLSD from "@images/products/lsd.webp";
import imgDMT from "@images/products/dmt.jpg";
import imgBooks from "@images/products/books.jpg";

export const products = [
  {
    title: "Dried Mushrooms",
    description:
      "Classic and exotic dried strains, plus chocolates and gummies.",
    image: imgMushrooms,
    hasGuide: true,
    href: "/products/dried-mushrooms",
  },
  {
    title: "Mushroom Capsules",
    description:
      "Microdose capsules in precise strengths from 12.5mg to 500mg.",
    image: imgCapsules,
    hasGuide: true,
    href: "/products/mushroom-capsules",
  },
  {
    title: "Kratom",
    description:
      "Powder and capsule form, with a range of strains for energy, focus, and relaxation.",
    image: imgKratom,
    hasGuide: true,
    href: "/products/kratom",
  },
  {
    title: "Coca Leaf",
    description: "Whole leaf for chewing or powdered for tea, stocks vary.",
    image: imgCocaLeaf,
    hasGuide: true,
    href: "/products/coca-leaf",
  },
  {
    title: "Peyote",
    description: "The sacred mescaline cactus, dried or as live plants.",
    image: imgPeyote,
    hasGuide: true,
    href: "/products/peyote",
  },
  {
    title: "LSD",
    description: "Liquid and paper tabs, available in microdose and full-dose.",
    image: imgLSD,
    hasGuide: true,
    href: "/products/lsd",
  },
  {
    title: "DMT",
    description: "Intense 15-minute experiences via vape pen or raw powder.",
    image: imgDMT,
    hasGuide: true,
    href: "/products/dmt",
  },
  {
    title: "Books & Art",
    description: "Books, comics and art — all priced below Amazon.",
    image: imgBooks,
    hasGuide: false,
    href: "/products/books-and-art",
  },
];
