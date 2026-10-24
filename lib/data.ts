export interface Mentor {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  reviewsCount: number;
  hourlyRate: number;
  availableBadge: string;
  statusTag: string;
  isTopMentor?: boolean;
  isFastResponder?: boolean;
  category: 'business' | 'marketing' | 'tech' | 'leadership' | 'finance';
  headline: string;
  bio: string;
  location: string;
  timezone: string;
  sessionsCompleted: number;
  responseRate: string;
  yearsMentoring: number;
  coreDisciplines: string[];
  trackRecord: {
    role: string;
    company: string;
    period: string;
    description: string;
    letter: string;
  }[];
  expectations: string;
  reviews: {
    id: string;
    author: string;
    role: string;
    avatar: string;
    rating: number;
    text: string;
  }[];
  sessionFormats: {
    id: string;
    title: string;
    subtitle: string;
    duration: string;
    price: number;
  }[];
}

export const MENTORS: Mentor[] = [
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Fractional CMO & Former Head of Growth @ Miro | Advisor to Seed & Series A Founders',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpdNlqHW6YcUWbGqYn7MqTDfZ11t_Np7BCNgpKJZbX7fKaJ8oIoaU-ygA8BOx828uDAY6lIZGoQcl88BNJRp_YoPqp4lXqswknJpQbqF7fsPggtRZy6JImUfPpaGQ5I8-jfcBXH8Zjt0vZqcFAJH0mBw5H3GA1717fEj710PJcWDkVlROzXBTC-y34KgcrQHDnefB1Tl-Qit9MvG3Ipi9TQL8hqV1OquyV_dxsNsULLGhQAT33PghXwQ',
    rating: 5.0,
    reviewsCount: 64,
    hourlyRate: 120,
    availableBadge: 'Available This Week',
    statusTag: 'Top Mentor',
    isTopMentor: true,
    category: 'marketing',
    headline: '“Helped 40+ early-stage B2B startups scale from $0 to $5M ARR with high-velocity product marketing playbooks.”',
    bio: 'I help early-stage and venture-backed founders strip away vanity metrics to build scalable, repeatable growth engines. Having scaled Miro’s product-led growth model from 2M to over 15M active users, I’ve seen firsthand how positioning and friction reduction create compounding loops.\n\nMy mentoring philosophy is purely tactical: zero fluff, zero hypothetical theories. We dissect your actual retention cohort graphs, CAC paybacks, and inbound conversion funnels to isolate the exact 20% lever that yields 80% of your revenue velocity.',
    location: 'San Francisco, CA',
    timezone: 'PST',
    sessionsCompleted: 64,
    responseRate: '100%',
    yearsMentoring: 6,
    coreDisciplines: [
      'B2B Growth',
      'Go-To-Market Strategy',
      'Customer Acquisition',
      'Product Positioning',
      'Pricing & Packaging',
      'Growth Team Hiring'
    ],
    trackRecord: [
      {
        role: 'Head of Growth',
        company: 'Miro',
        period: '2019 — 2023',
        description: 'Scaled viral product loops from 2M to 15M registered accounts. Built the 18-person multi-disciplinary growth and lifecycle engineering unit.',
        letter: 'M'
      },
      {
        role: 'Growth Marketing Lead',
        company: 'Segment (Acquired by Twilio)',
        period: '2016 — 2019',
        description: 'Spearheaded self-serve activation pipeline, boosting free-to-paid tier conversion by 34% within 9 months.',
        letter: 'S'
      },
      {
        role: 'Angel Investor & Advisor',
        company: 'Syndicate & Direct',
        period: '2020 — Present',
        description: 'Active advisor to 14 venture-backed SaaS startups across Seed to Series B in the US and Europe.',
        letter: 'A'
      }
    ],
    expectations: 'Before our scheduled video call, I thoroughly review your pitch deck, current product metrics dashboard, or GTM playbook. We do not spend the first 20 minutes getting acquainted—we jump straight into strategic diagnosis and leave you with 3 concrete execution milestones.',
    reviews: [
      {
        id: 'rev-1',
        author: 'Marcus Chen',
        role: 'Co-Founder & CEO @ RelayFlow (Seed)',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqduY6J-waR4L9ZG_2O3zbnckW01VY_YB9ueWkJn4HMtZEobPbHPYl719lA54ZSS6UioKNAGyKnkonpARbua6FzCkidpWCBW5DbtLJthGQlEhliatuSAtRO3ivVsZw4Q4M9qm0u7aJ83cv_gY-CUK9kD4wBvPWFHQC5getW4oKFilXE7taQg_vmp2YKkRAwB9eoCBZDBFe5Vp-YxE-SbADA3JnDZ21_NuFs0BsRJdIGaYBSUmxJTQJsQ',
        rating: 5.0,
        text: '“Elena pinpointed the exact friction flaw in our onboarding funnel within the first 20 minutes. We implemented her revised PLG activation steps the following week and immediately lifted our trial-to-paid conversion by 28%.”'
      },
      {
        id: 'rev-2',
        author: 'Soraya Hadid',
        role: 'Founder @ Omnia Metrics (Series A)',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFXcTPGqvZoejZfVs_ur1rF4-WZfrlCNxq-mkAnnlO9OOvrwN8nNjEb-u6yXB8us6E9bRM9l8sJ3-GM5wgkFYmbs3yeaVOE8p-qpI-YI6EdLEdsg-D4wZJVd3Us_u-QObn-gDUAAKDkaOPSq2c19nyL8WVCWWgYGDPKTPBI5OZadDkldsWopIQAhcztW06Vio99nqwras6GsWaYg3_adYWUmMv94NA0Ref4CT_3tQa1y-zhoyUaQS0fg',
        rating: 5.0,
        text: '“Worth 10x the fee. She didn’t give generic advice—she pulled up our pricing tier model, restructured our enterprise packaging, and saved us months of trial-and-error with our sales motion.”'
      },
      {
        id: 'rev-3',
        author: 'David Lindqvist',
        role: 'Head of Growth @ Kapsul Finance',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEc9MyjKZiu8prWONRAElEX58ng8LMDiUDh7_exAGGe_gwqrdqkTSWwZHkeJH-2Ms_q4XCRGtCjeue2Ce2ONzEkJgjVpIKRaUPEaA9Q2DS0gjd5ITPuwGAsxAZJVRK81xsUhCPaOc0M0nvw96sIEt8ixIfvSm74YJjgo1DrL2IdpdHvSYlJsvss02CiPGckDO9PjF06F7PYNkHQ8kkCJHy4BbUePAAT9RmZD2SblRpLQ26bjy_C97sxg',
        rating: 5.0,
        text: '“Incredible strategic clarity. Elena will challenge your assumptions with real operator data. Booking her monthly mentorship package was the best operational decision we made this quarter.”'
      }
    ],
    sessionFormats: [
      {
        id: 'deep-dive',
        title: '1-on-1 Deep Dive',
        subtitle: 'Targeted focus on single growth bottleneck',
        duration: '45 min',
        price: 120
      },
      {
        id: 'intro-strategy',
        title: 'Introductory Strategy',
        subtitle: 'Quick GTM audit & priority alignment',
        duration: '30 min',
        price: 80
      },
      {
        id: 'monthly-retainer',
        title: 'Monthly Mentorship',
        subtitle: '4 calls + async Slack messaging support',
        duration: '4 wks',
        price: 420
      }
    ]
  },
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    role: 'Founder & Angel Investor (Fintech Exit)',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLBZ80ojqBQbCuAptVe31KLl5_TTtveT2wPhPm6tkl_bvc7MlhHJEMy604PTkwGwbqQ44smhgazCB20WSEFSE7WQhTiAgmK8VUccd1SSo93OmDRHTH5l4FduAJkjlh_3jYxhSmgUMbDpin1AFFQNiwcMaV5aSNscZUcHGIio9xS-jD9ycuNdZV-8ce-LncuGOoP3sFmgV97C25N_fX1BNyNNc880_ZBZMnixY5JEvSPxI0MD3R73ahXQ',
    rating: 5.0,
    reviewsCount: 88,
    hourlyRate: 150,
    availableBadge: 'Active today',
    statusTag: 'Fast Responder',
    isFastResponder: true,
    category: 'finance',
    headline: '“Guiding founders through seed angel rounds, term sheet negotiations, and early enterprise sales pipelines.”',
    bio: 'Former founder with a $45M fintech exit. Now investing through Vance Ventures and mentoring early-stage founders navigating their pre-seed through Series A rounds.',
    location: 'New York, NY',
    timezone: 'EST',
    sessionsCompleted: 88,
    responseRate: '98%',
    yearsMentoring: 5,
    coreDisciplines: ['Seed Fundraising', 'Pitch Deck Polish', 'Cap Tables', 'Term Sheet Diligence'],
    trackRecord: [
      {
        role: 'Founder & CEO',
        company: 'PayFlow (Exited to Stripe Partner)',
        period: '2017 — 2022',
        description: 'Built cross-border payment gateway processing $800M+ annually before acquisition.',
        letter: 'P'
      }
    ],
    expectations: 'We will tear down your investor deck slide-by-slide and stress-test your financial model against realistic SaaS cohort benchmarks.',
    reviews: [
      {
        id: 'rev-mv1',
        author: 'Arjun Mehta',
        role: 'CEO @ VaultOps',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqduY6J-waR4L9ZG_2O3zbnckW01VY_YB9ueWkJn4HMtZEobPbHPYl719lA54ZSS6UioKNAGyKnkonpARbua6FzCkidpWCBW5DbtLJthGQlEhliatuSAtRO3ivVsZw4Q4M9qm0u7aJ83cv_gY-CUK9kD4wBvPWFHQC5getW4oKFilXE7taQg_vmp2YKkRAwB9eoCBZDBFe5Vp-YxE-SbADA3JnDZ21_NuFs0BsRJdIGaYBSUmxJTQJsQ',
        rating: 5.0,
        text: '“Marcus helped us close our $2.4M seed in 3 weeks. His feedback on our lead investor deck changed the entire narrative.”'
      }
    ],
    sessionFormats: [
      {
        id: 'deck-review',
        title: 'Pitch Deck & Term Sheet Review',
        subtitle: 'Intensive diligence and narrative restructuring',
        duration: '50 min',
        price: 150
      },
      {
        id: 'fundraising-roadmap',
        title: 'Fundraising Prep Sprint',
        subtitle: 'Investor target mapping & outreach script',
        duration: '35 min',
        price: 110
      }
    ]
  },
  {
    id: 'priya-patel',
    name: 'Priya Patel',
    role: 'VP of Engineering & Tech Advisor',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlONlcuBswcGctLFKB3sTWiwy8eSPnBAMNcvG_1Z52mq5GWr7I-219OpCpnPAxwuBbw5-MlZeFrfhd56rXcX6n660z7dUIwvxCVXCQXqdBD8XXCaHIeg6gc0ornzDu8uoyC9YqSmNHutr41kffUH12V-zU_LWDeyLhUnamcjWfbmoW06bgAtDQyu1tzwzCgMeeZ5K79qIT6WOMFTQXSNTB4vYf13gUvUaYvqTbDq6rOqAbTHFXw6Xyew',
    rating: 4.9,
    reviewsCount: 42,
    hourlyRate: 110,
    availableBadge: 'Next: Tomorrow',
    statusTag: 'Verified Leader',
    category: 'tech',
    headline: '“Pragmatic technical leadership for first-time CTOs and senior developers transitioning to engineering management.”',
    bio: 'VP of Engineering at CloudScale and advisor to fast-growing infra teams. Specialize in architecting microservices that scale without drowning in technical debt.',
    location: 'Austin, TX',
    timezone: 'CST',
    sessionsCompleted: 42,
    responseRate: '100%',
    yearsMentoring: 4,
    coreDisciplines: ['Scaling Teams', 'System Architecture', 'Engineering Culture', 'CTO Transition'],
    trackRecord: [
      {
        role: 'VP Engineering',
        company: 'CloudScale',
        period: '2021 — Present',
        description: 'Scaled engineering organization from 14 to 85 distributed engineers across 4 continents.',
        letter: 'C'
      }
    ],
    expectations: 'Come prepared with your current architectural diagrams, sprint velocity bottlenecks, or organizational hiring challenges.',
    reviews: [
      {
        id: 'rev-pp1',
        author: 'Tomás Rivera',
        role: 'CTO @ Datastream',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEc9MyjKZiu8prWONRAElEX58ng8LMDiUDh7_exAGGe_gwqrdqkTSWwZHkeJH-2Ms_q4XCRGtCjeue2Ce2ONzEkJgjVpIKRaUPEaA9Q2DS0gjd5ITPuwGAsxAZJVRK81xsUhCPaOc0M0nvw96sIEt8ixIfvSm74YJjgo1DrL2IdpdHvSYlJsvss02CiPGckDO9PjF06F7PYNkHQ8kkCJHy4BbUePAAT9RmZD2SblRpLQ26bjy_C97sxg',
        rating: 5.0,
        text: '“Priya saved us months of architectural dead ends. Her advice on decoupling our monolithic backend was pure gold.”'
      }
    ],
    sessionFormats: [
      {
        id: 'arch-audit',
        title: 'Architecture & Scalability Audit',
        subtitle: 'Review backend bottleneck or cloud cost sprawl',
        duration: '45 min',
        price: 110
      }
    ]
  },
  {
    id: 'david-kim',
    name: 'David Kim',
    role: 'Product Design Director & UX Strategist',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpYe5r4PmlVNF1O2t9azRBQLnut0UN9gZmoovMceYWx8373eDV5nMrtHIpbS7TEk12YTz-O4KFKJ3NQQjNbtC8FNSQNJ7jJwZyC5gWjbqe5Tcnt-IC4ZBe-AAegsR53Sy_h5OnZAx4QAYamLudD-3j27spbQeiR2GmEV1YbIUKvd_HlsJEavCT0MiyRio3ME9kFEZ3W9kBq36TH2bS9XIMbjN1Ji4gu6qaI7l5Pkva87qZ6NX5xxfTTg',
    rating: 4.8,
    reviewsCount: 39,
    hourlyRate: 95,
    availableBadge: 'Available This Week',
    statusTag: 'Design Specialist',
    category: 'tech',
    headline: '“Transforming clunky, complex workflows into consumer-grade, delightful enterprise software that users champion.”',
    bio: 'Product Design Director who spent 10+ years at top design agencies and hyper-growth SaaS platforms transforming complex enterprise systems into consumer-grade tools.',
    location: 'Seattle, WA',
    timezone: 'PST',
    sessionsCompleted: 39,
    responseRate: '96%',
    yearsMentoring: 4,
    coreDisciplines: ['Product Strategy', 'Design Systems', 'UX Audit', 'Figma to Code'],
    trackRecord: [
      {
        role: 'Design Director',
        company: 'Loom & Vercel Advisor',
        period: '2020 — 2024',
        description: 'Led core product design team across rapid enterprise product expansion.',
        letter: 'L'
      }
    ],
    expectations: 'We will do a live screen-share walkthrough of your web app or prototype, annotating friction and drop-off moments.',
    reviews: [
      {
        id: 'rev-dk1',
        author: 'Lina Vance',
        role: 'Founder @ Flowkit',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFXcTPGqvZoejZfVs_ur1rF4-WZfrlCNxq-mkAnnlO9OOvrwN8nNjEb-u6yXB8us6E9bRM9l8sJ3-GM5wgkFYmbs3yeaVOE8p-qpI-YI6EdLEdsg-D4wZJVd3Us_u-QObn-gDUAAKDkaOPSq2c19nyL8WVCWWgYGDPKTPBI5OZadDkldsWopIQAhcztW06Vio99nqwras6GsWaYg3_adYWUmMv94NA0Ref4CT_3tQa1y-zhoyUaQS0fg',
        rating: 5.0,
        text: '“David pointed out 5 micro-interactions that dramatically simplified our signup flow within 30 minutes.”'
      }
    ],
    sessionFormats: [
      {
        id: 'ux-audit',
        title: 'Live Product UX & Onboarding Audit',
        subtitle: 'Screen-share deep dive on user friction',
        duration: '45 min',
        price: 95
      }
    ]
  },
  {
    id: 'sophia-martinez',
    name: 'Sophia Martinez',
    role: 'E-Commerce & DTC Operations Expert',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDWtLju8B7fD5QcpgfDYLvu3A2x8aCjvo16g1StF85D-weKsYWrEeLoIr-AVHqxfJluGRCG6jULWBFLFKFyc6RxQmaadidX57cd4D4PcgTIsA5sipbz69NZEW8-XrrphLNost4kIsSmVIn8JSJQtCW1lSiphLgOhK-b-1QljHmTWHn1r5Y8mHWIbcRM7Nn6rWu6zR4FninTgmV4ja0LdxPHUrlNpSpd5DE4bSrmlMtdOm-JDlvAXlCIg',
    rating: 5.0,
    reviewsCount: 51,
    hourlyRate: 105,
    availableBadge: 'Available This Week',
    statusTag: 'Top Mentor',
    isTopMentor: true,
    category: 'business',
    headline: '“Scaled multi-million dollar DTC lifestyle brands from launch to acquisition with unit economics precision.”',
    bio: 'Veteran DTC operator and supply-chain architect who has bootstrapped and scaled consumer product brands to eight-figure run rates.',
    location: 'Miami, FL',
    timezone: 'EST',
    sessionsCompleted: 51,
    responseRate: '100%',
    yearsMentoring: 5,
    coreDisciplines: ['Supply Chain', 'Retention Marketing', 'Omnichannel', 'Inventory Operations'],
    trackRecord: [
      {
        role: 'Co-Founder & COO',
        company: 'Verde Botanicals',
        period: '2018 — 2023',
        description: 'Scaled direct-to-consumer brand to $22M annual revenue with positive contribution margins.',
        letter: 'V'
      }
    ],
    expectations: 'We review contribution margin calculators, warehouse fulfillment terms, and customer repeat purchase cohort models.',
    reviews: [
      {
        id: 'rev-sm1',
        author: 'Chloe Dupont',
        role: 'Founder @ Lumina Skin',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqduY6J-waR4L9ZG_2O3zbnckW01VY_YB9ueWkJn4HMtZEobPbHPYl719lA54ZSS6UioKNAGyKnkonpARbua6FzCkidpWCBW5DbtLJthGQlEhliatuSAtRO3ivVsZw4Q4M9qm0u7aJ83cv_gY-CUK9kD4wBvPWFHQC5getW4oKFilXE7taQg_vmp2YKkRAwB9eoCBZDBFe5Vp-YxE-SbADA3JnDZ21_NuFs0BsRJdIGaYBSUmxJTQJsQ',
        rating: 5.0,
        text: '“Sophia reworked our manufacturer contracts and shaved 18% off our blended COGS.”'
      }
    ],
    sessionFormats: [
      {
        id: 'dtc-economics',
        title: 'DTC Unit Economics & Supply Audit',
        subtitle: 'Fix contribution margins and retention churn',
        duration: '45 min',
        price: 105
      }
    ]
  },
  {
    id: 'julian-thorne',
    name: 'Julian Thorne',
    role: 'Venture Partner & Executive Coach',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYIAc6Dw-W-aAfNO88iyUONCz1qcd5qamimmV4ooqhWEJwMF4nMr-Amr2tuEA3rPiIqJaTPiwONtzNlPcB_PyPyDa__z8k9jpxuZbuy_sNekCtKvySF_of4-od8sXMLHW65kOMp4aqUOi2XLC6H34hiOIwvsa7HpCwESE7ZWRqmpQ52D5OvD9o8LdO6GaV38QGNznD7fLXJxfMLj5Vu0KA5BypIIfZ5OQgsw2JyGfmgevv71KvJF3Qrg',
    rating: 4.9,
    reviewsCount: 73,
    hourlyRate: 160,
    availableBadge: 'Next: Fri, 2 PM',
    statusTag: 'Executive Coach',
    category: 'leadership',
    headline: '“Empowering founders to navigate founder-to-CEO scaling transitions, board dynamics, and high-stakes team conflicts.”',
    bio: 'Former founder turned venture partner and certified leadership psychologist. Has coached over 120 CEOs through rapid scaling transitions and IPO preparations.',
    location: 'London / New York',
    timezone: 'GMT / EST',
    sessionsCompleted: 73,
    responseRate: '99%',
    yearsMentoring: 7,
    coreDisciplines: ['Leadership Presence', 'Board Governance', 'Conflict Management', 'Executive Hiring'],
    trackRecord: [
      {
        role: 'Venture Partner & Coach',
        company: 'Apex Capital',
        period: '2018 — Present',
        description: 'Portfolio executive coach advising Series A-C CEOs on org leadership.',
        letter: 'A'
      }
    ],
    expectations: 'We address the tough conversations: co-founder misalignment, executive team restructuring, and leading boards with conviction.',
    reviews: [
      {
        id: 'rev-jt1',
        author: 'Nadia Solis',
        role: 'CEO @ Cortex Health',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFXcTPGqvZoejZfVs_ur1rF4-WZfrlCNxq-mkAnnlO9OOvrwN8nNjEb-u6yXB8us6E9bRM9l8sJ3-GM5wgkFYmbs3yeaVOE8p-qpI-YI6EdLEdsg-D4wZJVd3Us_u-QObn-gDUAAKDkaOPSq2c19nyL8WVCWWgYGDPKTPBI5OZadDkldsWopIQAhcztW06Vio99nqwras6GsWaYg3_adYWUmMv94NA0Ref4CT_3tQa1y-zhoyUaQS0fg',
        rating: 5.0,
        text: '“Julian was instrumental during our Series B board restructuring. Having him in my corner gave me total poise.”'
      }
    ],
    sessionFormats: [
      {
        id: 'exec-coaching',
        title: 'Executive Founder Coaching',
        subtitle: 'Leadership mindset, org scaling & board alignment',
        duration: '50 min',
        price: 160
      }
    ]
  }
];

