import {
  ArrowUpRight,
  Brain,
  Code2,
  Database,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";
import "./index.css";

const profile = {
  name: "Harshit Kalra",
  email: "kalra.harshit04@gmail.com",
  github: "https://github.com/HarshitKalra04",
  linkedin: "https://www.linkedin.com/in/harshitkalra04",
  resume: "/Resume_HarshitKalra.pdf",
};

const projects = [
  {
    title: "AgroVision",
    subtitle: "AI-POWERED AGRICULTURAL INTELLIGENCE",
    description:
      "An AI-based platform that provides crop disease analysis and practical agricultural recommendations using image-based AI workflows.",
    tags: ["Python", "FastAPI", "OpenAI", "Gemini", "PostgreSQL"],
    points: [
      "Built a modular FastAPI backend for AI-powered agricultural workflows.",
      "Integrated OpenAI vision capabilities and Google Gemini APIs.",
      "Designed multi-run image analysis with confidence-based screening.",
      "Added multilingual recommendations for better accessibility.",
    ],
    link: "https://github.com/HarshitKalra04/SIH-FINALIST-AgroVision",
  },
  {
    title: "Bank Analytics",
    subtitle: "BANKING ANALYTICS & MACHINE LEARNING",
    description:
      "A business analytics platform combining forecasting, machine learning, and dashboards to explore banking performance and financial risk.",
    tags: ["Python", "Prophet", "Scikit-learn", "FastAPI", "PostgreSQL"],
    points: [
      "Built revenue forecasting using Prophet.",
      "Added Random Forest loan-default prediction.",
      "Created analytics for revenue, profit, ROI, NPA, and CAC.",
      "Implemented CSV ingestion and model insight workflows.",
    ],
    link: "https://github.com/HarshitKalra04/BankAnalytics",
  },
  {
    title: "Team Task Manager",
    subtitle: "ROLE-BASED COLLABORATION PLATFORM",
    description:
      "A full-stack task management application built around authentication, authorization, project workflows, and structured database design.",
    tags: ["Node.js", "Express", "PostgreSQL", "Prisma", "React"],
    points: [
      "Implemented JWT authentication and bcrypt password security.",
      "Added role-based access for admins, owners, and members.",
      "Built project and task workflows.",
      "Connected frontend flows with reusable API endpoints.",
    ],
    link: "https://github.com/HarshitKalra04/TeamTaskManager",
  },
];

const skillGroups = [
  {
    icon: Code2,
    title: "Technical Skills",
    skills: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-learn",
      "OpenAI API",
      "Google Gemini API",
      "Prompt Engineering",
      "LLM Evaluation",
      "LLM Post-Training",
    ],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    skills: [
      "Machine Learning",
      "Classification",
      "Forecasting",
      "Data Analysis",
      "Generative AI",
    ],
  },
  {
    icon: Database,
    title: "Backend & Tools",
    skills: [
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Git",
      "GitHub",
    ],
  },
  {
    icon: Sparkles,
    title: "Soft Skills",
    skills: [
      "Interpersonal Awareness",
      "Leadership",
      "Work Ethic",
      "Adaptability",
      "Problem Solving",
      "Brainstorming",
      "Quick Learner",
    ],
  },
];

const experience = [
  {
    company: "Ethara.AI",
    role: "LLM Post-Training Intern",
    period: "Internship",
    description:
      "Evaluated and annotated LLM responses across multi-turn prompts, focusing on accuracy, relevance, truthfulness, instruction adherence, and overall response quality.",
  },
  {
    company: "ValleSoft",
    role: "QA Tester Intern",
    period: "Internship",
    description:
      "Performed functional, UI, regression, and performance testing, logged bugs, and collaborated with development and product teams on the Minus application.",
  },
];

const certifications = [
  "AWS Academy Graduate – AWS Academy Data Engineering",
  "Microsoft Certified – Azure AI Fundamentals",
  "Advanced MongoDB Certification",
];

