export type TechCategory = {
  name: string;
  items: string[];
};

export const techStack: TechCategory[] = [
  {
    name: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "AI / ML",
    items: ["OpenAI", "Anthropic", "LangChain", "Hugging Face", "PyTorch"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Python", "FastAPI", "GraphQL", "tRPC"],
  },
  {
    name: "Data",
    items: ["PostgreSQL", "Pinecone", "Redis", "Snowflake", "Kafka"],
  },
  {
    name: "Infra",
    items: ["AWS", "Vercel", "Docker", "Kubernetes", "Terraform"],
  },
];