export interface CommunityPost {
  id: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    badge: 'Mentor' | 'Mentee';
  };
  timeAgo: string;
  badgeLabel?: string;
  content: string;
  points?: string[];
  tags: string[];
  likes: number;
  commentsCount: number;
  hasUserLiked?: boolean;
  milestoneBanner?: {
    title: string;
    subtitle: string;
    attained: string;
  };
}

export const INITIAL_POSTS: CommunityPost[] = [
  {
    id: 'post-1',
    author: {
      name: 'Marcus Vance',
      role: 'Founder & Angel Investor',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgi9eUmnzhIPRStzPbjpDR7-FazmF874rQqgtOUQ3vZXKr6MZKZ39ft4gj2YbID3ZklCsY43cRMofGKzQ70Sk4bxoW5GMu_tjGGyjTF7LiLpCgB6RN2CL-3jHc0Yz71CJOzWnD-ZA_oAKO3_gWcv9-jaLcvs9ACeNb_S1tcV5byeKCZcov8laOOreFDobCdzA9XWKlMKcPG1fkzGwufqnbXhQC78qaGOftTYSaBa7DzmaLq09bkTVVcg',
      badge: 'Mentor'
    },
    timeAgo: '3h ago',
    content: '3 mistakes I see early-stage founders make when pitching angels in 2024:',
    points: [
      'Obscuring unit economics. Don\'t hide customer churn behind top-line ARR momentum. We will look under the hood.',
      'Not knowing your CAC payback period. If your payback is >18 months without enterprise retention covenants, explain your path to optimization immediately.',
      'Vague ICP boundary definitions. "SMB to Fortune 500" translates to "we haven\'t picked a battle we can win yet." Focus tight, win dominance, then expand.'
    ],
    tags: ['#Fundraising', '#EarlyStage', '#VentureCapital'],
    likes: 24,
    commentsCount: 8,
    hasUserLiked: false
  },
  {
    id: 'post-2',
    author: {
      name: 'Sarah Lin',
      role: 'Co-Founder @ Pulsetrace',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZFKZp0hAk9HsBviyYpkOP_iBan6TKnFLSDZF4tJ7Y0ZAyB5ZltqISoLc0uyJuhKUd1znrkg047wmHf1DQ-9d3r0vKwhpX9cMWVwo7OSSxg3OxjhjJUQl16zm0q-a_udruLCQga2pN9OZ02z1j4-56fLCf_er7eqmInDh8QH3Aaibak1R2BzDeuqkPQWFGo1zYFWLvVo7Si3TiwzKIC_yhItZ1YTnLl4_yqoFIN2bbDg1kpNTpBt4Fzw',
      badge: 'Mentee'
    },
    timeAgo: '6h ago',
    badgeLabel: 'Win',
    content: 'Huge milestone to share with everyone!\n\nAfter 3 deep-dive sessions with @Julian Thorne on our enterprise positioning and contract packaging, we just signed our very first 6-figure annual enterprise pilot!\n\nForever grateful for the Alongside mentor network for calling out our weak pricing tiers and helping us structure value-based SLAs. Onward! 🚀',
    milestoneBanner: {
      title: 'Mentorship Sprint Complete',
      subtitle: '4 Sessions with Julian Thorne on Enterprise GTM',
      attained: '100% Attained'
    },
    tags: ['#B2BGrowth', '#MilestoneWin'],
    likes: 42,
    commentsCount: 15,
    hasUserLiked: true
  },
  {
    id: 'post-3',
    author: {
      name: 'Priya Patel',
      role: 'VP Engineering @ CloudScale',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGjlOUIa7ZwztBel6znVNzgyDslTBY6s9r-iD9lltx5FKy8fiSjjQYiY44ieQVIQlQtaQoJmJFN-3RoksbOayi85VBorCou7iSZKBGIQ1E_Xw-o3Qqje9ua44zmIegdXGb_4-YrHxqZwU54C_KA6ZOCu8KnRTRY_SeYkaewnM-G5R6NzIw476NpXjydc5eyGyLdo8pahwPzVrni0Q3a5Wr-G0ZYGc0StEh9X83m2ruIBT5DST1kim9kw',
      badge: 'Mentor'
    },
    timeAgo: '1d ago',
    content: 'Open question to technical founders & engineering leaders:\n\nAt what stage or team size did you hire your first dedicated QA/SDET engineer versus relying purely on product engineers writing automated integration and end-to-end tests?\n\nSeeing a lot of early Series A teams bottlenecking release velocity right now because regression suites take 4 hours to review manually. Curious how you navigated that transition.',
    tags: ['#EngineeringLeadership', '#ProductVelocity', '#TechHiring'],
    likes: 18,
    commentsCount: 19,
    hasUserLiked: false
  }
];