const extracurriculars = [
  "Member of the National Service Scheme (NSS), Ministry of Youth Affairs & Sports (MYAS), Govt. of India (2022–26)",
  "Vice President, Career Service & Alumni Relations (CSAR), NCU (2024–25)",
  "President, Career Service & Alumni Relations (CSAR), NCU (2025–26)",
  "Member of Administrative Board, Unnat Bharat Abhiyan (UBA), NCU (2025–26)",
  "Core Coordinator, Annual Cultural & Technical Fest, NCU (2025)",
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <a href="#home" className="logo">
        HK<span>.</span>
      </a>

      <nav className={open ? "nav-links active" : "nav-links"}>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>
        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>
        <a href="#experience" onClick={closeMenu}>
          Experience
        </a>
        <a href="#certifications" onClick={closeMenu}>
          Certifications
        </a>
        <a href="#leadership" onClick={closeMenu}>
          Leadership
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>

      <a className="nav-resume" href={profile.resume} download>
        Resume <Download size={15} />
      </a>

      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}

function ProjectCard({ project, featured }) {
  return (
    <article className={`project-card ${featured ? "featured" : ""}`}>
      <div className="project-card-top">
        <span className="project-number">PROJECT</span>

        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="project-arrow"
          aria-label={`Open ${project.title}`}
        >
          <ArrowUpRight size={19} />
        </a>
      </div>

      <p className="project-subtitle">{project.subtitle}</p>

      <h3>{project.title}</h3>

      <p className="project-description">{project.description}</p>

      <div className="tag-list">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className="project-points">
        {project.points.map((point) => (
          <p key={point}>
            <span>+</span>
            {point}
          </p>
        ))}
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        View project <ArrowUpRight size={15} />
      </a>
    </article>
  );
}

