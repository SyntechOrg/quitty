export type Project = {
  slug: string;
  title: string;
  heroText: string;
  date: string;
  heroImage: string;
  heroInsideImage: string;
  heroTitle: string;
  liveUrl: string;
  services: string[];
  productType: string[];
  expertise: string[];
  release: string[];

  interactions: Array<{
    avatar: string | null;
    description: string;
    name: string;
    title: string;
  }>;
  mainChallenge: {
    title: string;
    description: string;
    imageUrl: string | null;
  };
  ourSolution: {
    title: string;
    description: string;
    imageUrl: string | null;
  };
  projectViewImageOne: string;
  projectViewImageTwo: string;
};

export const projects: Array<Project> = [
  {
    slug: "spandoekman",
    title: "Spandoekman",
    heroText: "Brand identity, design & development for luxury cruise booking",
    date: "2024-05-22",
    heroImage: "/images/projects/spandoekman/banner.png",
    heroInsideImage: "/images/projects/spandoekman/bannerInnerImage.png",
    heroTitle: "Brand identity, design & development for luxury cruise booking",
    liveUrl: "liveURL",
    services: ["UI UX Design", "Development"],
    productType: ["Website", "E-Commerce"],
    expertise: ["Frontend", "Shopify"],
    release: ["2024", "2024"],
    mainChallenge: {
      title: "We are more than just a team",
      description:
        "We are listeners, because we hear and listen. We are genies, who will grant more, than 3 wishes. We are a bunch of specialists, who know how to take care of every project step. We are Ministry",
      imageUrl: null,
    },
    ourSolution: {
      title: "We are more than just a team",
      description:
        "We are listeners, because we hear and listen. We are genies, who will grant more, than 3 wishes. We are a bunch of specialists, who know how to take care of every project step. We are Ministry",
      imageUrl: null,
    },
    projectViewImageOne: "/images/projects/spandoekman/showcase-1.png",
    projectViewImageTwo: "/images/projects/spandoekman/showcase-2.png",
    interactions: [
      {
        avatar: null,
        description: `Hi Syntech Team,
We're in a bit of a bind! Our online shop has been running since 2011 without any significant updates. It's high time for a major redesign. To effectively engage with potential clients, we recognize the urgent need for a revamped and impactful webshop presence. Can you assist us in this endeavor?`,
        name: "John Doe",
        title: "Designer",
      },
      {
        avatar: null,
        description: `Hi Timo,
Thanks for reaching out! It's with great pleasure that we assist you and the Spandoekman.nl Team with your vision. Your goal aligns perfectly with what we're great at here at Syntech Team.We've noted your request and wasted no time in executing your webshop vision. We're thrilled to unveil the results below. Brace yourselves for the excitement as we present your brand-new shop...`,
        name: "John Doe 2",
        title: "Designer",
      },
      {
        avatar: null,
        description: `Hi Syntech Team,
Wow, it looks incredible! It far exceeds our expectations. Even though we had high hopes, you've surpassed them and delivered beyond what we could have imagined. Thank you for your exceptional work. We're all set to launch. Cheers to the entire Syntech Team!`,
        name: "John Doe",
        title: "Designer",
      },
      {
        avatar: null,
        description: `Hi Timo,
Thank you so much for your kind words! We're thrilled that you're pleased with the outcome. It was a pleasure working with you and exceeding your expectations. We're excited to see your project take off and we're here to support you every step of the way.Cheers to a successful launch and continued success for your Online-Shop!`,
        name: "John Doe 2",
        title: "Designer",
      },
    ],
  },
  {
    slug: "soxey",
    title: "Soxey",
    heroText: "Visual presentation of the website for the online sale of socks",
    date: "2024-02",
    heroImage: "/images/projects/soxey/banner.png",
    heroInsideImage: "/images/projects/soxey/bannerInnerImage.png",
    heroTitle:
      "Visual presentation of the website for the online sale of socks",
    liveUrl: "liveURL",
    services: ["UI UX Design", "Development"],
    productType: ["Website", "E-Commerce"],
    expertise: ["Frontend", "Shopify"],
    release: ["2024", "Feb"],
    mainChallenge: {
      title: "Crafting a standout website in a competitive market.",
      description:
        "In a crowded online market, capturing potential customer interest is crucial. Socks, available in numerous styles, colors, and materials, pose a unique challenge. Balancing the presentation of this diverse product range on a website without overwhelming visitors requires careful consideration of layout, categorization, and visual hierarchy.",
      imageUrl: null,
    },
    ourSolution: {
      title: "Simple, modern design and easy to use!",
      description:
        "High quality images and visually appealing graphics are used to attract attention. A clean and modern design has been implemented that reflects the brand identity prioritizing the user experience. Powerful filtering and sorting options have also been added to help customers narrow down their choices based on preferences such as size, color, material and style.",
      imageUrl: null,
    },
    projectViewImageOne: "/images/projects/soxey/showcase-1.png",
    projectViewImageTwo: "/images/projects/soxey/showcase-2.png",
    interactions: [
      {
        avatar: null,
        description: `Hi Syntech Team,
We're in the process of launching our exceptional beauty and wellness services at FACEDRIP, where enchantment and self-care take center stage!
To resonate with our clientele, we understand the significance of a captivating online platform. Can you guide us in crafting this experience?`,
        name: "Soxey Team",
        title: "Designer",
      },
      {
        avatar: null,
        description: `Hi Soxey,
Thanks for considering FACEDRIP! We're excited to bring FACEDRIP online andhelp you tackle any challenges ahead. While we may not sail the seas, our passion for beauty and wellness drives our commitment to top-notch web development.Let's create something magical together!`,
        name: "Syntech AG",
        title: "Developer",
      },
      {
        avatar: null,
        description: `Hi Syntech Team,
I wanted to take a moment to express my sincere appreciation for the outstanding work your team has done on the design of my online sock store website.
Having had the opportunity to review the design concepts and see the website come to life, I am thoroughly impressed with the level of creativity, attention to detail, and professionalism exhibited throughout the process. The website truly embodies the vision and brand identity that I had envisioned, and I couldn't be happier with the results.`,
        name: "Soxey Team",
        title: "Designer",
      },
      {
        avatar: null,
        description: `Hi Soxey Team,
Thank you so much for your kind words and positive feedback! We are thrilled to hear that you are satisfied with the design of your online sock store website.
It has been a pleasure working with you throughout this process, and we're delighted that the final result aligns with your vision and exceeds your expectations. Your enthusiasm for the project has been truly inspiring, and it's been a privilege to collaborate with you to bring your vision to life.`,
        name: "Syntech AG",
        title: "Developer",
      },
    ],
  },
];
