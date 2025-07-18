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
    name: "MoodTrip",
    badge: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1751732691/logo_jkab5l.png`,
    link: "https://moodtrip.hoainho.info",
    description: "Travel itinerary generator based on mood and preferences",
    tag: "New"
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
    yoe: 2,
    type: "Frontend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576230/nodejs_txp0g1.svg`,
    name: "Node.js",
    yoe: 4,
    type: "Backend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576244/react_t10oeg.svg`,
    name: "React",
    yoe: 4,
    type: "Frontend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576243/three-js_sv5k9x.svg`,
    name: "Three.js",
    yoe: 1,
    type: "Frontend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576239/redux_ggcowf.svg`,
    name: "Redux",
    yoe: 3,
    type: "State Management",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576228/vuex_bgx00r.svg`,
    name: "VueX",
    yoe: 3,
    type: "State Management",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576216/sass.svg`,
    name: "Sass",
    yoe: 4,
    type: "Frontend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576237/tailwindcss_yzejhp.svg`,
    name: "Tailwind CSS",
    yoe: 4,
    type: "Frontend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576237/typescript_yxj2rd.svg`,
    name: "TypeScript",
    yoe: 3,
    type: "Frontend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576234/css_xb5vyt.svg`,
    name: "CSS",
    yoe: 4,
    type: "Frontend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576218/javascript_k34fkm.svg`,
    name: "JavaScript",
    yoe: 4,
    type: "Frontend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576242/html_x4lxfx.svg`,
    name: "HTML",
    yoe: 4,
    type: "Frontend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576218/express_ujfpzt.svg`,
    name: "Express",
    yoe: 2,
    type: "Backend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576228/git_vajxq4.svg`,
    name: "Git",
    yoe: 4,
    type: "Version Control",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576221/github_z8hpoh.svg`,
    name: "GitHub",
    yoe: 4,
    type: "Version Control",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576215/DynamoDB_obnwjp.png`,
    name: "MongoDB",
    yoe: 1,
    type: "Database",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576247/mui_phfy3o.svg`,
    name: "Material-UI",
    yoe: 3,
    type: "Frontend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576248/adonis_jjagax.png`,
    name: "AdonisJS",
    yoe: 1,
    type: "Backend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576245/antdesign_l3kdel.svg`,
    name: "Ant Design",
    yoe: 1,
    type: "Frontend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576219/aws_r4sw7v.svg`,
    name: "AWS",
    yoe: 2,
    type: "Devops",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576220/GCP_icqanw.svg`,
    name: "Google Cloud",
    yoe: 2,
    type: "Devops",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576214/bootstrap_w8nx78.svg`,
    name: "Bootstrap",
    yoe: 4,
    type: "Frontend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576247/django_p4licg.svg`,
    name: "Django",
    yoe: 0.5,
    type: "Frontend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576227/docker_mrxr1j.svg`,
    name: "Docker",
    yoe: 2,
    type: "Backend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576215/DynamoDB_obnwjp.png`,
    name: "DynamoDB",
    yoe: 0.5,
    type: "Database",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576224/elastic_stiqqp.svg`,
    name: "Elastic",
    yoe: 1,
    type: "Service",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576223/firestore_ol4ncc.svg`,
    name: "Firebase",
    yoe: 2,
    type: "Database",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576217/gitlab_hvm1zl.svg`,
    name: "Gitlab",
    yoe: 2,
    type: "Version Control",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576251/golang_woico9.svg`,
    name: "Go",
    yoe: 2,
    type: "Backend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576226/heroku_skzbq4.svg`,
    name: "Heroku",
    yoe: 2,
    type: "Devops",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576233/jest_zjcf6f.svg`,
    name: "Jest",
    yoe: 2,
    type: "Test",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576222/jquery_uznzzh.svg`,
    name: "Jquery",
    yoe: 1,
    type: "Frontend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576249/mysql_bb4iid.svg`,
    name: "MySQL",
    yoe: 4,
    type: "Database",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576238/nest_sfod0d.svg`,
    name: "NestJS",
    yoe: 2,
    type: "Backend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576224/netlify_oly0lj.svg`,
    name: "Netlify",
    yoe: 2,
    type: "Devops",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576251/postgresql_sn7ezd.svg`,
    name: "PostgreSQL",
    yoe: 3,
    type: "Database",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576226/python_pryihw.svg`,
    name: "Python",
    yoe: 1,
    type: "Backend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576222/quasar_nogril.svg`,
    name: "Quasar",
    yoe: 1,
    type: "Frontend",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576245/redis_dvyy1u.svg`,
    name: "Redis",
    yoe: 3,
    type: "Database",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576235/SendGrid_w0klwj.png`,
    name: "SendGrid",
    yoe: 1,
    type: "Service",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576246/socket_mlpsnj.svg`,
    name: "Socket",
    yoe: 2,
    type: "Service",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576236/stripe_f78adv.svg`,
    name: "Stripe",
    yoe: 2,
    type: "Service",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576233/twilio_drcile.svg`,
    name: "Twilio",
    yoe: 1,
    type: "Service",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576240/vercel_elvr2c.svg`,
    name: "Vercel",
    yoe: 2,
    type: "Devops",
    order: 1,
  },
  {
    image_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576216/vue_epssdp.svg`,
    name: "Vue.js",
    yoe: 2,
    type: "Frontend",
    order: 1,
  },
];

export const experiences: ExperienceType[] = [
  {
    title: "Frontend Technical Lead",
    company_name: "GearGames • HCMC",
    company_link: "https://geargames.com/",
    icon: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576158/geargames_y_qi2fra.jpg`,
    icon_bg: "#FFFFFF",
    date: "April 2025 - Present",
    points: [
      "Performance Optimization: Reduced load times by 70% and improved Core Web Vitals by 45% through strategic caching, lazy loading, and bundle optimization, significantly increasing user engagement.",
      "Frontend Architecture: Enhanced UI rendering efficiency with reusable custom hooks and modular design system, improving code quality and reducing development cycles.",
      "System Stabilization: Resolved critical API integration issues causing excessive calls, implementing efficient caching solutions that reduced backend load and prevented outages.",
      "Technical Leadership: Led migration to React 18 and Redux-Saga while implementing monitoring systems that reduced incident resolution time by 80%.",
      "Security Enhancement: Deployed multi-layered security with CSP, CSRF protection, and encryption, eliminating 95% of identified vulnerabilities.",
      "3D Development: Created immersive WebGL/Three.js experiences with optimized performance, increasing user retention by 35%.",
      "Team Leadership: Guided six engineers to 100% on-time milestone delivery while optimizing Agile processes, reducing time-to-market by 40%.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "GearGames • HCMC",
    company_link: "https://geargames.com/",
    icon: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576158/geargames_y_qi2fra.jpg`,
    icon_bg: "#FFFFFF",
    date: "December 2024 - April 2025",
    points: [
      "Performance Optimization: Engineered caching solutions and lazy loading techniques that reduced load times by 70% and improved Core Web Vitals metrics.",
      "Frontend Development: Improved UI rendering and code quality through custom React hooks and strategic component refactoring.",
      "System Stability: Resolved critical API integration issues causing excessive calls, significantly reducing backend load.",
      "Architecture Planning: Contributed to React 18 and Redux-Saga migration planning while developing effective monitoring solutions.",
      "Security Implementation: Designed robust security measures with CSP, CSRF protection, and encryption, eliminating 95% of vulnerabilities.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "NUS Technology • HCMC",
    company_link: "https://nustechnology.com/",
    icon: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576153/NUS_vkbdab.png`,
    icon_bg: "#accbe1",
    date: "December 2021 - December 2024",
    points: [
      "Diverse Project Experience: Contributed to over 10 projects across various industries, including E-commerce, Travel, Construction, Education, Stock, CMS, Security, and Logistics",
      "CI/CD System Construction: Established a CI/CD system on GitHub, streamlining code quality analysis and saving significant development time by assisting teammates in code quality evaluation and improvement strategies",
      "Payment System Integration: Implemented the Stripe payment mechanism within applications, facilitating easier user payments and managing complex payment cycles through direct client consultations.",
      "Interface and Performance Strategy: Developed a strategy that enhanced the user interface and doubled the access speed by delivering rapid and high-quality images.",
      `Multi-Stage Delivery Pipeline: Configured a multi-stage Delivery Pipeline in GKE that
              automated the workflow from code commit to deployment, incorporating custom build steps,
              integrating unit and integration tests, and ensuring artifact storage in Container Registry.`,
      `Multilingual Application Development: Built applications in Golang and NodeJS on an open platform, enabling simultaneous site construction in two languages. Also developed custom Oauth2 authentication using Golang and Authlete.`,
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "GPT Group",
    company_link: "https://www.gptgroup.net/",
    icon: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576157/GPT_wpeqe5.png`,
    icon_bg: "#fbc3bc",
    date: "Jan 2021 - November 2021",
    points: [
      "Project Contribution: Played a pivotal role in over 2 major projects, focusing on enhancing code quality and providing crucial code reviews for team members.",
      "Sprint Planning and Management: Determined sprint goals and task lists for each sprint, collaborating with team members to accurately estimate the time and resources needed for each task",
      "Project Ownership and Quality Assurance: Took full ownership of projects, ensuring the codebase was of the highest quality and managing technical debts effectively",
      "Architectural Leadership: Provided critical architectural and design direction, assessed risks, and evaluated the impact of new features and implementations on the system’s integrity.",
      "Code Refactoring and Efficiency: Led efforts in refactoring and creating reusable components, resulting in a significant  reduction of over 200 development hours monthly",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Freelancer",
    company_link: "#",
    icon: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576159/husay_pz7car.png`,
    icon_bg: "#b7e4c7",
    date: "2019 - December 2020",
    points: [
      "Adaptive Responsive Design: Implemented advanced responsive design techniques, enabling optimal application use across diverse devices.",
      "JWT Authentication and Authorization: Integrated JWT for robust authentication and authorization processes.",
      "Continuous Learning and Tech Upgrades: Embracing a growth mindset, frontend developers continually seek out new technologies, tools, and methodologies to stay updated with the rapidly evolving landscape of web development. This proactive approach involves engaging in online courses, attending workshops, reading industry blogs, and participating in developer communities to expand knowledge and skill sets.",
      "Championing Single-Page Application Development: Architected a sophisticated single-page application leveraging React, Redux, and TypeScript, fostering efficient navigation and resource utilization within the organizational ecosystem.",
      "Problem-Solving and Research: Frontend developers excel in problem-solving by meticulously researching and analyzing various solutions to address complex technical challenges. They leverage resources such as documentation, forums, and peer collaboration to explore alternative approaches, troubleshoot issues, and implement robust solutions that meet project requirements effectively. This dedication to thorough problem-solving ensures the delivery of high-quality and innovative frontend solutions.",
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
    link: "https://app.daily.dev/squads/faqsinterview?cid=squad&userid=sAnreL24q5LH7f9XxP9xZ",
  },
  {
    name: "LinkedIn",
    icon_url: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576250/linkedin_k7tdcy.svg`,
    link: "https://www.linkedin.com/in/hoai-nho/",
  },
];

export const projects = [
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
    name: "TOP 3 - Hutech Innovative software 2021",
    badge: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576258/logo-hutech_hzuixe.png`,
    link: "https://www.hutech.edu.vn/homepage/tin-tuc/hoat-dong-sinh-vien/14598488-vong-chung-ket-phan-mem-sang-tao-2021-kich-tinh-va-gay-can-voi-loat-de-tai-thu-vi",
  },
  {
    name: "TOP 10 - Hutech IT Got talent 2021",
    badge: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576258/logo-hutech_hzuixe.png`,
    link: "#",
  },
];
