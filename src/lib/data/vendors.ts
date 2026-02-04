export interface Vendor {
  id: string;
  name: string;
  slug: string;
  headquarters: string;
  statesServed: string[];
  certificationLevel: "gold" | "silver" | "bronze";
  certificationDate: string;
  expirationDate: string;
  description: string;
  website?: string;
  contactEmail?: string;
  contactPhone?: string;
}

export const vendors: Vendor[] = [
  {
    id: "1",
    name: "Runbeck Election Services",
    slug: "runbeck-election-services",
    headquarters: "Arizona",
    statesServed: ["Arizona", "California", "Nevada", "Utah", "Colorado", "Texas"],
    certificationLevel: "gold",
    certificationDate: "2026-01-15",
    expirationDate: "2027-01-15",
    description: "Leading provider of ballot printing and election services with over 40 years of experience. Serving election jurisdictions nationwide with comprehensive solutions.",
    website: "https://runbeck.com",
    contactEmail: "elections@runbeck.com",
    contactPhone: "(602) 555-0100",
  },
  {
    id: "2",
    name: "SeaChange Print Innovations",
    slug: "seachange-print-innovations",
    headquarters: "Washington",
    statesServed: ["Washington", "Oregon", "Alaska", "Idaho", "Montana"],
    certificationLevel: "gold",
    certificationDate: "2026-01-20",
    expirationDate: "2027-01-20",
    description: "Innovative ballot printing solutions with a focus on security and sustainability. Trusted by Pacific Northwest election officials.",
    website: "https://seachangeprint.com",
    contactEmail: "info@seachangeprint.com",
    contactPhone: "(360) 555-0200",
  },
  {
    id: "3",
    name: "K&H Integrated Print Solutions",
    slug: "kh-integrated-print-solutions",
    headquarters: "Colorado",
    statesServed: ["Colorado", "Wyoming", "New Mexico", "Kansas", "Nebraska"],
    certificationLevel: "silver",
    certificationDate: "2026-02-01",
    expirationDate: "2027-02-01",
    description: "Full-service ballot printing with integrated logistics and tracking. Specializing in vote-by-mail programs across the Rocky Mountain region.",
    website: "https://khprint.com",
    contactEmail: "elections@khprint.com",
    contactPhone: "(303) 555-0300",
  },
  {
    id: "4",
    name: "ProVote Solutions",
    slug: "provote-solutions",
    headquarters: "Florida",
    statesServed: ["Florida", "Georgia", "Alabama", "Mississippi", "Louisiana", "South Carolina"],
    certificationLevel: "gold",
    certificationDate: "2026-01-25",
    expirationDate: "2027-01-25",
    description: "Comprehensive election services including ballot design, printing, and distribution. Serving the Southeast with reliability and precision.",
    website: "https://provotesolutions.com",
    contactEmail: "contact@provotesolutions.com",
    contactPhone: "(850) 555-0400",
  },
  {
    id: "5",
    name: "Midwest Ballot Printing",
    slug: "midwest-ballot-printing",
    headquarters: "Illinois",
    statesServed: ["Illinois", "Wisconsin", "Michigan", "Indiana", "Ohio"],
    certificationLevel: "silver",
    certificationDate: "2026-02-10",
    expirationDate: "2027-02-10",
    description: "Dedicated ballot printing services for Midwest jurisdictions. Known for quality control and on-time delivery.",
    contactEmail: "info@midwestballot.com",
    contactPhone: "(312) 555-0500",
  },
  {
    id: "6",
    name: "Northeast Election Print",
    slug: "northeast-election-print",
    headquarters: "New York",
    statesServed: ["New York", "Pennsylvania", "New Jersey", "Connecticut", "Massachusetts", "Vermont"],
    certificationLevel: "bronze",
    certificationDate: "2026-03-01",
    expirationDate: "2027-03-01",
    description: "Emerging ballot printing provider serving the Northeast corridor with commitment to NABPS standards.",
    contactEmail: "info@neelectionprint.com",
    contactPhone: "(212) 555-0600",
  },
];

export const allStates = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming",
];

export const certificationLevels = [
  { value: "gold", label: "Gold", emoji: "🥇" },
  { value: "silver", label: "Silver", emoji: "🥈" },
  { value: "bronze", label: "Bronze", emoji: "🥉" },
] as const;
