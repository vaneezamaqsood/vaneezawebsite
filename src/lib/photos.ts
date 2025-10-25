export type Photo = {
  id: string;
  src: string;
  alt: string;
  category: string;
  tags: string[];
};

export const photos: Photo[] = [
  {
    id: "1",
    src: "/images/photography/event-1.jpg",
    alt: "Event photography at Aaltoes conference",
    category: "Events",
    tags: ["conference", "networking", "startup"]
  },
  {
    id: "2",
    src: "/images/photography/portrait-1.jpg",
    alt: "Portrait photography",
    category: "Portraits",
    tags: ["portrait", "professional", "headshot"]
  },
  {
    id: "3",
    src: "/images/photography/lifestyle-1.jpg",
    alt: "Lifestyle photography",
    category: "Lifestyle",
    tags: ["lifestyle", "candid", "natural"]
  },
  {
    id: "4",
    src: "/images/photography/product-1.jpg",
    alt: "Product photography",
    category: "Product",
    tags: ["product", "commercial", "clean"]
  },
  {
    id: "5",
    src: "/images/photography/event-2.jpg",
    alt: "Startup event photography",
    category: "Events",
    tags: ["startup", "pitch", "entrepreneurship"]
  },
  {
    id: "6",
    src: "/images/photography/portrait-2.jpg",
    alt: "Professional portrait",
    category: "Portraits",
    tags: ["professional", "business", "headshot"]
  }
];
