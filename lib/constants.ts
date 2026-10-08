import { ExperienceType } from "@/app/types";

export const REVALIDATE_POSTS = 3600;

export const SKILL_TYPE = {
  FRONTEND: "Frontend",
  BACKEND: "Backend",
  DATABASE: "Database",
  SERVICE: "Service",
  VERSION_CONTROL: "Version Control",
  DEVOPS: "Devops",
  STATE_MANAGEMENT: "State Management",
  OTHER: "Other",
};

export const products = [
  {
    name: "img2threejs",
    badge: "/products/img2threejs.svg",
    link: "https://img2threejs.io/",
    description: "Open-source image-to-3D system for rebuilding reference images as structured, editable, animation-ready Three.js models",
    tag: "Special"
  },

  {
    name: "Rive Playground",
    badge: "/products/rive-playground.png",
    link: "https://hoainho.github.io/rive-playground/",
    description: "Inspect, control & ship Rive .riv animations — CLI, MCP server & visual playground for teams building with Rive at scale",
    tag: "New"
  },
  {
    name: "MCP Console Hub",
    badge: "/products/mcp-console-hub.png",
    link: "https://nano-step.github.io/mcp-console-hub",
    description: "MCP server that streams browser DevTools — console, network, storage & performance — live to your IDE's AI agent",
    tag: "New"
  },
  {
    name: "Browser Lens MCP",
    badge: "/products/browser-lens.png",
    link: "https://nano-step.github.io/mcp-browser-lens",
    description: "MCP server giving your IDE's AI agent real-time DOM inspection, CSS analysis, screenshots & Figma comparison",
    tag: "New"
  },
  {
    name: "Cortex",
    badge: "/products/cortex.png",
    link: "https://hoainho.github.io/cortex-landing",
    description: "Desktop AI assistant with persistent memory, multi-agent orchestration & full codebase indexing — not a ChatGPT wrapper",
    tag: "Special"
  },
  {
    name: "CrashSense",
    badge: "/products/crashsense.png",
    link: "https://www.npmjs.com/package/@crashsense/core",
    description: "Intelligent crash diagnosis SDK for React & Vue — root cause classification with AI-powered fix suggestions",
    tag: "Feature"
  },
  {
    name: "DevLens",
    badge: "/products/devlens.png",
    link: "https://www.npmjs.com/package/@devlens/core",
    description: "Zero-config runtime error detection for JS/TS — catches null access, API failures & hung promises with X-Ray Mode",
    tag: "Feature"
  },
  {
    name: "Gear PR Review",
    badge: "https://raw.githubusercontent.com/hoainho/pr-review-bot/main/public/icon.svg",
    link: "https://pr-reviewer.hoainho.info",
    description: "AI-powered code review tool with deep context analysis, Jira/Linear integration & progressive learning",
    tag: "New"
  },
  {
    name: "React Debugger",
    badge: "https://raw.githubusercontent.com/hoainho/react-debugger-extension/main/public/icons/icon128.png",
    link: "https://www.npmjs.com/package/@nhonh/react-debugger",
    description: "Chrome DevTools extension for React debugging, performance analysis, memory monitoring & CLS tracking",
    tag: "Feature"
  },
  {
    name: "MoodTrip",
    badge: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1751732691/logo_jkab5l.png`,
    link: "https://moodtrip.hoainho.info",
    description: "Travel itinerary generator based on mood and preferences",
    tag: "Feature"
  },
  {
    name: "ArtGen",
    badge: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750572858/artgen_ll8cg8.png`,
    link: "https://artgen.hoainho.info",
    description: "AI-powered art generation platform with advanced style transfer capabilities",
    tag: "Special"
  },
  {
    name: "Prompt-Generator",
    badge: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750572858/prompt-generator_pu2u4w.png`,
    link: "https://prompt-generator.hoainho.info",
    description: "Smart prompt engineering tool for optimizing AI interactions",
    tag: "New"
  },
  {
    name: "Morph",
    badge: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750572858/morph_hbireh.png`,
    link: "https://morph.hoainho.info",
    description: "Advanced image morphing technology with real-time editing capabilities",
    tag: "Feature"
  }
]

