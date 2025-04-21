export interface Card {
  date: string;
  category: string;
  title: string;
  description: string;
  link: string;
}

// Define the Cards object with all categories
export const cards: Record<string, Card[]> = {
  all: [
    {
      date: "20 Dec, 2025",
      category: "Marketing",
      title: "Empowering Communities, Shaping Tomorrow",
      description:
        "Our journey is driven by the belief that every African deserves better access to opportunities and improved living standards.",
      link: "/blog/empowering-communities",
    },
    {
      date: "20 Dec, 2025",
      category: "Company",
      title: "Innovating for a Brighter Future",
      description:
        "At the core of our mission is the desire to bring change. We focus on innovative solutions that uplift communities across the continent.",
      link: "/blog/innovating-for-a-brighter-future",
    },
    {
      date: "20 Dec, 2025",
      category: "Marketing",
      title: "Building Bridges, Not Walls",
      description:
        "We are committed to creating opportunities for Africans everywhere to access what they deserve, from basic services to dignified living.",
      link: "/blog/building-bridges",
    },
    {
      date: "20 Dec, 2025",
      category: "Marketing",
      title: "Access for All: The Future Starts Now",
      description:
        "By focusing on empowerment and dignity, we aim to ensure that access to essential services is a right, not a privilege.",
      link: "/blog/access-for-all",
    },
  ],
  marketing: [
    {
      date: "15 Dec, 2025",
      category: "Marketing",
      title: "Marketing Strategies for Growth",
      description:
        "Effective marketing strategies that have helped businesses across Africa grow and reach new audiences.",
      link: "/blog/marketing-strategies-growth",
    },
  ],
  company: [
    {
      date: "15 Dec, 2025",
      category: "Company",
      title: "Innovating for a Brighter Future",
      description:
        "At the core of our mission is the desire to bring change. We focus on innovative solutions that uplift communities across the continent.",
      link: "/blog/innovating-for-a-brighter-future",
    },
  ],
  resources: [],
};
