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
  },
  {
    id: "2",
    title: "Ballot Printing Security Best Practices",
    description: "Industry best practices for securing ballot printing facilities, including access control, surveillance, and chain of custody protocols.",
    category: "security",
    fileType: "pdf",
    fileUrl: "/resources/security-best-practices.pdf",
    isPublic: true,
    publishedDate: "2026-01-22",
  },
  {
    id: "3",
    title: "Quality Control Checklist for Ballot Printers",
    description: "Step-by-step checklist for ensuring ballot quality, accuracy, and readability throughout the production process.",
    category: "best-practices",
    fileType: "pdf",
    fileUrl: "/resources/quality-control-checklist.pdf",
    isPublic: true,
    publishedDate: "2026-01-28",
  },
  {
    id: "4",
    title: "Chain of Custody Documentation Template",
    description: "Standardized template for tracking ballots from production through delivery to election officials.",
    category: "standards",
    fileType: "xlsx",
    fileUrl: "/resources/chain-of-custody-template.xlsx",
    isPublic: true,
    publishedDate: "2026-02-03",
  },
  {
    id: "5",
    title: "NABPS Introduction for Election Officials",
    description: "One-page overview of NABPS mission, certification program, and benefits for election officials.",
    category: "general",
    fileType: "pdf",
    fileUrl: "/resources/election-officials-intro.pdf",
    isPublic: true,
    publishedDate: "2026-01-08",
  },
  {
    id: "6",
    title: "Audit Procedures for Certified Vendors",
    description: "Detailed audit procedures and compliance reporting requirements for NABPS-certified vendors.",
    category: "standards",
    fileType: "pdf",
    fileUrl: "/resources/audit-procedures.pdf",
    isPublic: false,
    publishedDate: "2026-02-04",
  },
  {
    id: "7",
    title: "Incident Response Plan Template",
    description: "Template for developing and implementing incident response plans for security breaches or quality issues.",
    category: "security",
    fileType: "docx",
    fileUrl: "/resources/incident-response-template.docx",
    isPublic: true,
    publishedDate: "2026-01-30",
  },
  {
    id: "8",
    title: "Staff Training Guidelines",
    description: "Guidelines for training ballot printing staff on security protocols, quality standards, and compliance requirements.",
    category: "best-practices",
    fileType: "pdf",
    fileUrl: "/resources/staff-training-guidelines.pdf",
    isPublic: true,
    publishedDate: "2026-02-01",
  },
];

export const resourceCategories = [
  { value: "all", label: "All Resources" },
  { value: "standards", label: "Standards & Certification" },
  { value: "security", label: "Security" },
  { value: "best-practices", label: "Best Practices" },
  { value: "general", label: "General Information" },
] as const;

export function getFileTypeIcon(fileType: "pdf" | "docx" | "xlsx") {
  const icons = {
    pdf: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    docx: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    xlsx: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  };
  return icons[fileType];
}
