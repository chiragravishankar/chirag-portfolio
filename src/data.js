import headshot from "./assets/headshot.jpg";
import avatar from "./assets/avatar.jpg";
import romeLogo from "./assets/rome.png";
import polygonLogo from "./assets/polygon.png";
import shardeumLogo from "./assets/shardeum.png";

export const images = { headshot, avatar, romeLogo, polygonLogo, shardeumLogo };

export const PROFILE = {
  name: "Chirag Ravishankar",
  firstName: "Chirag",
  roles: ["Marketing Leader", "Growth & Community"],
  tagline: "I scale communities, build brands, and drive growth for technology companies.",
  about: [
    "Marketing manager who has scaled communities to 600K+ users and organized 400+ events across 15+ countries. I've helped 60+ early-stage builders with GTM, launched campaigns that drove real adoption, and built marketing teams from scratch.",
    "I use AI to automate the day-to-day like content scheduling, community moderation, and reporting, so teams can focus on the campaigns and strategy that actually drive growth.",
  ],
  education: "B.E. in Information Science, Visvesvaraya Technological University (2020–2024)",
  languages: "English (C1) · Hindi (C1) · Kannada (C2)",
  email: "chiragravishankar.work@gmail.com",
  socials: {
    linkedin: "https://linkedin.com/in/chiragravishankar",
    x: "https://x.com/Chiragravi",
    telegram: "https://t.me/chirag_ravishankar",
    instagram: "https://www.instagram.com/chirag_ravishankar",
  },
};

export const FOCUS = ["Community Growth", "Go-To-Market", "AI Automation", "Developer Relations"];

export const STATS = [
  { value: "3+", label: "Years in marketing" },
  { value: "600K+", label: "Audience grown" },
  { value: "400+", label: "Meetups & events" },
  { value: "60+", label: "Builders helped with GTM" },
];

export const EXPERIENCE = [
  {
    id: "rome",
    company: "Rome Protocol",
    url: "https://www.rome.builders/",
    logo: romeLogo,
    accent: "#7a1d7d",
    role: "Head of Marketing",
    location: "Westlake Village, US",
    period: "Mar 2025 – Feb 2026",
    category: "Go-To-Market & Brand Strategy",
    headline: "Built the brand and growth engine from the ground up, scaling X to 75K and Discord to 100K organically.",
    highlights: [
      "Defined core narrative, branding, and product marketing strategy from scratch",
      "Automated daily marketing operations like community moderation, social posting, and content scheduling using AI-powered automation workflows, letting the team focus on other marketing campaigns and strategy",
      "Scaled X from 10K → 75K and Discord from 15K → 100K organically",
      "Built and led a 5-person marketing team end-to-end",
      "Drove co-marketing partnerships with Solana, Polygon, and other leading ecosystems to amplify reach",
      "Ran multiple marketing campaigns to grow testnet users and drive protocol adoption",
      "Launched an NFT campaign that reached $1.5M+ market cap at peak",
      "Owned all PR, events, brand identity, and website SEO",
    ],
    metrics: [
      { label: "X Growth", value: "75K" },
      { label: "Discord Growth", value: "100K" },
      { label: "Team Built", value: "5" },
    ],
  },
  {
    id: "polygon",
    company: "Polygon & Dabl Club",
    url: "https://www.dabl.club/",
    logo: polygonLogo,
    accent: "#7b3fe4",
    role: "Program Manager, Startup Support",
    location: "San Francisco, US",
    period: "Aug 2024 – Feb 2025",
    category: "Ecosystem & Partnerships",
    headline: "Built the startup support engine for the Polygon ecosystem, guiding 60+ startups across 25+ hackathons.",
    highlights: [
      "Provided hands-on marketing guidance, BD support, and VC introductions to 60+ early-stage startups building on Polygon",
      "Managed Developer Relations across 25+ hackathons including ETHGlobal events, driving developer engagement and ecosystem adoption",
      "Designed and launched a tier-based enablement system to streamline support, resources, and mentorship for all startups in the Polygon ecosystem",
      "Structured a Builders Support Program that created a pipeline connecting builders with founding teams, accelerating project development",
    ],
    metrics: [
      { label: "Startups Supported", value: "60+" },
      { label: "Hackathons", value: "25+" },
      { label: "Ecosystem", value: "Polygon" },
    ],
  },
  {
    id: "shardeum",
    company: "Shardeum",
    url: "https://shardeum.org/",
    logo: shardeumLogo,
    accent: "#0088cc",
    role: "Community Associate (prev. Contributor)",
    location: "Dubai, UAE",
    period: "Jan 2023 – Aug 2024",
    category: "Community Growth & Campaigns",
    headline: "Scaled a global blockchain community from zero to 600K+ members with 400+ events in 15+ countries.",
    highlights: [
      "Grew X to 300K followers and Discord to 600K members organically",
      "Organized 400+ events, meetups, and campus activations across 15+ countries",
      "Planned and launched an Airdrop Campaign and gamified Incentivized Testnet",
      "Led ecosystem marketing and growth strategy for the APAC region",
      "Managed and moderated Discord and Telegram channels, maintaining high engagement",
      "Executed Proof of Community Backpacking India and Shardhat campaigns, generating organic buzz and media coverage",
    ],
    metrics: [
      { label: "X Followers", value: "300K" },
      { label: "Discord Members", value: "600K" },
      { label: "Events Run", value: "400+" },
    ],
  },
];

export const SKILLS = [
  "AI & Marketing Automation",
  "Product Marketing",
  "Community Growth",
  "Ambassador Programs",
  "Brand Strategy",
  "Go-To-Market Strategy",
  "SEO Optimization",
  "Developer Relations",
  "Marketing Analytics",
  "Partnership Management",
  "Campaign Execution",
  "Market Research",
];

export const SPEAKING = [
  {
    emoji: "🎤",
    kicker: "Stage · 5+ sessions",
    title: "Conference Speaker & Hackathon Judge",
    description:
      "Keynotes and judging panels at global Web3 conferences including EthBangkok, EthVietnam, EthSafari (Kenya), and EthIndia.",
    tint: "#ffe3ec",
  },
  {
    emoji: "🧭",
    kicker: "Advisory · 2 startups",
    title: "Startup Growth Advisor",
    description:
      "Advising two venture-backed startups, including Epoch Protocol, on go-to-market, community building, and growth strategy.",
    tint: "#e2f0ff",
  },
  {
    emoji: "🎪",
    kicker: "Events · EthMumbai",
    title: "Event Builder",
    description:
      "Organized and hosted major ecosystem events including EthMumbai and Founder House at EthIndia, bringing together builders, founders, and investors.",
    tint: "#fff3d6",
  },
];

export const BEYOND = [
  {
    emoji: "🪂",
    title: "Paragliding Pilot",
    tag: "P3 Licensed",
    description:
      "P3 licensed paragliding pilot. There's nothing quite like launching off a mountain and flying solo above the clouds.",
  },
  {
    emoji: "🏄",
    title: "Surfer",
    tag: "Ocean Life",
    description:
      "Catching waves wherever the coast allows. Surfing teaches patience, timing, and how to read what's coming.",
  },
  {
    emoji: "🌍",
    title: "Digital Nomad",
    tag: "20+ Countries",
    description:
      "3+ years living and working remotely across 20+ countries. From Bali to Dubai to San Francisco.",
  },
];