function App() {
  return (
    <div className="app">
      <div className="background-noise" />

      <Navbar />

      <main>
        {/* HERO */}
        <section id="home" className="hero section">
          <div className="hero-content">
            <div className="availability">
              <span />
              Open to opportunities
            </div>

            <p className="eyebrow">
              AI / ML · DATA SCIENCE · GENERATIVE AI
            </p>

            <h1>
              Building intelligent
              <br />
              <span>systems with data.</span>
            </h1>

            <p className="hero-description">
              I am Harshit Kalra, a Computer Science graduate specializing in
              Data Science. I build practical solutions using Python, machine
              learning, APIs, and Generative AI.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="button button-light">
                Explore my work <ArrowUpRight size={17} />
              </a>

              <a
                href={profile.resume}
                download
                className="button button-outline"
              >
                Download resume <Download size={16} />
              </a>
            </div>

            <div className="social-links">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub
              </a>

              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={17} /> LinkedIn
              </a>

              <a href="mailto:kalra.harshit04@gmail.com">
                <Mail size={17} /> Email
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-grid" />
            <div className="glow glow-purple" />
            <div className="glow glow-cyan" />

            <div className="code-window">
              <div className="window-header">
                <span />
                <span />
                <span />
              </div>

              <div className="code-content">
                <p className="code-muted"># building with AI</p>

                <p>
                  <b>model</b> = <i>"practical"</i>
                </p>

                <p>
                  <b>data</b> = analyze(<i>"real problems"</i>)
                </p>

                <p>
                  <b>solution</b> = build(data, model)
                </p>

                <p className="code-success">✓ deployed_with_purpose</p>
              </div>
            </div>

            <div className="floating-tag tag-genai">
              <Sparkles size={14} /> GenAI
            </div>

            <div className="floating-tag tag-data">
              <Database size={14} /> Data
            </div>
          </div>
        </section>

        {/* ABOUT ME */}
        <section id="about" className="section bordered-section">
          <div className="section-label">
            <p>ABOUT ME</p>
          </div>

          <div className="two-column">
            <h2>
              Curious about data.
              <br />
              <span>Serious about building.</span>
            </h2>

            <div className="about-text">
              <p>
                I am a Computer Science graduate with a specialization in Data
                Science, focused on AI/ML, analytics, and Generative AI. My
                work combines data, models, and software to create solutions
                that are useful beyond a notebook.
              </p>

              <p>
                I have also gained hands on experience in LLM post training and
                software QA, giving me exposure to both AI evaluation and
                product quality.
              </p>

              <div className="facts">
                <div>
                  <strong>B.Tech</strong>
                  <span>CSE · Data Science</span>
                </div>

                <div>
                  <strong>2</strong>
                  <span>Industry internships</span>
                </div>

                <div>
                  <strong>SIH 2025</strong>
                  <span>Grand Finalist</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="section-label">
            <p>SKILLS</p>
          </div>

          <div className="skills-grid">
            {skillGroups.map(({ icon: Icon, title, skills }) => (
              <article className="skill-card" key={title}>
                <div className="skill-icon">
                  <Icon size={19} />
                </div>

                <h3>{title}</h3>

                <div className="skill-tags">
                  {skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section bordered-section">
          <div className="section-label">
            <p>PROJECTS</p>
          </div>

          <div className="section-heading-row">
            <h2>
              Projects built to
              <br />
              <span>solve problems.</span>
            </h2>

            <p>
              A selection of AI, ML, analytics, and software projects I have
              worked on.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                featured={index === 0}
              />
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <div className="section-label">
            <p>EXPERIENCE</p>
          </div>

          <div className="two-column experience-layout">
            <h2>
              Learning by
              <br />
              <span>building in the real world.</span>
            </h2>

            <div className="timeline">
              {experience.map((item) => (
                <article className="experience-item" key={item.company}>
                  <div className="timeline-dot" />

                  <p className="experience-meta">
                    {item.period} · {item.company}
                  </p>

                  <h3>{item.role}</h3>

                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section
          id="certifications"
          className="section bordered-section"
        >
          <div className="section-label">
            <p>CERTIFICATIONS</p>
          </div>

          <div className="certifications-list">
            {certifications.map((certification) => (
              <article
                className="certification-item"
                key={certification}
              >
                <p>{certification}</p>
              </article>
            ))}
          </div>
        </section>

        {/* LEADERSHIP & EXTRACURRICULARS */}
        <section id="leadership" className="section">
          <div className="section-label">
            <p>LEADERSHIP & EXTRACURRICULARS</p>
          </div>

          <div className="extracurricular-list">
            {extracurriculars.map((item) => (
              <article
                className="extracurricular-item"
                key={item}
              >
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENT */}
        <section className="section achievement-section">
          <div className="achievement-box">
            <div>
              <p className="eyebrow">ACHIEVEMENT</p>

              <h2>
                Smart India Hackathon <span>2025</span>
              </h2>

              <p>Grand Finalist · All-India Software Edition</p>
            </div>

            <div className="achievement-mark">
              SIH
              <small>25</small>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="section bordered-section contact-section"
        >
          <div className="contact-content">
            <p className="eyebrow">LET'S CONNECT</p>

            <h2>
              Have an opportunity?
              <br />
              <span>Let's talk.</span>
            </h2>

            <p className="contact-description">
              I am currently exploring opportunities in AI/ML, Data Science,
              Data Analytics, and Generative AI.
            </p>

            <a
              href="mailto:kalra.harshit04@gmail.com"
              className="button button-light contact-button"
            >
              Start a conversation <Mail size={17} />
            </a>

            <div className="contact-links">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github size={18} /> GitHub <ArrowUpRight size={14} />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} /> LinkedIn <ArrowUpRight size={14} />
              </a>

              <a href={profile.resume} download>
                <Download size={18} /> Resume
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Harshit Kalra</span>
        <span>Built with React · Designed for impact</span>
      </footer>
    </div>
  );
}

export default App;