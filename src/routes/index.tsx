import { createFileRoute } from "@tanstack/react-router";
import heroTexture from "@/assets/hero-texture.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elias Alam — Senior Full Stack Engineer" },
      {
        name: "description",
        content:
          "10+ years building scalable cloud-native web apps, SaaS platforms and AI-powered features with TypeScript, React, Node.js and AWS.",
      },
      { property: "og:title", content: "Elias Alam — Senior Full Stack Engineer" },
      {
        property: "og:description",
        content:
          "10+ years building scalable cloud-native web apps, SaaS platforms and AI-powered features with TypeScript, React, Node.js and AWS.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Node.js", "PHP", "Python", "Bash / Shell"],
  },
  {
    group: "Frontend",
    items: [
      "React.js",
      "React Native",
      "Next.js",
      "Vue.js",
      "Angular",
      "Tailwind CSS",
      "Shadcn UI",
      "Material UI",
      "Redux / Zustand",
      "React Query",
      "Micro-frontends",
      "SPA & SSR",
      "Accessibility",
    ],
  },
  {
    group: "Backend",
    items: [
      "Express.js",
      "Fastify",
      "NestJS",
      "Laravel",
      "REST APIs",
      "GraphQL",
      "JWT / OAuth2",
      "WebSockets",
      "Event-driven & microservices",
    ],
  },
  {
    group: "Data & Caching",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Prisma",
      "Drizzle",
      "Schema design",
      "Indexing & query tuning",
    ],
  },
  {
    group: "DevOps & Cloud",
    items: [
      "AWS",
      "Azure",
      "Docker & Compose",
      "Kubernetes",
      "Terraform / IaC",
      "GitHub Actions",
      "GitLab CI",
      "Jenkins",
      "Nginx",
      "Linux",
      "PM2",
    ],
  },
  {
    group: "Quality & Security",
    items: [
      "Sentry",
      "Datadog",
      "Prometheus",
      "Observability",
      "Jest",
      "Playwright",
      "Cypress",
      "Mocha",
      "Test design",
      "Secrets management",
      "Load optimization",
    ],
  },
  {
    group: "AI / ML",
    items: ["OpenAI & Azure OpenAI", "LLM APIs", "RAG pipelines", "Semantic search", "GenAI"],
  },
  {
    group: "Architecture",
    items: [
      "Scalable system design",
      "High availability",
      "Clean architecture & SOLID",
      "Agile / Scrum",
      "Code review & mentoring",
    ],
  },
];

const experience = [
  {
    role: "Senior Full Stack Engineer",
    company: "Addcode",
    period: "Aug 2021 — Present",
    location: "Dortmund, Germany (Remote)",
    stack: ["React", "React Native", "Next.js", "NestJS", "Terraform", "AWS", "Azure", "LLM APIs"],
    points: [
      "Owned end-to-end design and delivery of scalable, cloud-native web and mobile apps with React, React Native, Next.js, Express, NestJS and TypeScript, including AI-powered features via LLM APIs.",
      "Defined system architecture for high-availability, microservices-based platforms with performance, security and maintainability in mind.",
      "Built backend services on PostgreSQL and MongoDB with Prisma ORM — schemas, migrations, indexes and query optimization for high-traffic workloads.",
      "Owned DevOps: CI/CD with GitHub Actions and GitLab CI, Docker containerization, deployments to AWS, Azure and Kubernetes, with Terraform for reproducible environments.",
      "Built and optimized REST and GraphQL APIs with JWT and OAuth2, integrating third-party services across customer and internal workflows.",
      "Improved performance through profiling, Redis caching, database tuning and load testing.",
      "Integrated AI/LLM systems including RAG pipelines and semantic search for intelligent, data-driven features.",
      "Established monitoring and observability with Sentry, Datadog and Prometheus, reducing production incidents and MTTR.",
      "Mentored engineers through code reviews, architectural guidance and technical decision-making.",
    ],
  },
  {
    role: "Senior Full Stack Engineer",
    company: "Info Support International Group B.V.",
    period: "Apr 2018 — Jul 2021",
    location: "Veenendaal, Netherlands (Remote)",
    stack: ["React", "Angular", "Node.js", "Python", "RabbitMQ", "Kafka", "Jenkins"],
    points: [
      "Developed and maintained enterprise-grade full-stack applications with React, Angular, Node.js and Python.",
      "Designed RESTful APIs and event-driven services supporting complex business workflows.",
      "Contributed to microservices architecture and service-to-service communication over RabbitMQ and Kafka.",
      "Optimized SQL and NoSQL databases (PostgreSQL, MySQL, MongoDB) through indexing, query tuning and schema design.",
      "Automated build, test and deployment pipelines with Jenkins and GitLab CI, improving release speed and stability.",
      "Wrote unit, integration and end-to-end tests (Jest, Mocha, Cypress) applying test design principles.",
      "Supported production systems, troubleshooting incidents and improving resilience and monitoring.",
    ],
  },
  {
    role: "Software Developer",
    company: "One IT @ University of California, Berkeley",
    period: "Jul 2016 — Mar 2018",
    location: "Berkeley, United States (Hybrid)",
    stack: ["JavaScript", "Node.js", "Python", "SQL", "Linux"],
    points: [
      "Built and maintained internal web applications and services supporting university operations and student systems.",
      "Developed accessible, usable frontend interfaces with JavaScript frameworks, HTML5 and CSS3.",
      "Implemented backend services and APIs in Node.js and Python, integrating internal and third-party systems.",
      "Assisted in database development, maintenance and data migrations.",
      "Automated administrative and operational tasks with Python and shell scripting.",
    ],
  },
];