export const skills = [
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576229/nextjs.svg`,
    name: "Next.js",
    yoe: 4,
    type: "Frontend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576230/nodejs_txp0g1.svg`,
    name: "Node.js",
    yoe: 6,
    type: "Backend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576244/react_t10oeg.svg`,
    name: "React",
    yoe: 6,
    type: "Frontend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576243/three-js_sv5k9x.svg`,
    name: "Three.js",
    yoe: 3,
    type: "Frontend",
    order: 1,
  },
  {
    image_url: "/icons/pixijs.svg",
    name: "PixiJS",
    yoe: 2,
    yoeLabel: "2+",
    type: "Frontend",
    order: 1,
  },

  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576239/redux_ggcowf.svg`,
    name: "Redux",
    yoe: 5,
    type: "State Management",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576228/vuex_bgx00r.svg`,
    name: "VueX",
    yoe: 5,
    type: "State Management",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576216/sass.svg`,
    name: "Sass",
    yoe: 6,
    type: "Frontend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576237/tailwindcss_yzejhp.svg`,
    name: "Tailwind CSS",
    yoe: 6,
    type: "Frontend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576237/typescript_yxj2rd.svg`,
    name: "TypeScript",
    yoe: 5,
    type: "Frontend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576234/css_xb5vyt.svg`,
    name: "CSS",
    yoe: 6,
    type: "Frontend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576218/javascript_k34fkm.svg`,
    name: "JavaScript",
    yoe: 6,
    type: "Frontend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576242/html_x4lxfx.svg`,
    name: "HTML",
    yoe: 6,
    type: "Frontend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576218/express_ujfpzt.svg`,
    name: "Express",
    yoe: 4,
    type: "Backend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576228/git_vajxq4.svg`,
    name: "Git",
    yoe: 6,
    type: "Version Control",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576221/github_z8hpoh.svg`,
    name: "GitHub",
    yoe: 6,
    type: "Version Control",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576215/DynamoDB_obnwjp.png`,
    name: "MongoDB",
    yoe: 3,
    type: "Database",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576247/mui_phfy3o.svg`,
    name: "Material-UI",
    yoe: 5,
    type: "Frontend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576248/adonis_jjagax.png`,
    name: "AdonisJS",
    yoe: 3,
    type: "Backend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576245/antdesign_l3kdel.svg`,
    name: "Ant Design",
    yoe: 3,
    type: "Frontend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576219/aws_r4sw7v.svg`,
    name: "AWS",
    yoe: 4,
    type: "Devops",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576220/GCP_icqanw.svg`,
    name: "Google Cloud",
    yoe: 4,
    type: "Devops",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576214/bootstrap_w8nx78.svg`,
    name: "Bootstrap",
    yoe: 6,
    type: "Frontend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576247/django_p4licg.svg`,
    name: "Django",
    yoe: 2.5,
    type: "Frontend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576227/docker_mrxr1j.svg`,
    name: "Docker",
    yoe: 4,
    type: "Backend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576215/DynamoDB_obnwjp.png`,
    name: "DynamoDB",
    yoe: 2.5,
    type: "Database",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576224/elastic_stiqqp.svg`,
    name: "Elastic",
    yoe: 3,
    type: "Service",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576223/firestore_ol4ncc.svg`,
    name: "Firebase",
    yoe: 4,
    type: "Database",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576217/gitlab_hvm1zl.svg`,
    name: "Gitlab",
    yoe: 4,
    type: "Version Control",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576251/golang_woico9.svg`,
    name: "Go",
    yoe: 4,
    type: "Backend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576226/heroku_skzbq4.svg`,
    name: "Heroku",
    yoe: 4,
    type: "Devops",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576233/jest_zjcf6f.svg`,
    name: "Jest",
    yoe: 4,
    type: "Test",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576222/jquery_uznzzh.svg`,
    name: "Jquery",
    yoe: 3,
    type: "Frontend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576249/mysql_bb4iid.svg`,
    name: "MySQL",
    yoe: 6,
    type: "Database",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576238/nest_sfod0d.svg`,
    name: "NestJS",
    yoe: 4,
    type: "Backend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576224/netlify_oly0lj.svg`,
    name: "Netlify",
    yoe: 4,
    type: "Devops",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576251/postgresql_sn7ezd.svg`,
    name: "PostgreSQL",
    yoe: 5,
    type: "Database",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576226/python_pryihw.svg`,
    name: "Python",
    yoe: 3,
    type: "Backend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576222/quasar_nogril.svg`,
    name: "Quasar",
    yoe: 3,
    type: "Frontend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576245/redis_dvyy1u.svg`,
    name: "Redis",
    yoe: 5,
    type: "Database",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576235/SendGrid_w0klwj.png`,
    name: "SendGrid",
    yoe: 3,
    type: "Service",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576246/socket_mlpsnj.svg`,
    name: "Socket",
    yoe: 4,
    type: "Service",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576236/stripe_f78adv.svg`,
    name: "Stripe",
    yoe: 4,
    type: "Service",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576233/twilio_drcile.svg`,
    name: "Twilio",
    yoe: 3,
    type: "Service",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576240/vercel_elvr2c.svg`,
    name: "Vercel",
    yoe: 4,
    type: "Devops",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576216/vue_epssdp.svg`,
    name: "Vue.js",
    yoe: 4,
    type: "Frontend",
    order: 1,
  },
];

