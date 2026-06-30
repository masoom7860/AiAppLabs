export type CaseStudy = {
  client: string;
  category: string;
  title: string;
  summary: string;
  metrics: { value: string; label: string }[];
  href: string;
};

export const caseStudies: CaseStudy[] = [
  {
    client: "Northstar",
    category: "Enterprise AI",
    title: "A multilingual support copilot that cut escalations by 41%",
    summary:
      "We designed and shipped a retrieval-grounded assistant that resolves tickets across 9 languages, with evaluation and guardrails baked in.",
    metrics: [
      { value: "41%", label: "fewer escalations" },
      { value: "3.2x", label: "faster resolution" },
      { value: "9", label: "languages" },
    ],
    href: "#contact",
  },
  {
    client: "FlowForge",
    category: "Automation",
    title: "An operations intelligence layer for real-time visibility",
    summary:
      "We built an agentic automation platform that unifies workflow data and surfaces anomalies before they become incidents.",
    metrics: [
      { value: "68%", label: "less manual work" },
      { value: "2.5x", label: "faster reporting" },
      { value: "99.9%", label: "uptime" },
    ],
    href: "#contact",
  },
];
