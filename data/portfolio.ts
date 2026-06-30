import type { PortfolioItem } from "@/types/content";

// `gradient` strings are full Tailwind class pairs so the scanner generates them.
export const portfolio: PortfolioItem[] = [
  {
    title: "Northstar Copilot",
    category: "Enterprise AI",
    description:
      "A multilingual support copilot with retrieval, tools, and guardrails that resolves tickets across nine languages.",
    technologies: ["Next.js", "OpenAI", "Pinecone", "LangChain"],
    result: "41% fewer escalations",
    gradient: "from-blue-600 to-violet-600",
    liveUrl: "#contact",
    caseUrl: "#contact",
  },
  {
    title: "FlowForge Analytics",
    category: "Automation",
    description:
      "An operations intelligence layer that unifies workflow data and surfaces anomalies before they become incidents — in real time.",
    technologies: ["React", "Python", "Kafka", "Snowflake"],
    result: "2.5x faster reporting",
    gradient: "from-cyan-500 to-blue-600",
    liveUrl: "#contact",
    caseUrl: "#contact",
  },
  {
    title: "Helio Vision",
    category: "Computer Vision",
    description: "Document and image understanding for high-volume back-office automation.",
    technologies: ["PyTorch", "FastAPI", "AWS"],
    result: "92% extraction accuracy",
    gradient: "from-violet-600 to-fuchsia-600",
    liveUrl: "#contact",
    caseUrl: "#contact",
  },
  {
    title: "Vantage Commerce",
    category: "E-commerce",
    description:
      "AI personalization, semantic search, and a support assistant that lifted conversion and average order value across millions of sessions.",
    technologies: ["Next.js", "tRPC", "Postgres", "Redis"],
    result: "+23% conversion",
    gradient: "from-sky-500 to-indigo-600",
    liveUrl: "#contact",
    caseUrl: "#contact",
  },
  {
    title: "Aurora Health",
    category: "Healthcare",
    description: "A clinical copilot with privacy-by-design that drafts notes and surfaces guidelines.",
    technologies: ["React Native", "Anthropic", "HIPAA"],
    result: "6 hrs saved / clinician / wk",
    gradient: "from-emerald-500 to-cyan-600",
    liveUrl: "#contact",
    caseUrl: "#contact",
  },
  {
    title: "Meridian Ops",
    category: "Agentic AI",
    description:
      "An agent platform that orchestrates multi-step workflows across the stack with human-in-the-loop control and full audit trails.",
    technologies: ["Next.js", "LangGraph", "Temporal", "GraphQL"],
    result: "68% less manual work",
    gradient: "from-indigo-600 to-purple-600",
    liveUrl: "#contact",
    caseUrl: "#contact",
  },
];
