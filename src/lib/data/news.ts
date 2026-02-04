export interface NewsPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  author: string;
  category: "news" | "announcement" | "industry";
  publishedDate: string;
  isPublished: boolean;
  featuredImage?: string;
}

export const newsPosts: NewsPost[] = [
  {
    id: "1",
    slug: "nabps-officially-launches",
    title: "NABPS Officially Launches as National Standards Body for Ballot Printing",
    excerpt: "Four industry-leading ballot printing companies unite to form NABPS, establishing the first national certification program for ballot printing standards.",
    body: `The National Association of Ballot Printing Standards (NABPS) officially launched today, marking a historic moment for the ballot printing industry. Four founding member companies—Runbeck Election Services, SeaChange Print Innovations, K&H Integrated Print Solutions, and ProVote Solutions—have united to establish unified standards and certification programs for ballot printing.

"This collaboration represents an unprecedented commitment to election integrity," said Doug Sunde, Vice President of Election Services at SeaChange Print Innovations. "Despite being competitors, we recognize that the industry needs unified standards to maintain public trust."

NABPS will offer three tiers of certification—Gold, Silver, and Bronze—covering security protocols, quality control procedures, chain of custody requirements, and audit compliance. The certification program launches February 2026, with the first certified vendors expected by March.

Election officials nationwide have welcomed the initiative, noting that standardized certification will streamline vendor evaluation processes and provide assurance of industry best practices.`,
    author: "NABPS Board",
    category: "announcement",
    publishedDate: "2026-01-15",
    isPublished: true,
  },
  {
    id: "2",
    slug: "gold-certification-requirements-announced",
    title: "NABPS Announces Gold Certification Requirements",
    excerpt: "The highest tier of NABPS certification sets rigorous standards for security, quality, and operational excellence.",
    body: `NABPS today announced detailed requirements for Gold Certification, the highest level of ballot printing certification available. Gold Certified vendors must demonstrate comprehensive compliance across all NABPS standards categories.

Key requirements include:
- Annual on-site security audits
- Documented quality management systems
- Advanced facility security infrastructure
- Comprehensive staff training and certification programs
- Real-time chain of custody tracking
- Incident response and business continuity plans

"Gold Certification represents the pinnacle of ballot printing excellence," explained Bryan Dandurand, COO of Runbeck Election Services. "Vendors achieving this level demonstrate an unwavering commitment to election security and quality."

The certification process involves extensive documentation review, facility inspection, and ongoing compliance monitoring. Gold Certification is valid for one year and requires annual renewal.`,
    author: "Bryan Dandurand",
    category: "announcement",
    publishedDate: "2026-01-25",
    isPublished: true,
  },
  {
    id: "3",
    slug: "election-officials-embrace-nabps-standards",
    title: "Election Officials Nationwide Embrace NABPS Standards",
    excerpt: "Three state election offices announce plans to require NABPS certification in future ballot printing contracts.",
    body: `In a significant vote of confidence, election officials from Arizona, Colorado, and Washington have announced they will begin requiring or preferring NABPS certification in future ballot printing procurements.

"NABPS certification provides an objective, independently verified standard that gives us confidence in our vendor selection," said a spokesperson from the Arizona Secretary of State's office. "This is exactly what election officials need."

The announcements follow extensive consultation between NABPS and election administration professionals. Many election officials contributed input during the standards development process, ensuring requirements align with real-world election needs.

"We see this as a win-win," noted Paul Mantey, President of ProVote Solutions. "Election officials get assurance of quality and security, while certified vendors gain recognition for their commitment to excellence."

Additional states are expected to adopt NABPS certification requirements in their 2026-2027 procurement cycles.`,
    author: "Industry Observer",
    category: "news",
    publishedDate: "2026-02-01",
    isPublished: true,
  },
  {
    id: "4",
    slug: "ballot-security-best-practices-guide",
    title: "NABPS Releases Comprehensive Ballot Security Best Practices Guide",
    excerpt: "New 50-page resource document provides detailed guidance on securing ballot printing operations from design through delivery.",
    body: `NABPS has released its first major resource document: a comprehensive 50-page guide to ballot security best practices. The guide is available for free download from the NABPS website and covers every aspect of ballot production security.

Topics include:
- Facility access control and surveillance
- Personnel background checks and security clearances
- Digital security for ballot files and databases
- Physical security during production and storage
- Secure transportation protocols
- Incident detection and response procedures

"This guide represents collective wisdom from decades of ballot printing experience," said Brad Moorhouse, Senior Operations Manager at K&H Integrated Print Solutions. "We're sharing knowledge that has traditionally been proprietary because election security is bigger than any one company."

The guide is designed for both ballot printers seeking to improve their security posture and election officials wanting to understand security requirements for their vendors. NABPS plans to release additional guides covering quality control, chain of custody, and audit procedures.`,
    author: "Brad Moorhouse",
    category: "announcement",
    publishedDate: "2026-02-10",
    isPublished: true,
  },
];

export const newsCategories = [
  { value: "all", label: "All Posts" },
  { value: "announcement", label: "Announcements" },
  { value: "news", label: "Industry News" },
] as const;