const stats = [
  { value: "10+", label: "Years shipping" },
  { value: "3", label: "Countries / remote teams" },
  { value: "AI", label: "RAG & LLM integrations" },
  { value: "24/7", label: "High-availability systems" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="font-display text-base font-semibold tracking-tight">
            Elias<span className="text-primary">.</span>Alam
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {[
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Experience", "#experience"],
              ["Education", "#education"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="mailto:happyelias215@gmail.com"
            className="rounded-md bg-primary px-4 py-2 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
          >
            Contact
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden border-b border-border">
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="label-mono">Romania · Hungary — available remote</p>
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.15] md:text-6xl">
            Senior Full Stack Engineer
            <span className="mt-3 block text-muted-foreground italic">
              building systems that scale.
            </span>
          </h1>
          <div className="mt-8 h-px w-24 bg-foreground" aria-hidden="true" />
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            10+ years designing and shipping cloud-native applications, AI-powered platforms and
            enterprise software — from concept to production. Deep frontend and backend expertise in
            TypeScript, React, Next.js and Node.js, with REST and GraphQL APIs, optimized databases,
            and AWS/Docker/CI-CD delivery pipelines.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="mailto:happyelias215@gmail.com"
              className="rounded-md bg-primary px-6 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
            >
              happyelias215@gmail.com
            </a>
            <a
              href="tel:+3619011020"
              className="rounded-md border border-border bg-surface px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:bg-surface-raised"
            >
              +36 1 901 1020
            </a>
          </div>

          <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-surface/90 px-6 py-6 backdrop-blur-sm">
                <dt className="font-display text-3xl font-semibold text-primary">{s.value}</dt>
                <dd className="label-mono mt-2">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[220px_1fr]">
          <div>
            <p className="label-mono">01 — About</p>
            <h2 className="mt-4 text-2xl font-semibold">Profile</h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              I&rsquo;m a senior full-stack engineer with a decade of experience designing and
              building scalable, cloud-native applications, AI-powered platforms and enterprise
              software solutions. I work comfortably across the stack — from accessible, performant
              React interfaces to event-driven Node.js services and the infrastructure they run on.
            </p>
            <p>
              I have a proven track record of delivering SaaS products from concept to production:
              secure and maintainable codebases, well-designed REST and GraphQL APIs, optimized
              PostgreSQL and MongoDB data layers, and AI-powered features built on LLM APIs and RAG
              pipelines. On the delivery side I own AWS and Azure environments, Docker, Kubernetes,
              Terraform and CI/CD so releases stay fast and predictable.
            </p>
            <p className="text-foreground">
              English — Advanced / fully working proficiency (C1). Based between Romania and
              Hungary, working with distributed teams across Europe and the US.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="label-mono">02 — Skills</p>
          <h2 className="mt-4 text-3xl font-semibold">Technical toolkit</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {skills.map((group) => (
              <div key={group.group} className="panel p-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
                  {group.group}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border bg-surface-raised px-2.5 py-1 text-sm text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="label-mono">03 — Experience</p>
          <h2 className="mt-4 text-3xl font-semibold">Where I&rsquo;ve built</h2>

          <div className="mt-14 space-y-14 border-l border-border pl-6 md:pl-10">
            {experience.map((job) => (
              <article key={job.company} className="relative">
                <span
                  className="absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full bg-primary md:-left-[47px]"
                  aria-hidden="true"
                />
                <p className="label-mono">
                  {job.period} · {job.location}
                </p>
                <h3 className="mt-3 text-xl font-semibold">
                  {job.role} <span className="text-primary">@ {job.company}</span>
                </h3>
                <ul className="mt-5 space-y-3">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="relative pl-5 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-primary/70"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[220px_1fr]">
          <div>
            <p className="label-mono">04 — Education</p>
            <h2 className="mt-4 text-2xl font-semibold">Background</h2>
          </div>
          <div className="panel p-8">
            <p className="label-mono">Aug 2014 — May 2018 · Berkeley, United States</p>
            <h3 className="mt-3 text-xl font-semibold">
              B.Sc. Computer Science
              <span className="block text-base font-normal text-primary">
                University of California, Berkeley
              </span>
            </h3>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer className="relative overflow-hidden">
        <div className="grid-lines absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <p className="label-mono">05 — Contact</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold md:text-5xl">
            Let&rsquo;s build something durable.
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
            <a
              href="mailto:happyelias215@gmail.com"
              className="bg-surface px-6 py-6 transition-colors hover:bg-surface-raised"
            >
              <p className="label-mono">Email</p>
              <p className="mt-2 text-sm">happyelias215@gmail.com</p>
            </a>
            <a
              href="tel:+3619011020"
              className="bg-surface px-6 py-6 transition-colors hover:bg-surface-raised"
            >
              <p className="label-mono">Phone</p>
              <p className="mt-2 text-sm">+36 1 901 1020</p>
            </a>
            <div className="bg-surface px-6 py-6">
              <p className="label-mono">Location</p>
              <p className="mt-2 text-sm">Romania · Hungary</p>
            </div>
          </div>
          <p className="mt-16 font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Elias Alam — Senior Full Stack Engineer
          </p>
        </div>
      </footer>
    </div>
  );
}