export const experiences: ExperienceType[] = [
  {
    title: "Founder & Lead Maintainer",
    company_name: "img2threejs",
    company_link: "https://img2threejs.io/",
    icon: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576221/github_z8hpoh.svg`,
    icon_bg: "#FFFFFF",
    date: "July 2026 - Present",
    is_current: true,
    points: [
      "Founded and lead img2threejs, an Apache 2.0 open-source system that rebuilds reference images as structured, editable, animation-ready Three.js code; grew it to 17K+ GitHub stars and 1.4K+ forks.",
      "Architected a multimodal agent workflow spanning reference analysis, semantic planning, procedural code generation, deterministic validation, browser review, and targeted repair.",
      "Built model-agnostic workflows with reusable skills, plugin-based tool integrations, structured outputs, quality gates, model routing, and pass-scoped execution for traceable, token-efficient iteration.",
      "Lead product direction, architecture, releases, documentation, contributor experience, community, sponsorships, partnerships, and reusable 3D systems for geometry, materials, rigging, animation, VFX, and runtime optimization.",
    ],
  },
  {
    title: "Frontend Technical Lead",
    company_name: "Gear Games | PLAYSTUDIOS engagement",
    company_link: "https://geargames.com/",
    icon: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576158/geargames_y_qi2fra.jpg`,
    icon_bg: "#FFFFFF",
    date: "April 2025 - Present",
    is_current: true,
    points: [
      "Lead frontend technical direction and delivery across production releases, translating product and game design requirements into architecture, estimates, implementation plans, and quality criteria.",
      "Improve loading and runtime performance through vendor bundle splitting, lazy loading, service worker caching, lobby virtualization, and resource behavior based on user activity.",
      "Design frontend architecture and proofs of concept for multiple quest support and local notifications, including state models, dynamic configuration, user states, and release tradeoffs.",
      "Diagnose production failures across platform and external game provider integrations, define safe fallback behavior, and guide engineers through code review, testing strategy, and release readiness.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Gear Games | PLAYSTUDIOS engagement",
    company_link: "https://geargames.com/",
    icon: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576158/geargames_y_qi2fra.jpg`,
    icon_bg: "#FFFFFF",
    date: "December 2024 - April 2025",
    is_current: false,
    points: [
      "Joined as a Senior Software Engineer in December 2024 and moved into the Frontend Technical Lead role in April 2025.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "NUS Technology",
    company_link: "https://nustechnology.com/",
    icon: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576153/NUS_vkbdab.png`,
    icon_bg: "#accbe1",
    date: "December 2021 - November 2024",
    is_current: false,
    points: [
      "Delivered 11+ projects across mobility, construction technology, online commerce, travel, education, and CRM.",
      "Built React and Next.js applications with Node.js, NestJS, and Go services, real-time processing, cloud infrastructure, and CI/CD pipelines.",
      "Integrated Stripe, PayPal, Apple Pay, and Google Pay, and developed image processing, notification, background job, and high-traffic delivery workflows.",
      "On URIDE, designed and built core architecture supporting 100,000+ registered users and 1,000+ daily users.",
      "Worked with solution architects, business analysts, QA, and clients to balance product scope, security, scalability, maintainability, and operating cost.",
    ],
  },
  {
    title: "Technical Leader & Full Stack Developer",
    company_name: "GPT Group",
    company_link: "https://www.gptgroup.net/",
    icon: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576157/GPT_wpeqe5.png`,
    icon_bg: "#fbc3bc",
    date: "March 2020 - December 2021",
    is_current: false,
    points: [
      "Led architecture, sprint planning, code review, refactoring, and delivery risk assessment across two major products.",
      "Created reusable components that reduced development effort by 200+ hours per month.",
      "Developed a task management and automation platform that helped secure three contracts and generate $300,000 in revenue.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Freelance",
    company_link: "#",
    icon: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576159/husay_pz7car.png`,
    icon_bg: "#b7e4c7",
    date: "August 2019 - March 2020",
    is_current: false,
    points: [
      "Built responsive React, Redux, and TypeScript applications with reusable components, JWT authentication, real-time messaging, CSS-in-JS, and REST API integrations.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    icon_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576213/contact_astmfd.svg`,
    link: "/contact",
  },
  {
    name: "GitHub",
    icon_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576221/github_z8hpoh.svg`,
    link: "https://github.com/hoainho",
  },
  {
    name: "Thnk & Grow",
    icon_url: "https://cdn.prod.website-files.com/5e0a5d9d743608d0f3ea6753/5f350958935a5ccf103429ce_daily.dev%20-%2032.png",
    link: "https://app.daily.dev/squads/thnkandgrow",
  },
  {
    name: "FAQs Interview",
    icon_url: "https://cdn.prod.website-files.com/5e0a5d9d743608d0f3ea6753/5f350958935a5ccf103429ce_daily.dev%20-%2032.png",
    link: "https://app.daily.dev/squads/faqsinterview",
  },
  {
    name: "LinkedIn",
    icon_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576250/linkedin_k7tdcy.svg`,
    link: "https://www.linkedin.com/in/hoai-nho/",
  },
  {
    name: "X",
    icon_url: "/icons/x.svg",
    link: "https://x.com/NickDevFE",
  },
  {
    name: "YouTube",
    icon_url: "/icons/youtube.svg",
    link: "https://www.youtube.com/@img2threejs",
  },
];

export const projects = [
  {
    icon_url: "/products/img2threejs.svg",
    theme: "btn-back-purple",
    name: "img2threejs",
    descriptions: [
      `<div>
        <p><strong>img2threejs</strong> is an open-source, agent-agnostic AI workflow that turns a reference image into procedural, editable, animation-ready Three.js code rather than extracting a mesh.</p>
        <h3>AI reconstruction pipeline</h3>
        <p>It translates the reference into a structured object spec, then builds the model in locked, pass-scoped stages—from blockout and structure through form, materials, surface detail, lighting, interaction, and optimization.</p>
        <h3>Advanced harnesses &amp; optimization</h3>
        <ul>
          <li><strong>Deterministic gates:</strong> Python tooling validates the spec and geometry before browser renders, stopping invalid passes early.</li>
          <li><strong>Targeted iteration:</strong> Each pass uses one comparison sheet for review; the agent repairs identified issues with bounded corrections and resumable, evidence-backed state instead of rebuilding the whole model.</li>
          <li><strong>Efficient AI use:</strong> Model calls focus on spec and code authorship plus visual judgment; scripts handle repeatable validation, state, and comparison-sheet packaging.</li>
        </ul>
        <p>The base workflow supports Claude Code, Codex, and OpenCode. Optional advanced plugins are available through the separate <code>img2</code> CLI harness for capability lookup and domain/output-specific evidence collection and review gates.</p>
        <p>Built around Python 3.10+, TypeScript, and Three.js.</p>
        <p>
          <a href="https://github.com/img2threejs/img2threejs" target="_blank" rel="noopener noreferrer">Source repository</a> ·
          <a href="https://github.com/img2threejs/img2" target="_blank" rel="noopener noreferrer">Optional plugin harness</a> ·
          <a href="https://img2threejs.io/" target="_blank" rel="noopener noreferrer">Live project gallery</a>
        </p>
      </div>`,
    ],
    link: "https://img2threejs.io/",
  },
  {
    icon_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1763646858/Winzone-Logo_mycbys.webp`,
    theme: "btn-back-purple",
    name: "TheWinZone",
    descriptions: [
      `<div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #2c3e50; margin-bottom: 20px;">TheWinZone - Gaming Platform</h2>
          
          <p style="font-size: 16px; margin-bottom: 15px;">
              <strong>The Application:</strong> A comprehensive gaming platform designed to provide an engaging and immersive experience for users. The platform features modern web technologies and optimized performance for seamless gameplay and user interaction.
          </p>
          
          <h3 style="color: #34495e; margin-bottom: 15px;">Key Features:</h3>
          <ul style="font-size: 16px; list-style-type: disc; margin-left: 20px; margin-bottom: 20px;">
              <li>Interactive Gaming Experience</li>
              <li>User Management System</li>
              <li>Real-time Updates</li>
              <li>Responsive Design</li>
              <li>Performance Optimization</li>
              <li>Secure Authentication</li>
          </ul>
          
          <h3 style="color: #34495e; margin-bottom: 15px;">Technologies Used:</h3>
          <p style="font-size: 16px;">
              <strong><em>Modern Web Technologies</em></strong>, <strong><em>Responsive Design</em></strong>, <strong><em>Cloud Infrastructure</em></strong>
          </p>
      </div>`,
    ],
    link: "https://www.thewinzone.com/",
  },
  {
    icon_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576153/uride_ofbwxd.png`,
    theme: "btn-back-orange",
    name: "Uride - Ridesharing Services",
    descriptions: [
      `<div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #2c3e50; margin-bottom: 20px;">Real-Time Location Tracking System</h2>
          
          <p style="font-size: 16px; margin-bottom: 15px;">
              <strong>The Application:</strong> A robust real-time location tracking system designed specifically for ride matching. It utilizes <em>WebSockets</em> for seamless bi-directional communication, allowing for live updates of user positions on a map.
          </p>
          
          <h3 style="color: #34495e; margin-bottom: 15px;">Responsibilities:</h3>
          <ul style="font-size: 16px; list-style-type: disc; margin-left: 20px; margin-bottom: 20px;">
              <li>Real-Time Position Tracking</li>
              <li>Ride Matching</li>
              <li>Client Management</li>
              <li>Logging and Monitoring</li>
              <li>User Management</li>
              <li>Payment Processing</li>
              <li>Data Analysis and Visualization</li>
              <li>Geolocation and Map Integration</li>
              <li>Scalability</li>
          </ul>
          
          <h3 style="color: #34495e; margin-bottom: 15px;">Technologies Used:</h3>
          <p style="font-size: 16px;">
              <strong><em>Node.js (NestJS)</em></strong>, <strong><em>Golang</em></strong>, <strong><em>TypeScript</em></strong>, <strong><em>Kafka</em></strong>, <strong><em>Socket.io</em></strong>, <strong><em>PostgreSQL</em></strong>, <strong><em>Redis</em></strong>, <strong><em>DynamoDB</em></strong>, <strong><em>Amazon EKS</em></strong>, <strong><em>EC2</em></strong>, <strong><em>Lambda</em></strong>, <strong><em>CloudFront</em></strong>, <strong><em>Neo4J</em></strong>, <strong><em>ElasticSearch</em></strong>, <strong><em>Firebase</em></strong>
          </p>
      </div>`,
    ],
    link: "https://www.uride.co/",
  },
  {
    icon_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576154/earthbrain_xgkcv9.png`,
    theme: "btn-back-blue",
    name: "Earthbrain - Smart Construction",
    descriptions: [
      `<div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #2c3e50; margin-bottom: 20px;">Construction processes through digital transformation</h2>
        
        <p style="font-size: 16px; margin-bottom: 15px;">
            <strong>The Application:</strong> A microservices-based platform designed to build multilingual sites with seamless performance. It incorporates <em>Golang</em> and <em>Node.js</em> for robust back-end operations and integrates Docker for efficient project setup and deployment.
        </p>
        
        <h3 style="color: #34495e; margin-bottom: 15px;">Responsibilities:</h3>
        <ul style="font-size: 16px; list-style-type: disc; margin-left: 20px; margin-bottom: 20px;">
            <li>Multilingual Site Construction</li>
            <li>Task Management and Team Collaboration</li>
            <li>Docker Configuration for Optimized Setup</li>
            <li>Continuous Integration/Continuous Deployment (CI/CD)</li>
            <li>OAuth2 System for Authentication</li>
            <li>Unit and Endpoint Testing Strategies</li>
        </ul>
        
        <h3 style="color: #34495e; margin-bottom: 15px;">Technologies Used:</h3>
        <p style="font-size: 16px;">
            <strong><em>Golang</em></strong>, <strong><em>Node.js (NestJS, TypeScript)</em></strong>, <strong><em>Docker</em></strong>, <strong><em>Google Cloud Platform</em></strong>, <strong><em>Jest</em></strong>, <strong><em>Selenium</em></strong>, <strong><em>PostgreSQL</em></strong>, <strong><em>Redis</em></strong>
        </p>
    </div>`,
    ],
    link: "https://www.earthbrain.com/",
  },
  {
    icon_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576155/eyewa_qqogu0.png`,
    theme: "btn-back-green",
    name: "Eyewa",
    descriptions: [
      `<div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #2c3e50; margin-bottom: 20px;">Leading omnichannel multi-brand eyewear hub</h2>
          <p style="font-size: 16px; margin-bottom: 15px;">
              <strong>The Application:</strong> The platform was designed to facilitate seamless transactions across multiple countries, including UAE, Saudi Arabia, Kuwait, Qatar, Oman, and Bahrain. Leveraging the React framework, I led the frontend development efforts, ensuring an intuitive and responsive user interface that catered to the diverse needs of our global customer base.
          </p>
          
          <h3 style="color: #34495e; margin-bottom: 15px;">Technologies Used:</h3>
          <p style="font-size: 16px;">
              <strong>ReactJS</strong>, <strong>Jest</strong>, <strong>PM2</strong>, <strong>Lerna</strong>, <strong>GitHub pipeline</strong>
          </p>

          <h3 style="color: #34495e; margin-bottom: 15px; margin-top: 15px;">Responsibilities:</h3>
          <ul style="font-size: 16px; list-style-type: disc; margin-left: 20px; margin-bottom: 20px;">
              <li><strong>React Framework Implementation:</strong>
                  <ul style="list-style-type: circle; margin-left: 20px;">
                      <li>Utilized React for frontend development, creating dynamic user interfaces.</li>
                      <li>Leveraged React's component-based architecture for streamlined development and code reusability.</li>
                  </ul>
              </li>
              <li><strong>Feature Development and Testing:</strong>
                  <ul style="list-style-type: circle; margin-left: 20px;">
                      <li>Developed key features for product listings, search functionality, and checkout processes.</li>
                      <li>Implemented testing with Jest to ensure high-quality and reliable features.</li>
                  </ul>
              </li>
              <li><strong>International Commerce Support:</strong>
                  <ul style="list-style-type: circle; margin-left: 20px;">
                      <li>Integrated multi-country support for various regional needs including language localization and currency conversion.</li>
                      <li>Adapted user experience to comply with local preferences and payment gateways.</li>
                  </ul>
              </li>
              <li><strong>Microservices Architecture:</strong>
                  <ul style="list-style-type: circle; margin-left: 20px;">
                      <li>Implemented a microservices architecture for scalability and maintainability.</li>
                      <li>Developed a core project for building common components, promoting code reuse and consistency.</li>
                  </ul>
              </li>
          </ul>
      </div>
    `,
    ],
    link: "https://eyewa.com/",
  },
  {
    icon_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576152/fountain_sx3svc.svg`,
    theme: "btn-back-red",
    name: "Fountain Gifts",
    descriptions: [
      `<div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #2c3e50; margin-bottom: 20px;">The Best Greeting and Gifting Experience for Senders and Receivers</h2>
          <p style="font-size: 16px; margin-bottom: 15px;">
              <strong>The Application:</strong> As a Senior Frontend Engineer for Fountain Gifts, I crafted a sophisticated e-commerce platform using Next.js 14 and TailwindCSS. I focused on delivering a seamless user experience with pixel-perfect design and effective SEO. My responsibilities included optimizing UI performance, integrating advanced features, and leveraging CloudFront and CloudFlare for enhanced content delivery and security.
          </p>
          <h3 style="color: #34495e; margin-bottom: 15px;">Technologies Used:</h3>
          <p style="font-size: 16px;">
              <strong>Next.js 14</strong>, <strong>TailwindCSS</strong>, <strong>Custom Hooks</strong>, <strong>CloudFront</strong>, <strong>CloudFlare</strong>, <strong>SEO</strong>
          </p>
          <h3 style="color: #34495e; margin-bottom: 15px; margin-top: 15px;">Responsibilities:</h3>
          <ul style="font-size: 16px; list-style-type: disc; margin-left: 20px; margin-bottom: 20px;">
              <li><strong>Advanced UI Development:</strong>
                  <ul style="list-style-type: circle; margin-left: 20px;">
                      <li>Created dynamic, responsive interfaces with Next.js 14 and TailwindCSS.</li>
                      <li>Developed custom hooks for efficient component logic and state management.</li>
                  </ul>
              </li>
              <li><strong>Performance Optimization:</strong>
                  <ul style="list-style-type: circle; margin-left: 20px;">
                      <li>Enhanced UI performance for smooth user interactions.</li>
                      <li>Utilized CloudFront and CloudFlare for faster content delivery and improved security.</li>
                  </ul>
              </li>
              <li><strong>Pixel-Perfect Implementation:</strong>
                  <ul style="list-style-type: circle; margin-left: 20px;">
                      <li>Ensured meticulous pixel-perfect design across all devices.</li>
                  </ul>
              </li>
              <li><strong>SEO and Visibility:</strong>
                  <ul style="list-style-type: circle; margin-left: 20px;">
                      <li>Implemented SEO best practices to boost search engine visibility.</li>
                  </ul>
              </li>
              <li><strong>Customer Experience Enhancement:</strong>
                  <ul style="list-style-type: circle; margin-left: 20px;">
                      <li>Developed features to enhance user satisfaction and shopping experience.</li>
                  </ul>
              </li>
          </ul>
      </div>`,
    ],
    link: "https://www.fountaingifts.com/",
  },
  {
    icon_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576156/ringo_s57lis.png`,
    theme: "btn-back-pink",
    name: "Ringo App",
    descriptions: [
      `<div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #2c3e50; margin-bottom: 20px;">Manage and control risks</h2>
        <p style="font-size: 16px; margin-bottom: 15px;">
            <strong>The Application:</strong> As a Fullstack Developer for RingoApp, I focused on enhancing administrative tools for workforce management. This involved developing features to track employee working hours, integrating voice tracking systems for activity monitoring, and implementing real-time notifications for task assignments. My role also included improving security measures and optimizing data access and API connections.
        </p>
        
        <h3 style="color: #34495e; margin-bottom: 15px;">Technologies Used:</h3>
        <p style="font-size: 16px;">
            <strong>ReactJS</strong>, <strong>ExpressJS</strong>, <strong>Sequelize</strong>, <strong>MaterialUI</strong>, <strong>Twilio</strong>, <strong>GitHub CICD</strong>, <strong>Docker</strong>
        </p>

        <h3 style="color: #34495e; margin-bottom: 15px; margin-top: 15px;">Responsibilities:</h3>
        <ul style="font-size: 16px; list-style-type: disc; margin-left: 20px; margin-bottom: 20px;">
            <li><strong>Time Tracking:</strong>
                <ul style="list-style-type: circle; margin-left: 20px;">
                    <li>Tracked employee working hours and generated reports for payroll and performance analysis.</li>
                </ul>
            </li>
            <li><strong>Voice Tracking System:</strong>
                <ul style="list-style-type: circle; margin-left: 20px;">
                    <li>Integrated voice recognition technology to monitor and track employee activities and performance.</li>
                </ul>
            </li>
            <li><strong>Real-Time Notification Function:</strong>
                <ul style="list-style-type: circle; margin-left: 20px;">
                    <li>Developed a real-time notification system to assign tasks and provide updates.</li>
                </ul>
            </li>
            <li><strong>Support Chatbox:</strong>
                <ul style="list-style-type: circle; margin-left: 20px;">
                    <li>Created a chatbox for real-time communication and employee support.</li>
                </ul>
            </li>
            <li><strong>Complex Mission System:</strong>
                <ul style="list-style-type: circle; margin-left: 20px;">
                    <li>Designed a hierarchical structure for managing complex missions and projects.</li>
                </ul>
            </li>
            <li><strong>Security System Upgrades:</strong>
                <ul style="list-style-type: circle; margin-left: 20px;">
                    <li>Enhanced security measures including encryption and access controls.</li>
                </ul>
            </li>
            <li><strong>Data Access Optimization:</strong>
                <ul style="list-style-type: circle; margin-left: 20px;">
                    <li>Improved data retrieval and API connections for better performance.</li>
                </ul>
            </li>
        </ul>
    </div>`,
    ],
    link: "https://ringoapp.com.au/",
  },
  {
    icon_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576153/maqro_qjdbcr.png`,
    theme: "btn-back-black",
    name: "Maqro",
    descriptions: [
      `<div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #2c3e50; margin-bottom: 20px;">Diversified financial services</h2>
        <p style="font-size: 16px; margin-bottom: 15px;">
            <strong>The Application:</strong> As a Backend Developer, I spearheaded a pivotal project aimed at revolutionizing the stock market landscape for investors. The project involved developing a dynamic server tailored specifically for mobile platforms. Leveraging frameworks like AdonisJS and implementing technologies such as Socker and Bull, I engineered a scalable infrastructure for real-time stock data processing. The project also included creating a responsive UI with real-time charting capabilities and functionalities like payment processing and stock trading.
        </p>
        
        <h3 style="color: #34495e; margin-bottom: 15px;">Technologies Used:</h3>
        <p style="font-size: 16px;">
            <strong>AWS</strong>, <strong>ReactJS</strong>, <strong>Adonis</strong>, <strong>AntDesign</strong>, <strong>MySQL</strong>, <strong>Adonis-bull</strong>, <strong>Twilio</strong>, <strong>Cloudinary</strong>, <strong>Socket</strong>, <strong>Docker</strong>, <strong>Firebase</strong>, <strong>CICD</strong>
        </p>

        <h3 style="color: #34495e; margin-bottom: 15px; margin-top: 15px;">Responsibilities:</h3>
        <ul style="font-size: 16px; list-style-type: disc; margin-left: 20px; margin-bottom: 20px;">
            <li><strong>Server Development:</strong>
                <ul style="list-style-type: circle; margin-left: 20px;">
                    <li>Developed a robust server architecture using AdonisJS for mobile platforms.</li>
                    <li>Integrated Socker for real-time communication and Bull for background job management.</li>
                    <li>Utilized AWS for deployment and scalability.</li>
                </ul>
            </li>
            <li><strong>Frontend Development:</strong>
                <ul style="list-style-type: circle; margin-left: 20px;">
                    <li>Created an admin page using ReactJS and Ant Design for a user-friendly interface.</li>
                </ul>
            </li>
            <li><strong>Real-Time Data Visualization:</strong>
                <ul style="list-style-type: circle; margin-left: 20px;">
                    <li>Implemented dynamic, real-time charting features for stock market data.</li>
                </ul>
            </li>
            <li><strong>Feature Development:</strong>
                <ul style="list-style-type: circle; margin-left: 20px;">
                    <li>Engineered features like payment processing, stock trading, and user authentication.</li>
                    <li>Handled large datasets efficiently for smooth API interactions.</li>
                </ul>
            </li>
            <li><strong>Optimization:</strong>
                <ul style="list-style-type: circle; margin-left: 20px;">
                    <li>Optimized API interactions and data processing to enhance performance.</li>
                    <li>Minimized latency for improved user experiences.</li>
                </ul>
            </li>
        </ul>
    </div>`,
    ],
    link: "https://maqro.com.au/",
  },
  {
    icon_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576156/trp_saoru5.png`,
    theme: "btn-back-yellow",
    name: "ThirdRockPix",
    descriptions: [
      `<div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #2c3e50; margin-bottom: 20px;">Memories from your trips</h2>  
        <p style="font-size: 16px; margin-bottom: 15px;">
            <strong>The Application:</strong> A highly complex platform focused on large-scale image processing and seamless integration with payment systems. It handles everything from background job processing to S3 uploads and CloudFront integration, ensuring optimal performance.
        </p>
        
        <h3 style="color: #34495e; margin-bottom: 15px; margin-top: 15px;">Responsibilities:</h3>
        <ul style="font-size: 16px; list-style-type: disc; margin-left: 20px; margin-bottom: 20px;">
            <li>Large-Scale Image Processing</li>
            <li>S3 Uploads with Background Processing</li>
            <li>Payment System Integration</li>
            <li>RESTful API Provision</li>
            <li>CloudFront Configuration for Performance</li>
            <li>Handling Large Image Uploads</li>
            <li>Notification System with Background Jobs</li>
        </ul>
        
        <h3 style="color: #34495e; margin-bottom: 15px;margin-top: 15px;">Technologies Used:</h3>
        <p style="font-size: 16px;">
            <strong><em>Node.js (AdonisJS, Bull)</em></strong>, <strong><em>ReactJS (Redux)</em></strong>, <strong><em>MySQL</em></strong>, <strong><em>Redis</em></strong>, <strong><em>Docker</em></strong>, <strong><em>AWS (CloudFront, Lambda, EC2, Nginx)</em></strong>
        </p>
    </div>`,
    ],
    link: "https://thirdrockpix.com/",
  },
];

export const certsAndAwards = [
  {
    name: "AWS Knowledge: Architecting",
    badge: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576254/aws-knowledge-architecture_vcirkv.png`,
    link: "https://www.credly.com/badges/8325e1ac-4361-4ab1-9f07-3bb3bfdb1263/public_url",
  },
  {
    name: "AWS Knowledge: Cloud Essentials",
    badge: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576256/aws-knowledge-cloud-essentials_jlyzh8.png`,
    link: "https://www.credly.com/badges/86c28349-8c85-4de8-affb-27631c906bf7/public_url",
  },
  {
    name: "AWS Knowledge: Amazon EKS",
    badge: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576254/aws-knowledge-amazon-eks_teuo3v.png`,
    link: "https://www.credly.com/badges/001c2e5f-c56b-4a3e-acc8-47af906e838e/public_url",
  },
  {
    name: "AWS Cloud Quest: Cloud Practitioner",
    badge: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576256/aws-cloud-practitioner_zx56w9.png`,
    link: "https://www.credly.com/badges/98330a0d-24db-4f5d-b017-d22a420b317a/public_url",
  },
  {
    name: "IBM Python for Data Science",
    badge: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576257/python-for-data-science_yz2b0y.png`,
    link: "https://www.credly.com/badges/d2eeb542-4ead-489a-8a32-5e72438eb725/public_url",
  },
  {
    name: "IBM Data Analysis Using Python",
    badge: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576256/data-analysis-using-python_myxdlp.png`,
    link: "https://www.credly.com/badges/51faf712-e528-499e-bc14-8d8c8d0e289f/public_url",
  },
  {
    name: "Innovative Software · HUTECH University (2020)",
    badge: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576258/logo-hutech_hzuixe.png`,
  },
  {
    name: "IT Got Talent · HUTECH University (2020)",
    badge: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576258/logo-hutech_hzuixe.png`,
  },
];
