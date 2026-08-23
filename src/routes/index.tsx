import { createFileRoute } from "@tanstack/react-router";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import addcodeSaasImg from "@/assets/project-addcode-saas.jpg.asset.json";
import addcodeAiImg from "@/assets/project-addcode-ai.jpg.asset.json";
import infoSupportMicroservicesImg from "@/assets/project-infosupport-microservices.jpg.asset.json";
import infoSupportEventsImg from "@/assets/project-infosupport-events.jpg.asset.json";

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
  { value: "2+", label: "Countries / remote teams" },
  { value: "AI", label: "RAG & LLM integrations" },
  { value: "24/7", label: "High-availability systems" },
];

const projects = [
  {
    title: "Cloud-Native SaaS Platform",
    company: "Addcode",
    location: "Dortmund, Germany",
    image: addcodeSaasImg.url,
    description:
      "End-to-end design and delivery of a scalable SaaS platform serving high-traffic workloads with React, Next.js and NestJS.",
    stack: ["React", "Next.js", "NestJS", "PostgreSQL", "AWS", "Terraform"],
  },
  {
    title: "AI-Powered Mobile Assistant",
    company: "Addcode",
    location: "Dortmund, Germany",
    image: addcodeAiImg.url,
    description:
      "React Native app integrating LLM APIs and RAG pipelines to deliver intelligent, context-aware assistance to users.",
    stack: ["React Native", "LLM APIs", "RAG", "Node.js", "Azure"],
  },
  {
    title: "Enterprise Microservices Architecture",
    company: "Info Support International Group B.V.",
    location: "Veenendaal, Netherlands",
    image: infoSupportMicroservicesImg.url,
    description:
      "Microservices-based platform with service-to-service communication over RabbitMQ and Kafka for complex enterprise workflows.",
    stack: ["React", "Angular", "Node.js", "RabbitMQ", "Kafka", "Jenkins"],
  },
  {
    title: "Event-Driven Workflow Platform",
    company: "Info Support International Group B.V.",
    location: "Veenendaal, Netherlands",
    image: infoSupportEventsImg.url,
    description:
      "Real-time data pipeline and workflow orchestration system connecting distributed services across event streams.",
    stack: ["Python", "Node.js", "PostgreSQL", "MongoDB", "CI/CD"],
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="font-display text-base font-semibold tracking-tight">
            Elias Alam
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {[
              ["Projects", "#projects"],
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
            className="rounded-sm bg-primary px-4 py-2 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
          >
            Contact
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden border-b border-border">
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="label-mono">Bucharest, Romania — available remote</p>
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.15] md:text-6xl">
            Senior Full Stack Engineer
          </h1>
          <div className="mt-8 h-px w-24 bg-foreground" aria-hidden="true" />
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="mailto:happyelias215@gmail.com"
              className="rounded-sm bg-primary px-6 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-85"
            >
              happyelias215@gmail.com
            </a>
            <a
              href="tel:+40770123456"
              className="rounded-sm border border-foreground/25 bg-surface px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:bg-surface-raised"
            >
              +40 770 123 456
            </a>
          </div>

          <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-surface px-6 py-7">
                <dt className="font-display text-3xl text-foreground">{s.value}</dt>
                <dd className="label-mono mt-2">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="label-mono">01 — Projects</p>
          <h2 className="mt-4 text-3xl">Selected work</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Highlights from recent delivery at Addcode (Dortmund) and Info Support (Veenendaal).
          </p>

          <Carousel className="mt-14 w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-4">
              {projects.map((project) => (
                <CarouselItem key={project.title} className="pl-4 md:basis-1/2">
                  <article className="panel group h-full overflow-hidden">
                    <div className="aspect-[3/2] overflow-hidden bg-surface">
                      <img
                        src={project.image}
                        alt={`${project.title} — ${project.company}`}
                        loading="lazy"
                        width={1200}
                        height={800}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <p className="label-mono">
                        {project.company} · {project.location}
                      </p>
                      <h3 className="mt-3 text-xl">{project.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <li
                            key={tech}
                            className="rounded-sm border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex items-center justify-end gap-2">
              <CarouselPrevious className="static translate-x-0 translate-y-0" />
              <CarouselNext className="static translate-x-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[220px_1fr]">
          <div>
            <p className="label-mono">01 — About</p>
            <h2 className="mt-4 text-2xl">Profile</h2>
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
              English — Advanced / fully working proficiency (C1). Based in Bucharest, Romania,
              working with distributed teams across Europe and the US.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="label-mono">02 — Skills</p>
          <h2 className="mt-4 text-3xl">Technical toolkit</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {skills.map((group) => (
              <div key={group.group} className="panel p-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-foreground">
                  {group.group}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-sm border border-border bg-background px-2.5 py-1 text-sm text-muted-foreground"
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
          <h2 className="mt-4 text-3xl">Where I&rsquo;ve built</h2>

          <div className="mt-14 space-y-14 border-l border-border pl-6 md:pl-10">
            {experience.map((job) => (
              <article key={job.company} className="relative">
                <span
                  className="absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full bg-foreground md:-left-[47px]"
                  aria-hidden="true"
                />
                <p className="label-mono">
                  {job.period} · {job.location}
                </p>
                <h3 className="mt-3 text-xl">
                  {job.role} <span className="italic text-muted-foreground">— {job.company}</span>
                </h3>
                <ul className="mt-5 space-y-3">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="relative pl-5 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-foreground/45"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-sm border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted-foreground"
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
            <h2 className="mt-4 text-2xl">Background</h2>
          </div>
          <div className="panel p-8">
            <p className="label-mono">Aug 2014 — May 2018 · Berkeley, United States</p>
            <h3 className="mt-3 text-xl">
              B.Sc. Computer Science
              <span className="mt-1 block font-sans text-base font-normal text-muted-foreground">
                University of California, Berkeley
              </span>
            </h3>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer className="relative">
        <div className="relative mx-auto max-w-6xl border-t border-border px-6 py-24">
          <p className="label-mono">05 — Contact</p>
          <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl">
            Let&rsquo;s build something durable.
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
            <a
              href="mailto:happyelias215@gmail.com"
              className="bg-surface px-6 py-6 transition-colors hover:bg-surface-raised"
            >
              <p className="label-mono">Email</p>
              <p className="mt-2 text-sm">happyelias215@gmail.com</p>
            </a>
            <a
              href="tel:+40770123456"
              className="bg-surface px-6 py-6 transition-colors hover:bg-surface-raised"
            >
              <p className="label-mono">Phone</p>
              <p className="mt-2 text-sm">+40 770 123 456</p>
            </a>
            <div className="bg-surface px-6 py-6">
              <p className="label-mono">Location</p>
              <p className="mt-2 text-sm">Bucharest, Romania</p>
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
