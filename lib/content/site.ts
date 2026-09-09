export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export const PRIMARY_NAV: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "WAFEE", href: "/wafee" },
  { label: "Technology", href: "/technology" },
  { label: "Applications", href: "/applications" },
  { label: "Industries", href: "/industries" },
];

export const MOBILE_NAV: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "WAFEE", href: "/wafee" },
  { label: "Technology", href: "/technology" },
  { label: "Applications", href: "/applications" },
  { label: "Platform", href: "/platform" },
  { label: "Research & Engineering", href: "/research" },
  { label: "Validation & Safety", href: "/safety" },
  { label: "Industries", href: "/industries" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Investors", href: "/investors" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_EXPLORE: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "WAFEE", href: "/wafee" },
  { label: "Technology", href: "/technology" },
  { label: "Applications", href: "/applications" },
  { label: "Platform", href: "/platform" },
];

export const FOOTER_COMPANY: NavLink[] = [
  { label: "Research & Engineering", href: "/research" },
  { label: "Validation & Safety", href: "/safety" },
  { label: "Industries", href: "/industries" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Investors", href: "/investors" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LEGAL: NavLink[] = [
  { label: "Privacy Policy", href: "/legal#privacy" },
  { label: "Terms of Use", href: "/legal#terms" },
  { label: "Responsible AI & Robotics", href: "/legal#responsible-ai" },
  { label: "Safety & Compliance", href: "/legal#compliance" },
];

export const ENVIRONMENTS = [
  {
    id: "earth",
    index: "01",
    name: "Earth",
    domain: "Industrial · Infrastructure · Disaster",
    description:
      "Navigate industrial, infrastructure, logistics and disaster environments with human-compatible mobility and manipulation",
    status: "PRIMARY DEVELOPMENT",
  },
  {
    id: "water",
    index: "02",
    name: "Water",
    domain: "Marine · Offshore · Subsurface",
    description:
      "Enable inspection, intervention and support operations in aquatic environments through a protected robotic architecture",
    status: "ENGINEERING ROADMAP",
  },
  {
    id: "fire",
    index: "03",
    name: "Fire",
    domain: "High-Temperature · Hazardous Zones",
    description:
      "Support operations in high-temperature and hazardous zones where direct human access is limited",
    status: "ENGINEERING ROADMAP",
  },
  {
    id: "air",
    index: "04",
    name: "Air",
    domain: "Elevated · Exposed · Access-Limited",
    description:
      "Operate across elevated, exposed and difficult-to-access environments using intelligent mobility and mission-specific systems",
    status: "RESEARCH",
  },
  {
    id: "space",
    index: "05",
    name: "Space",
    domain: "Vacuum · Radiation · Off-World",
    description:
      "Create a pathway toward robotic operations in vacuum, extreme radiation and off-world environments",
    status: "LONG-TERM VISION",
  },
] as const;

export const WAFEE_ATTRIBUTES = [
  "Human-scale form factor",
  "High-performance electric actuation",
  "Advanced perception and sensor fusion",
  "AI-assisted decision making",
  "Modular hardware and software architecture",
  "Environmental protection architecture",
  "Mission-oriented autonomy",
  "Remote and autonomous operation",
  "Continuous health and system monitoring",
] as const;

export const PRINCIPLES = [
  {
    index: "01",
    title: "Human-Compatible",
    description:
      "Designed around a human-scale form factor so the robot can interact with spaces, tools and infrastructure created for people",
  },
  {
    index: "02",
    title: "Modular",
    description:
      "Hardware and software are designed to evolve without redesigning the entire platform",
  },
  {
    index: "03",
    title: "Intelligent",
    description:
      "Perception, planning and control are integrated to enable increasingly autonomous operation",
  },
  {
    index: "04",
    title: "Resilient",
    description:
      "The platform is being engineered around demanding environmental, thermal, mechanical and operational requirements",
  },
] as const;

export const TECHNOLOGY_SYSTEMS = [
  {
    id: "mechanical",
    index: "01",
    name: "Mechanical Systems",
    summary:
      "High-performance joints, lightweight structural architecture and precision transmission systems",
  },
  {
    id: "actuation",
    index: "02",
    name: "Actuation",
    summary:
      "High-torque electric actuation engineered for dynamic humanoid movement, manipulation and controlled force",
  },
  {
    id: "perception",
    index: "03",
    name: "Perception",
    summary:
      "Multi-modal sensing combining vision, depth, inertial information, force/torque feedback and environmental sensing",
  },
  {
    id: "compute",
    index: "04",
    name: "Compute & AI",
    summary:
      "Onboard computing architecture for perception, planning, control, diagnostics and mission intelligence",
  },
  {
    id: "power",
    index: "05",
    name: "Power",
    summary:
      "High-density energy storage, intelligent power distribution and protection systems",
  },
  {
    id: "thermal",
    index: "06",
    name: "Thermal Management",
    summary:
      "Integrated thermal architecture designed to control heat across motors, drives, compute and power electronics",
  },
  {
    id: "materials",
    index: "07",
    name: "Materials & Protection",
    summary:
      "Advanced structural and protective materials selected according to mechanical, thermal, environmental and mission requirements",
  },
  {
    id: "software",
    index: "08",
    name: "Software",
    summary:
      "A layered robotics software stack connecting sensors, perception, planning, control, diagnostics and mission applications",
  },
] as const;

export const APPLICATION_DOMAINS = [
  "Industrial Inspection",
  "Hazardous-Area Operations",
  "Disaster Response",
  "Fire & Emergency Support",
  "Infrastructure Inspection",
  "Offshore & Marine Operations",
  "Energy & Utilities",
  "Mining & Heavy Industry",
  "Warehouses & Logistics",
  "Construction",
  "Defense & Government Research",
  "Search & Reconnaissance",
  "Remote Maintenance",
  "Space & Planetary Robotics Research",
] as const;

export const REFERENCE_PLATFORM = [
  { label: "Height", value: "178 cm", note: "Approximate, humanoid-class" },
  { label: "Architecture", value: "Full-Body", note: "Humanoid robotic platform" },
  { label: "Mobility", value: "Bipedal", note: "Dynamic locomotion" },
  { label: "Actuation", value: "Electric", note: "High-performance joint actuation" },
  { label: "Sensing", value: "Multimodal", note: "Perception + state estimation" },
  { label: "Compute", value: "Distributed", note: "Robotic compute architecture" },
  { label: "Control", value: "Real-Time", note: "Motion and system control" },
  { label: "Comms", value: "High-BW", note: "Local and remote architecture" },
  { label: "Protection", value: "Zoned", note: "Mission-specific sealing" },
] as const;

export const WAFEE_CAPABILITIES = [
  {
    index: "01",
    name: "Mobility",
    description:
      "Dynamic walking, balance, terrain adaptation and controlled whole-body movement",
  },
  {
    index: "02",
    name: "Manipulation",
    description:
      "Human-compatible arms and hands designed for interaction with tools, equipment and infrastructure",
  },
  {
    index: "03",
    name: "Perception",
    description:
      "Real-time understanding of surroundings using multiple sensing modalities",
  },
  {
    index: "04",
    name: "Autonomy",
    description:
      "Mission planning, navigation, obstacle handling, system monitoring and intelligent decision support",
  },
  {
    index: "05",
    name: "Teleoperation",
    description:
      "Remote human control for situations where supervised operation is preferred or required",
  },
  {
    index: "06",
    name: "Collaboration",
    description:
      "Designed to work around humans, tools and existing infrastructure",
  },
] as const;

export const VALUES = [
  {
    title: "Engineering First",
    description: "We prioritize measurable performance over appearance",
  },
  {
    title: "Mission First",
    description: "Every subsystem must serve a real operational requirement",
  },
  {
    title: "Human Impact",
    description: "Technology should reduce danger and expand human capability",
  },
  {
    title: "Iterate Fast",
    description: "Build, test, measure, learn and improve",
  },
  {
    title: "Open Innovation",
    description:
      "The most important breakthroughs often happen across disciplines and organizations",
  },
  {
    title: "Responsible Autonomy",
    description:
      "Robots should operate within defined safety boundaries, with traceability and human oversight where required",
  },
] as const;

export const PARTNER_TYPES = [
  {
    index: "01",
    title: "Technology Partners",
    description: "Develop next-generation components and subsystems with us",
  },
  {
    index: "02",
    title: "Industrial Partners",
    description: "Bring real-world mission problems to the platform",
  },
  {
    index: "03",
    title: "Research Partners",
    description: "Collaborate on fundamental robotics and advanced engineering",
  },
  {
    index: "04",
    title: "Manufacturing Partners",
    description: "Scale precision robotic hardware from prototype to production",
  },
  {
    index: "05",
    title: "Government & Institutional Partners",
    description:
      "Develop responsible robotic capabilities for public-interest missions",
  },
  {
    index: "06",
    title: "Investors",
    description:
      "Help accelerate the transition from advanced prototype to scalable deep-tech company",
  },
] as const;

export const INDUSTRIES = [
  "Manufacturing",
  "Energy",
  "Utilities",
  "Oil & Gas",
  "Mining",
  "Construction",
  "Logistics",
  "Marine",
  "Infrastructure",
  "Disaster Management",
  "Government",
  "Research",
  "Space Technology",
] as const;