export interface UserCustomization {
  name: string;
  role: string;
  startupName: string;
  stage: string;
  bio: string;
  avatar: string;
  track: string;
  glassIntensity: 'subtle' | 'medium' | 'vibrant';
  ambientGlow: 'emerald' | 'slate' | 'amber';
  compactDensity: boolean;
  googleCalendarConnected: boolean;
  smsReminders: boolean;
  emailWeeklyDigest: boolean;
  defaultPrepNotes: string;
}

export const DEFAULT_USER: UserCustomization = {
  name: 'Alex Vance',
  role: 'Founder & CEO',
  startupName: 'Veloce AI',
  stage: 'Seed Stage ($1.2M raised)',
  bio: 'Building developer tools that automate API integration test suites. Focused on repeatable B2B inbound motion and refining enterprise pricing tiers.',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJgqNG3boTp9bwvstyfNV4TIaWCLDOmYWSfSWeNu_XdmeDQw4mZwx02xc6qRxBbijnTxiuVlRWUGEGOV6uKcBp0X92sQWBplHaVDON338ivn13T6kr-pCeG_sND-8OD9S0oM8E6w0XY7bgGfLd-fDgdUpALjOxN4knXgT9hLgg2ZBnOk-d59UJzVcfYKMZ3K7cJ2GsUk1YfJ4t2JF6w-0kVelRN0X19xzz82fp6aAFrpsErT7Js_IhHA',
  track: 'Growth Track',
  glassIntensity: 'medium',
  ambientGlow: 'emerald',
  compactDensity: false,
  googleCalendarConnected: true,
  smsReminders: true,
  emailWeeklyDigest: true,
  defaultPrepNotes: 'Current MRR: $32K. Primary bottleneck: 30% dropoff between free sandbox usage and scheduling enterprise trial.'
};
