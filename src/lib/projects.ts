export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  tags: string[];
  heroImage: string;
  summary: string;
  roles: string[];
  tools: string[];
  date?: string;
  gallery?: string[];
  content?: { heading: string; body: string; media?: string[] }[];
};

export const projects: Project[] = [
  {
    slug: "aaltoes-ecosystem",
    title: "Aaltoes Ecosystem & Events",
    subtitle: "Scaling student entrepreneurship with 100+ events / 10,000+ attendees",
    tags: ["Community", "Ops", "Partnerships"],
    heroImage: "/images/aaltoes/hero.jpg",
    summary:
      "Led community growth, partnerships, and large-scale event ops; launched Build It, Startup Crawl (1,200+ participants), and tech collaborations.",
    roles: ["Head of Ecosystem", "Producer", "Partnerships"],
    tools: ["Figma", "Notion", "Linear", "Analytics"],
    date: "2025",
    gallery: ["/images/aaltoes/1.jpg", "/images/aaltoes/2.jpg"],
    content: [
      { 
        heading: "Context", 
        body: "Europe's largest student entrepreneurship hub—Aaltoes—needed structure and scale to support growing community demands and maintain quality across 100+ annual events." 
      },
      { 
        heading: "Strategy", 
        body: "Program design (Build It), partnerships (Supercell, Nokia, Hugging Face), volunteer system, and scalable event operations framework." 
      },
      { 
        heading: "Execution", 
        body: "100+ events/year, end-to-end logistics, sponsor coordination, speaker operations, and community management across multiple platforms." 
      },
      { 
        heading: "Impact", 
        body: "10,000+ attendees annually; Startup Crawl 1,200+ participants; 50+ partnerships coordinated; 40% increase in event quality scores." 
      }
    ]
  },
  {
    slug: "ux-figma-designs",
    title: "UX & Figma Designs",
    subtitle: "Product flows, prototyping, and usability",
    tags: ["UX/UI", "Figma", "Accessibility"],
    heroImage: "/images/ux/hero.jpg",
    summary:
      "Selected product flows and prototypes—user-centered design with clear IA, WCAG practices, and motion for comprehension.",
    roles: ["Product Designer"],
    tools: ["Figma", "WCAG", "Framer"],
    date: "2024–2025",
    content: [
      { 
        heading: "Carbon Footprint App", 
        body: "Designed intuitive carbon tracking with gamification elements and clear data visualization for sustainable behavior change.",
        media: ["/images/ux/carbon-1.jpg", "/images/ux/carbon-2.jpg"]
      },
      { 
        heading: "Meal Planner", 
        body: "Created comprehensive meal planning interface with dietary preferences, shopping lists, and nutritional tracking.",
        media: ["/images/ux/meal-1.jpg", "/images/ux/meal-2.jpg"]
      },
      { 
        heading: "ITP Redesign", 
        body: "Redesigned university platform for better information architecture and student experience.",
        media: ["/images/ux/itp-1.jpg", "/images/ux/itp-2.jpg"]
      }
    ]
  },
  {
    slug: "marketing-content",
    title: "Marketing & Content",
    subtitle: "AI-enhanced visuals and social campaigns",
    tags: ["Marketing", "Content", "AI Tools"],
    heroImage: "/images/marketing/hero.jpg",
    summary:
      "Campaigns and content for Veila, MissVini, and events. Photography, AI-enhanced video, and storytelling for brand lift.",
    roles: ["Creative", "Photographer", "Editor"],
    tools: ["Runway", "Wan", "Higgsfield", "Lightroom"],
    date: "2025",
    content: [
      { 
        heading: "Brand Collaborations", 
        body: "Content creation for Boundd.fr, Writeomatic.app, Sheenjeem.com, Shamojee.pk, and TTG Consults with focus on authentic storytelling." 
      },
      { 
        heading: "AI-Enhanced Production", 
        body: "Leveraged Runway, Wan, and Higgsfield for video production, image enhancement, and creative content generation." 
      },
      { 
        heading: "Photography Portfolio", 
        body: "Event photography, product shots, and lifestyle content with professional post-processing workflows." 
      }
    ]
  }
];


