import type { IconComponent } from "@/types/content";
import { BarChart, Bolt, Eye, MessageSquare } from "@/components/shared/icons";

export type Product = {
  icon: IconComponent;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  href: string;
};

export const products: Product[] = [
  {
    icon: MessageSquare,
    name: "Copilot Studio",
    tagline: "Conversational AI",
    description:
      "Build domain-aware copilots with retrieval, tools, and guardrails — production-ready in weeks.",
    features: ["RAG + tool use", "Evaluation suite", "Streaming UI"],
    href: "#contact",
  },
  {
    icon: Bolt,
    name: "AutoPilot Engine",
    tagline: "Automation",
    description:
      "Orchestrate multi-step agentic workflows that act across your stack with human-in-the-loop control.",
    features: ["Agent orchestration", "100+ integrations", "Audit trails"],
    href: "#contact",
  },
  {
    icon: BarChart,
    name: "Insight Analytics",
    tagline: "Intelligence",
    description:
      "Turn product and model telemetry into decisions with real-time dashboards and anomaly alerts.",
    features: ["Live dashboards", "Anomaly detection", "Cost tracking"],
    href: "#contact",
  },
  {
    icon: Eye,
    name: "Vision Suite",
    tagline: "Multimodal",
    description:
      "Extract structure from documents, images, and video with accuracy your team can trust.",
    features: ["Document AI", "Image understanding", "OCR + layout"],
    href: "#contact",
  },
];
