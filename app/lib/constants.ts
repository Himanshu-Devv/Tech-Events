export type Event = {
  id: string;
  title: string;
  date: string; // ISO date
  time: string; // 24-hour format
  location: string;
  image: string;
  url: string;
  description: string;
  tags: string[];
  online?: boolean;
};

export const events: Event[] = [
  {
    id: "nextjs-conf-2026",
    title: "Next.js Conf 2026",
    date: "2026-10-07",
    time: "09:00",
    location: "San Francisco, CA, USA",
    image: "/images/event1.png",
    url: "https://nextjs.org/conf",
    description:
      "Official Next.js conference — in-depth talks, workshops, and the latest announcements from Vercel and the Next.js team.",
    tags: ["nextjs", "react", "server-side", "performance"],
    online: false,
  },
  {
    id: "react-summit-2026",
    title: "React Summit 2026",
    date: "2026-04-22",
    time: "10:00",
    location: "Amsterdam, Netherlands",
    image: "/images/event2.png",
    url: "https://reactsummit.com",
    description:
      "Large React-focused conference with keynotes, workshops and community tracks covering React, React Native and the wider ecosystem.",
    tags: ["react", "javascript", "frontend"],
    online: false,
  },
  {
    id: "jsconf-eu-2026",
    title: "JSConf EU 2026",
    date: "2026-05-14",
    time: "09:30",
    location: "Berlin, Germany",
    image: "/images/event3.png",
    url: "https://jsconf.eu",
    description:
      "Independent JavaScript conference with a diverse set of talks on language features, tooling and web platform advancements.",
    tags: ["javascript", "web", "performance"],
    online: false,
  },
  {
    id: "google-io-2026",
    title: "Google I/O 2026",
    date: "2026-05-19",
    time: "10:00",
    location: "Shoreline Amphitheatre / Online",
    image: "/images/event4.png",
    url: "https://events.google.com/io",
    description:
      "Google's annual developer conference — platform updates across Android, Google Cloud, web and AI with livestreamed keynotes.",
    tags: ["google", "android", "cloud", "ai"],
    online: true,
  },
  {
    id: "kubecon-eu-2026",
    title: "KubeCon + CloudNativeCon Europe 2026",
    date: "2026-03-02",
    time: "08:30",
    location: "Amsterdam, Netherlands",
    image: "/images/event5.png",
    url: "https://events.linuxfoundation.org/kubecon-cloudnativecon-europe",
    description:
      "Leading conference for Kubernetes and cloud native technologies — operator meetups, case studies and deep technical sessions.",
    tags: ["kubernetes", "cloud", "devops"],
    online: false,
  },
  {
    id: "ethdenver-2026",
    title: "ETHDenver 2026",
    date: "2026-02-15",
    time: "09:00",
    location: "Denver, CO, USA",
    image: "/images/event6.png",
    url: "https://www.ethdenver.com",
    description:
      "Community-driven Ethereum & Web3 festival with hackathons, workshops, and networking for builders and researchers.",
    tags: ["web3", "ethereum", "blockchain", "hackathon"],
    online: false,
  },
];
