export interface Resource {
  id: string;
  title: string;
  description: string;
  category: "standards" | "security" | "best-practices" | "general";
  fileType: "pdf" | "docx" | "xlsx";
  fileUrl: string;
  isPublic: boolean;
  publishedDate: string;
  downloadCount?: number;
}

export const resources: Resource[] = [
  {
    id: "1",
    title: "NABPS Certification Standards Overview",
    description: "Comprehensive guide to NABPS certification requirements, including security, quality control, and audit procedures.",
    category: "standards",
    fileType: "pdf",
    fileUrl: "/resources/nabps-standards-overview.pdf",
    isPublic: true,
    publishedDate: "2026-01-15",
    downloadCount: 342,
  },
  {
    id: "2",
    title: "Ballot Printing Security Best Practices",
    description: "Industry best practices for securing ballot printing facilities, including access control, surveillance, and chain of custody protocols.",
    category: "security",
    fileType: "pdf",
    fileUrl: "/resources/security-best-practices.pdf",
    isPublic: true,
    publishedDate: "2026-01-20",
    downloadCount: 287,
  },
  {
    id: "3",
    title: "Quality Control Checklist for Ballot Printers",
    description: "Step-by-step checklist for ensuring ballot quality, accuracy, and readability throughout the production process.",
    category: "best-practices",
    fileType: "pdf",
    fileUrl: "/resources/quality-control-checklist.pdf",
    isPublic: true,
    publishedDate: "2026-01-25",
    downloadCount: 198,
  },
  {
    id: "4",
    title: "Chain of Custody Documentation Template",
    description: "Standardized template for tracking ballots from production through delivery to election officials.",
    category: "standards",
    fileType: "xlsx",
    fileUrl: "/resources/chain-of-custody-template.xlsx",
    isPublic: true,
    publishedDate: "2026-02-01",
    downloadCount: 156,
  },
  {
    id: "5",
    title: "NABPS Introduction for Election Officials",
    description: "One-page overview of NABPS mission, certification program, and benefits for election officials.",
    category: "general",
    fileType: "pdf",
    fileUrl: "/resources/election-officials-intro.pdf",
    isPublic: true,
    publishedDate: "2026-01-10",
    downloadCount: 421,
  },
  {
    id: "6",
    title: "Audit Procedures for Certified Vendors",
    description: "Detailed audit procedures and compliance reporting requirements for NABPS-certified vendors.",
    category: "standards",
    fileType: "pdf",
    fileUrl: "/resources/audit-procedures.pdf",
    isPublic: false,
    publishedDate: "2026-02-05",
    downloadCount: 89,
  },
  {
    id: "7",
    title: "Incident Response Plan Template",
    description: "Template for developing and implementing incident response plans for security breaches or quality issues.",
    category: "security",
    fileType: "docx",
    fileUrl: "/resources/incident-response-template.docx",
    isPublic: true,
    publishedDate: "2026-02-10",
    downloadCount: 134,
  },
  {
    id: "8",
    title: "Staff Training Guidelines",
    description: "Guidelines for training ballot printing staff on security protocols, quality standards, and compliance requirements.",
    category: "best-practices",
    fileType: "pdf",
    fileUrl: "/resources/staff-training-guidelines.pdf",
    isPublic: true,
    publishedDate: "2026-02-15",
    downloadCount: 167,
  },
];

export const resourceCategories = [
  { value: "all", label: "All Resources" },
  { value: "standards", label: "Standards & Certification" },
  { value: "security", label: "Security" },
  { value: "best-practices", label: "Best Practices" },
  { value: "general", label: "General Information" },
] as const;

export const fileTypeIcons = {
  pdf: "📄",
  docx: "📝",
  xlsx: "📊",
} as const;
