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
  projectViewImageOne?: string;
  projectViewImageTwo?: string;
};

export const projects: Array<Project> = [
  {
    slug: 'spandoekman',
    title: 'Spandoekman',
    heroText: 'Brand identity, design & development for luxury cruise booking',
    date: '2024-05-22',
    heroImage: '/images/projects/spandoekman/banner.png',
    heroInsideImage: '/images/projects/spandoekman/bannerInnerImage.png',
    heroTitle: 'Brand identity, design & development for luxury cruise booking',
    liveUrl: 'liveURL',
    services: ['UI UX Design', 'Development'],
    productType: ['Website', 'E-Commerce'],
    expertise: ['Frontend', 'Shopify'],
    release: ['2024', '2024'],
    mainChallenge: {
      title: 'We are more than just a team',
      description:
        'We are listeners, because we hear and listen. We are genies, who will grant more, than 3 wishes. We are a bunch of specialists, who know how to take care of every project step. We are Ministry',
      imageUrl: '/images/projects/spandoekman/solutionAndChallenge-1.png',
    },
    ourSolution: {
      title: 'We are more than just a team',
      description:
        'We are listeners, because we hear and listen. We are genies, who will grant more, than 3 wishes. We are a bunch of specialists, who know how to take care of every project step. We are Ministry',
      imageUrl: '/images/projects/spandoekman/solutionAndChallenge-2.png',
    },
    projectViewImageOne: '/images/projects/spandoekman/showcase-1.png',
    projectViewImageTwo: '/images/projects/spandoekman/showcase-2.png',
    interactions: [
      {
        avatar: '/images/projects/spandoekman/client-avatar.png',
        description: `Hi Syntech Team,
We're in a bit of a bind! Our online shop has been running since 2011 without any significant updates. It's high time for a major redesign. To effectively engage with potential clients, we recognize the urgent need for a revamped and impactful webshop presence. Can you assist us in this endeavor?`,
        name: 'John Doe',
        title: 'Designer',
      },
      {
        avatar: null,
        description: `Hi Timo,
Thanks for reaching out! It's with great pleasure that we assist you and the Spandoekman.nl Team with your vision. Your goal aligns perfectly with what we're great at here at Syntech Team.We've noted your request and wasted no time in executing your webshop vision. We're thrilled to unveil the results below. Brace yourselves for the excitement as we present your brand-new shop...`,
        name: 'John Doe 2',
        title: 'Designer',
      },
      {
        avatar: '/images/projects/spandoekman/client-avatar.png',
        description: `Hi Syntech Team,
Wow, it looks incredible! It far exceeds our expectations. Even though we had high hopes, you've surpassed them and delivered beyond what we could have imagined. Thank you for your exceptional work. We're all set to launch. Cheers to the entire Syntech Team!`,
        name: 'John Doe',
        title: 'Designer',
      },
      {
        avatar: null,
        description: `Hi Timo,
Thank you so much for your kind words! We're thrilled that you're pleased with the outcome. It was a pleasure working with you and exceeding your expectations. We're excited to see your project take off and we're here to support you every step of the way.Cheers to a successful launch and continued success for your Online-Shop!`,
        name: 'John Doe 2',
        title: 'Designer',
      },
    ],
  },
  {
    slug: 'soxey',
    title: 'Soxey',
    heroText: 'Visual presentation of the website for the online sale of socks',
    date: '2024-02',
    heroImage: '/images/projects/soxey/banner.png',
    heroInsideImage: '/images/projects/soxey/bannerInnerImage.png',
    heroTitle:
      'Visual presentation of the website for the online sale of socks',
    liveUrl: 'liveURL',
    services: ['UI UX Design', 'Development'],
    productType: ['Website', 'E-Commerce'],
    expertise: ['Frontend', 'Shopify'],
    release: ['2024', 'Feb'],
    mainChallenge: {
      title: 'Crafting a standout website in a competitive market.',
      description:
        'In a crowded online market, capturing potential customer interest is crucial. Socks, available in numerous styles, colors, and materials, pose a unique challenge. Balancing the presentation of this diverse product range on a website without overwhelming visitors requires careful consideration of layout, categorization, and visual hierarchy.',
      imageUrl: '/images/projects/soxey/solutionAndChallenge-1.png',
    },
    ourSolution: {
      title: 'Simple, modern design and easy to use!',
      description:
        'High quality images and visually appealing graphics are used to attract attention. A clean and modern design has been implemented that reflects the brand identity prioritizing the user experience. Powerful filtering and sorting options have also been added to help customers narrow down their choices based on preferences such as size, color, material and style.',
      imageUrl: '/images/projects/soxey/solutionAndChallenge-2.png',
    },
    projectViewImageOne: '/images/projects/soxey/showcase-1.png',
    interactions: [
      {
        avatar: '/images/projects/soxey/client-avatar.png',
        description: `Hi Syntech Team,
We're in the process of launching our exceptional beauty and wellness services at FACEDRIP, where enchantment and self-care take center stage!
To resonate with our clientele, we understand the significance of a captivating online platform. Can you guide us in crafting this experience?`,
        name: 'Soxey Team',
        title: 'Designer',
      },
      {
        avatar: null,
        description: `Hi Soxey,
Thanks for considering FACEDRIP! We're excited to bring FACEDRIP online andhelp you tackle any challenges ahead. While we may not sail the seas, our passion for beauty and wellness drives our commitment to top-notch web development.Let's create something magical together!`,
        name: 'Syntech AG',
        title: 'Developer',
      },
      {
        avatar: '/images/projects/soxey/client-avatar.png',
        description: `Hi Syntech Team,
I wanted to take a moment to express my sincere appreciation for the outstanding work your team has done on the design of my online sock store website.
Having had the opportunity to review the design concepts and see the website come to life, I am thoroughly impressed with the level of creativity, attention to detail, and professionalism exhibited throughout the process. The website truly embodies the vision and brand identity that I had envisioned, and I couldn't be happier with the results.`,
        name: 'Soxey Team',
        title: 'Designer',
      },
      {
        avatar: null,
        description: `Hi Soxey Team,
Thank you so much for your kind words and positive feedback! We are thrilled to hear that you are satisfied with the design of your online sock store website.
It has been a pleasure working with you throughout this process, and we're delighted that the final result aligns with your vision and exceeds your expectations. Your enthusiasm for the project has been truly inspiring, and it's been a privilege to collaborate with you to bring your vision to life.`,
        name: 'Syntech AG',
        title: 'Developer',
      },
    ],
  },
  {
    slug: 'qonsultant',
    title: 'Qonsultant GmbH',
    heroText: 'Brand identity, design & development for business consultancy',
    date: '2024-05-23',
    heroImage: '/images/projects/qonsultant/banner.png',
    heroInsideImage: '/images/projects/qonsultant/bannerInnerImage.png',
    heroTitle: 'Brand identity, design & development for business consultancy',
    liveUrl: 'liveURL',
    services: ['Design', 'Development'],
    productType: ['Website', 'Onepage'],
    expertise: ['Brand Identity', 'UI design', 'UX design'],
    release: ['2024', '2024'],
    mainChallenge: {
      title: 'Empowering SMEs with Effective Online Representation',
      description:
        'In the digital age, development companies face the challenge of effectively showcasing their expertise online while adapting to evolving trends and technologies. Balancing comprehensive information, user-friendly navigation, and visual appeal within the constraints of a digital platform presents a key challenge for these companies.',
      imageUrl: '/images/projects/qonsultant/solutionAndChallenge-1.png',
    },
    ourSolution: {
      title: 'Qonsultant GmbH: SME Empowerment Online',
      description:
        'Tailored Web Design: Qonsultant GmbH crafts custom websites for SMEs, ensuring user-friendly navigation and visual appeal. Expert Content: They curate informative content, empowering SMEs with valuable insights. Seamless Integration: Qonsultant GmbH integrates tailored solutions into their website, providing SMEs with easy access to expert guidance. Ongoing Support: Offering continuous assistance, they ensure their website remains a reliable resource for SMEs navigating challenges in the digital business environment.',
      imageUrl: '/images/projects/qonsultant/solutionAndChallenge-2.png',
    },
    projectViewImageOne: '/images/projects/qonsultant/showcase-1.png',
    interactions: [
      {
        avatar: '/images/projects/qonsultant/client-avatar.png',
        description: `Hi Syntech Team,
We're in the process of launching a business consultancy firm called Qonsultant GmbH! Currently, all we have is the registration sorted. This means we're in need of branding, a website, and social media presence. Could you assist us with these essential components? Looking forward to your support.`,
        name: 'Qonsultant Team',
        title: 'Founder',
      },
      {
        avatar: null,
        description: `Hi Qonsultant GmbH,
Congratulations on the launch of Qonsultant GmbH! We're thrilled to hear about your new venture and would be delighted to assist you with branding, website development, and establishing a strong social media presence.Let's schedule a meeting to discuss your concept and requirements in more detail, and how we can best support your goals.`,
        name: 'Syntech AG',
        title: 'Team Lead',
      },
      {
        avatar: '/images/projects/qonsultant/client-avatar.png',
        description: `Hi Syntech Team,
Thanks for your quick response and willingness to help launch Qonsultant GmbH. We've seen the concept you sent over and we're impressed! Excited to keep working together!`,
        name: 'Qonsultant Team',
        title: 'Founder',
      },
      {
        avatar: null,
        description: `Hi Qonsultant GmbH,
Exciting news! Preparations are finished, and we're ready to launch Qonsultant GmbH. Thanks for trusting the Syntech Team. Best of luck with everything! Remember, we're one call away for you, if you need anything else.`,
        name: 'Syntech AG',
        title: 'Team Lead',
      },
    ],
  },
  {
    slug: 'ele-uznach',
    title: 'ELE Uznach',
    heroText: 'Premium Sun Protection and Garage Doors:Your Home Solution',
    date: '2024-05-24',
    heroImage: '/images/projects/ele-uznach/banner.png',
    heroInsideImage: '/images/projects/ele-uznach/bannerInnerImage.png',
    heroTitle: 'Where Technology Meets Creativity',
    liveUrl: 'liveURL',
    services: ['UI Design', 'Development'],
    productType: ['Redesign', 'E-commerce'],
    expertise: ['UI design', 'Wordpress'],
    release: ['May 2024', '2024'],
    mainChallenge: {
      title: 'Meeting Diverse Needs in Service Offerings',
      description:
        'One primary challenge in redesigning the website for sun protection and garage door solutions could be effectively showcasing the diverse range of products and customizable options while ensuring a user-friendly experience for visitors.',
      imageUrl: '/images/projects/ele-uznach/solutionAndChallenge-1.png',
    },
    ourSolution: {
      title: 'Our Tailored Solutions for ELE Uznach',
      description:
        'Customization: We offer tailored solutions, allowing customers to choose from a variety of designs and styles to meet their unique preferences. Versatility: With options from awnings to blinds, we provide flexibility in adjusting shade levels and controlling natural light entry. Security and Aesthetics: Our garage doors ensure protection and enhance visual appeal, with various sizes, styles, and operational mechanisms available. Quality Assurance: Collaborating with experienced professionals and using high-quality materials ensures durable, reliable products, prioritizing customer satisfaction.',
      imageUrl: '/images/projects/ele-uznach/solutionAndChallenge-2.png',
    },
    projectViewImageOne: '/images/projects/ele-uznach/showcase-1.png',
    interactions: [
      {
        avatar: '/images/projects/ele-uznach/client-avatar.png',
        description: `Hi Syntech Team,
We're in the process of launching our exceptional beauty and wellness services at FACEDRIP, where enchantment and self-care take center stage! To resonate with our clientele, we understand the significance of a captivating online platform. Can you guide us in crafting this experience?`,
        name: 'ELE Uznach',
        title: 'Team',
      },
      {
        avatar: null,
        description: `Hi ELE,
Thanks for considering FACEDRIP! We're excited to bring FACEDRIP online andhelp you tackle any challenges ahead. While we may not sail the seas, our passion for beauty and wellness drives our commitment to top-notch web development.Let's create something magical together!`,
        name: 'Syntech AG',
        title: 'Developer',
      },
      {
        avatar: '/images/projects/ele-uznach/client-avatar.png',
        description: `Hi Syntech Team,
Thank you for presenting your proposal. We're thrilled with your approach and expertise. Let's move forward with bringing FACEDRIP's vision to life!`,
        name: 'ELE Uznach',
        title: 'Team',
      },
      {
        avatar: null,
        description: `Hi ELE,
Great news! We're delighted to hear that you're pleased with our proposal! Let's get started on bringing FACEDRIP's vision to life together!"`,
        name: 'Syntech AG',
        title: 'Developer',
      },
    ],
  },
  {
    slug: 'reputy-solutions',
    title: 'Reputy Solutions',
    heroText: 'Transforming Digital Reputations',
    date: '2024-03',
    heroImage: '/images/projects/reputy-solutions/banner.png',
    heroInsideImage: '/images/projects/reputy-solutions/bannerInnerImage.png',
    heroTitle: 'Reputy Solutions: Transforming Digital Reputations',
    liveUrl: 'liveURL',
    services: ['UI UX Design', 'Development'],
    productType: ['Website', 'E-commerce'],
    expertise: ['Brand Identity', 'UI design', 'UX design'],
    release: ['March 2024'],
    mainChallenge: {
      title: 'Positioning Reputy as a Reputation Management Leader',
      description:
        'Navigating the competitive landscape of reputation management poses the challenge of distinguishing Reputy as a trusted industry leader. It requires showcasing expertise, commitment to excellence, and adaptability to evolving market dynamics to solidify its position in the field.',
      imageUrl: '/images/projects/reputy-solutions/solutionAndChallenge-1.png',
    },
    ourSolution: {
      title: 'Pioneering Reputation Management Solutions',
      description:
        "Strategic Brand Positioning: We crafted a unique identity for Reputy, emphasizing its commitment to excellence in reputation management. Targeted Online Presence: Through precise digital strategy, we optimized Reputy's online platforms to effectively engage its audience. Innovative Offerings: We developed creative solutions, setting Reputy apart as an industry leader. Continuous Improvement: Staying agile, we ensure Reputy remains at the forefront of reputation management.",
      imageUrl: '/images/projects/reputy-solutions/solutionAndChallenge-2.png',
    },
    projectViewImageOne: '/images/projects/reputy-solutions/showcase-1.png',
    interactions: [
      {
        avatar: '/images/projects/reputy-solutions/client-avatar.png',
        description: `Hi Syntech Team,
Launching our exceptional reputation management services at Reputy, where excellence and innovation are paramount! Understanding the importance of a captivating online platform, can you guide us in crafting this experience?`,
        name: 'Eldi Nazifi',
        title: 'Reputy',
      },
      {
        avatar: null,
        description: `Hi Eldi,
Absolutely, we're thrilled about your reputation management venture with Reputy! Crafting a captivating online platform and building a strong branding strategy that reflects Reputy's excellence are pivotal. Let's collaborate closely to bring this vision to life and resonate with your discerning clientele.`,
        name: 'Syntech AG',
        title: 'Team Lead',
      },
      {
        avatar: '/images/projects/reputy-solutions/client-avatar.png',
        description: `Hi Syntech Team,
We're impressed by your proposal for our case study and eager to showcase it online. Your expertise will undoubtedly elevate our reputation management efforts. Let's collaborate to bring this project to life!`,
        name: 'Eldi Nasufi',
        title: 'Reputy',
      },
      {
        avatar: null,
        description: `Hi Eldi,
Great news! Thank you for considering our proposal for your case study. We're excited about the opportunity to feature it online and demonstrate the impact of our reputation management solutions. Let's work together to share our success story with the world!"`,
        name: 'Syntech AG',
        title: 'Team Lead',
      },
    ],
  },
  {
    slug: 'facedrip',
    title: 'FACEDRIP',
    heroText: 'Let them drip!Beauty face eCommerce',
    date: '2024-04',
    heroImage: '/images/projects/facedrip/banner.png',
    heroInsideImage: '/images/projects/facedrip/bannerInnerImage.png',
    heroTitle: 'Where Technology Meets Creativity',
    liveUrl: 'liveURL',
    services: ['Design', 'Development'],
    productType: ['Website', 'E-commerce'],
    expertise: ['Brand Identity', 'UI design', 'UX design'],
    release: ['April 2024'],
    mainChallenge: {
      title: 'Differentiating in the Competitive Beauty Market',
      description:
        'Establishing a unique presence in the bustling beauty industry poses a significant challenge for FACEDRIP. Amidst fierce competition, it must define its identity and narrative to stand out, all while adapting to evolving trends and consumer preferences.',
      imageUrl: '/images/projects/facedrip/solutionAndChallenge-1.png',
    },
    ourSolution: {
      title: 'Tackling Beauty Industry Challenges',
      description:
        "Distinctive Brand Identity: We crafted FACEDRIP's unique identity, emphasizing its enchanting wellness approach to stand out. Tailored Digital Strategy: We devised a custom marketing plan, targeting FACEDRIP's audience across online platforms for maximum engagement. Engaging Online Platform: Our precise web development created an intuitive, visually captivating experience for FACEDRIP, enhancing user interaction. Continuous Support: We provide ongoing assistance, ensuring FACEDRIP adapts to industry shifts for sustained growth.",
      imageUrl: '/images/projects/facedrip/solutionAndChallenge-2.png',
    },
    projectViewImageOne: '/images/projects/facedrip/showcase-1.png',
    interactions: [
      {
        avatar: '/images/projects/facedrip/client-avatar.png',
        description: `Hi Syntech Team,
We're in the process of launching our exceptional beauty and wellness services at FACEDRIP, where enchantment and self-care take center stage! To resonate with our clientele, we understand the significance of a captivating online platform. Can you guide us in crafting this experience?`,
        name: 'Merita Llumnica',
        title: 'FACEDRIP',
      },
      {
        avatar: null,
        description: `Hi Merita,
Thanks for considering FACEDRIP! We're excited to bring FACEDRIP online andhelp you tackle any challenges ahead. While we may not sail the seas, our passion for beauty and wellness drives our commitment to top-notch web development.Let's create something magical together!`,
        name: 'Syntech AG',
        title: 'Team Lead',
      },
      {
        avatar: '/images/projects/facedrip/client-avatar.png',
        description: `Hi Syntech Team,
Thank you for presenting your proposal. We're thrilled with your approach and expertise. Let's move forward with bringing FACEDRIP's vision to life!`,
        name: 'Merita Llumnica',
        title: 'FACEDRIP',
      },
      {
        avatar: null,
        description: `Hi Merita,
Great news! We're delighted to hear that you're pleased with our proposal! Let's get started on bringing FACEDRIP's vision to life together!"`,
        name: 'Syntech AG',
        title: 'Team Lead',
      },
    ],
  },
];
