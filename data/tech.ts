export type TechCategory = {
  name: string;
  items: string[];
};

export const techStack: TechCategory[] = [
  {
    name: "Laravel / PHP",
    items: ["Laravel", "PHP", "Blade", "Composer", "REST APIs"],
  },
  {
    name: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React.js", "Vue.js", "AngularJS"],
  },
  {
    name: "Backend / Realtime",
    items: ["Node.js", "WebSocket", "Queues", "Jobs", "Supervisor"],
  },
  {
    name: "Data / Cache",
    items: ["MySQL", "SQLite", "MongoDB", "Redis", "Memcached"],
  },
  {
    name: "Security",
    items: ["CSRF protection", "Argon2 hashing", "Encryption", "Secure sessions"],
  },
  {
    name: "Cloud Servers",
    items: ["Linode", "AWS", "DigitalOcean", "Google Cloud", "Linux"],
  },
  {
    name: "AI Implementation",
    items: ["AI chat", "Dashboards", "Sentiment", "Stock prediction", "Stock alerts"],
  },
  {
    name: "Shopify",
    items: ["Theme setup", "Shopify apps", "Metaobjects", "Checkout notices", "Admin API"],
  },
];
