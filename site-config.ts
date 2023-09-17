export interface TeamMember {
  id: string;
  notionId?: string;
  name: string;
  description: string;
  displayOnTeamPage?: boolean;
  avatar?: string;
  twitter?: string;
}

interface Link {
  title: string;
  href: string;
}

interface NavLink extends Link {
  private?: boolean;
}

export interface SiteConfig {
  title: string;
  description: string;
  siteUrl: string;
  siteLanguage: string;
  sinceYear: number;

  // social
  email: string;
  twitter: string;
  github?: string;

  // team
  team: TeamMember[];

  navigation: NavLink[];
  privateNavigation: NavLink[];
  footerNavigation: NavLink[];

  notion: {
    databases: {
      roadmap: string;
      guides: string;
      materials: string;
      sprints: string;
      todos: string;
      blog: string;
      pages: string;
    };
  };
}

const siteConfig: SiteConfig = {
  title: "knihovna.ai",
  description: "",
  siteUrl: "https://knihovna.ai",
  siteLanguage: "cs",
  sinceYear: 2023,
  email: "kiskxai@gmail.com",
  twitter: "https://twitter.com/knihovna_ai",
  team: [
    {
      id: "skyrik",
      name: "Petr Škyřík",
      description: "",
      avatar: "/avatars/petr-skyrik.jpeg",
      displayOnTeamPage: true,
      notionId: "2d28f926-1996-495f-b35f-b0caf7d596ff",
    },
    {
      id: "kacova",
      name: "Natálie Káčová",
      description: "PM",
      avatar: "/avatars/natalie-kacova.jpeg",
      displayOnTeamPage: true,
      notionId: "1773415b-2754-4fb3-86e7-98b34cd6dc75",
    },
    {
      id: "tokmakova",
      name: "Evgeniia Tokmakova",
      description: "Výzkum",
      avatar: "/avatars/evgeniia-tokmakova.jpg",
      displayOnTeamPage: true,
      notionId: "45fca58e-b967-43ac-a91b-26d46d03cbfe",
    },
    {
      id: "penkava",
      name: "Matěj Pěnkava",
      description: "Výzkum",
      avatar: "/avatars/placeholder.jpg",
      displayOnTeamPage: true,
      notionId: "c5e1786f-5fe9-4836-9405-4637eef4d8e0",
    },
    {
      id: "aldabaghova",
      name: "Jasmína Aldabaghová",
      description: "Výzkum",
      avatar: "/avatars/jasmina-aldabaghova.jpg",
      displayOnTeamPage: true,
      notionId: "25268f38-469b-4267-b734-1c694065547c",
    },
    {
      id: "cernocky",
      name: "Dalibor Černocký",
      description: "Výzkum",
      avatar: "/avatars/dalibor-cernocky.png",
      displayOnTeamPage: true,
      notionId: "eb9e1b42-ce12-4573-a9ca-073a33bdeedb",
    },
    {
      id: "jana",
      avatar: "/avatars/placeholder.jpg",
      name: "Jana",
      description: "Výzkum",
      displayOnTeamPage: false,
      notionId: "5bc11fff-07a4-4daf-93db-ae1acd25ea43",
    },
    {
      id: "knihovnaai",
      name: "Tým Knihovna.ai",
      description: "",
      avatar: "/logo-clean-a.png",
      displayOnTeamPage: false,
      notionId: "069b2264-1acd-4634-8cb5-bd9748b3ebbc",
    },
  ],
  navigation: [
    { title: "Domů", href: "/" },
    // { title: "Průvodce AI", href: "/prirucky/ai" },
    // { title: "Materiály", href: "/materialy" },
    // { title: "Otevřený projekt", href: "/open" },
    { title: "Blog", href: "/blog" },
    { title: "Náš tým", href: "/tym" },
    { title: "O projektu", href: "/o-projektu" },
  ],
  privateNavigation: [
    { title: "Materiály", href: "/materialy", private: true },
    {
      title: "Příručka pro knihovníky",
      href: "/materialy/prirucka",
      private: true,
    },
    { title: "Nástroje", href: "/materialy/nastroje", private: true },
    { title: "Otevřený projekt", href: "/prehled", private: true },
    { title: "Design", href: "/design", private: true },
  ],
  footerNavigation: [
    { title: "Blog", href: "/blog" },
    { title: "Náš tým", href: "/tym" },
    { title: "O projektu", href: "/o-projektu" },
  ],
  notion: {
    databases: {
      roadmap: "664e6b73ea50434cbaad7d120c149446",
      guides: "8c335836b8244d5b8868aa342c49d3c2",
      materials: "ddce45ad40974edfa0746df7f3f6ecd4",
      todos: "b9a43c293aa64860b94c3c3f04d0d5e2",
      sprints: "bc7967210a6142b3b97b841e6a004c96",
      blog: "dda06928f2984f679a888e35278099ee",
      pages: "e6c36c8358ca42a1b4c26310955b9b62",
    },
  },
};

export default siteConfig;
