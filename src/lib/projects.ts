export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  tags?: string[];
  heroImage?: string;
  summary?: string;
  roles?: string[];
  tools?: string[];
  content?: { heading: string; body: string }[];
};

export const projects: Project[] = [
  {
    slug: "aaltoes-ecosystem",
    title: "Aaltoes Ecosystem & Events",
    subtitle:
      "Scaling student entrepreneurship: 100+ events / 10,000+ attendees / 50+ partnerships",
    tags: ["Community", "Leadership", "Events"],
    heroImage: "/images/aaltoes/hero.jpg",
    roles: ["Head of Ecosystem", "Event Producer", "Partnerships Lead"],
    tools: ["Notion", "Figma", "Linear", "Analytics"],
    content: [
      {
        heading: "Overview",
        body:
          "Built scalable programs such as <strong>Build It</strong>, <strong>Startup Crawl</strong> (1,200+ participants), <strong>STRIVE</strong> Talent Platform, and Robotics Nation collaborations.",
      },
      {
        heading: "Impact",
        body:
          "100+ events per year, reaching 10,000+ attendees; 50+ partnerships coordinated with Supercell, Nokia, and Hugging Face.",
      },
      {
        heading: "External Links",
        body:
          'Build It design: <a href="https://www.figma.com/design/0ogU5ZmDDIEwWcnTXAhoL0/Build-it-Challenge---Aaltoes?node-id=182-62" target="_blank">Figma</a>',
      },
    ],
  },
  {
    slug: "ux-figma-designs",
    title: "UX / UI Case Studies",
    subtitle: "User-centered prototypes and service concepts",
    tags: ["Figma", "UX", "Prototyping"],
    heroImage: "/images/ux/hero.jpg",
    roles: ["UX Designer", "Researcher"],
    tools: ["Figma", "Framer", "WCAG"],
    content: [
      {
        heading: "Carbon Footprint App",
        body:
          'Prototype: <a href="https://www.figma.com/proto/3AHkGc44J54CBMF6BbkezQ/Carbon-Footprint-Calculator-App-UI-UX-Design--Community-?node-id=5-1195&starting-point-node-id=13%3A3974" target="_blank">Figma Prototype</a>',
      },
      {
        heading: "Design File",
        body:
          'Full file: <a href="https://www.figma.com/design/3AHkGc44J54CBMF6BbkezQ/Carbon-Footprint-Calculator-App-UI-UX-Design--Community-?node-id=0-1" target="_blank">Figma Design</a>',
      },
      {
        heading: "Meal Planner",
        body:
          'Live App: <a href="https://meal-planner.fly.dev/login" target="_blank">meal-planner.fly.dev</a> · Prototype: <a href="https://www.figma.com/design/hrHCw7t5zQc3biZdVmyTC6/Meal-planner-prototype?node-id=0-1" target="_blank">Figma</a>',
      },
      {
        heading: "ITP Redesign",
        body:
          'Design: <a href="https://www.figma.com/design/FBe4HSXENEMddB2P5kOTnD/ITP-redesign--V" target="_blank">Figma</a>',
      },
    ],
  },
  {
    slug: "marketing-content",
    title: "Marketing & AI Content Creation",
    subtitle: "AI-enhanced video, branding, and storytelling",
    tags: ["Marketing", "AI Tools", "Content Creation"],
    heroImage: "/images/marketing/hero.jpg",
    roles: ["Photographer", "Content Strategist"],
    tools: ["Wan", "Higgsfield", "Runway", "Lightroom"],
    content: [
      {
        heading: "Collaborations",
        body:
          '<a href="https://boundd.fr" target="_blank">Boundd.fr</a>, <a href="https://Writeomatic.app" target="_blank">Writeomatic.app</a>, <a href="http://Sheenjeem.com" target="_blank">Sheenjeem.com</a>, <a href="http://Shamojee.pk" target="_blank">Shamojee.pk</a>, <a href="https://ttgconsults.com" target="_blank">ttgconsults.com</a>',
      },
      {
        heading: "Media Embeds",
        body:
          'Supports Figma/YouTube/Vimeo/Spline embeds: e.g., <code>https://www.figma.com/embed?...</code>, <code>https://www.youtube-nocookie.com/embed/...</code>, <code>https://player.vimeo.com/video/...</code>, <a href="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" target="_blank">Spline 3D</a>',
      },
    ],
  },
];


