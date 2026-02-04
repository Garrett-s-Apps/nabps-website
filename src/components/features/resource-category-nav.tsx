"use client";

interface ResourceCategoryNavProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categoryCounts: Record<string, number>;
}

const categoryIcons = {
  all: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  standards: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  security: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  "best-practices": (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  general: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

const categoryDescriptions = {
  all: "View all available resources",
  standards: "Certification requirements and audit procedures",
  security: "Security protocols and incident response",
  "best-practices": "Industry guidelines and operational excellence",
  general: "Introductory materials and overviews",
};

const categories = [
  { value: "all", label: "All Resources" },
  { value: "standards", label: "Standards & Certification" },
  { value: "security", label: "Security" },
  { value: "best-practices", label: "Best Practices" },
  { value: "general", label: "General Information" },
];

export function ResourceCategoryNav({
  selectedCategory,
  onCategoryChange,
  categoryCounts,
}: ResourceCategoryNavProps) {
  return (
    <div className="sticky top-20 overflow-hidden rounded-lg bg-white shadow-elevated">
      <div className="p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-key/60">
          Resource Classification
        </h2>

        <nav className="mt-6 space-y-1">
          {categories.map((category) => {
            const isActive = selectedCategory === category.value;
            const count = categoryCounts[category.value] || 0;

            return (
              <button
                key={category.value}
                onClick={() => onCategoryChange(category.value)}
                className={`group relative w-full rounded-md transition-all ${
                  isActive
                    ? "bg-navy shadow-soft"
                    : "text-key/80 hover:bg-navy/5"
                }`}
              >
                <div className="flex items-center gap-3 px-4 py-3">
                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 ${
                      isActive ? "text-cyan" : "text-navy/60 group-hover:text-navy"
                    }`}
                  >
                    {categoryIcons[category.value as keyof typeof categoryIcons]}
                  </div>

                  {/* Label */}
                  <div className="flex-1 text-left">
                    <div className={`text-sm font-medium ${isActive ? "text-cyan" : ""}`}>{category.label}</div>
                    <div
                      className={`mt-0.5 text-xs ${
                        isActive ? "text-cyan/80" : "text-key/50"
                      }`}
                    >
                      {categoryDescriptions[category.value as keyof typeof categoryDescriptions]}
                    </div>
                  </div>

                  {/* Count Badge */}
                  <div
                    className={`flex h-6 min-w-[24px] items-center justify-center rounded-full px-2 text-xs font-semibold ${
                      isActive
                        ? "bg-cyan/20 text-cyan"
                        : "bg-navy/10 text-navy/70 group-hover:bg-navy/15"
                    }`}
                  >
                    {count}
                  </div>
                </div>

                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute left-0 top-0 h-full w-1 rounded-l-md bg-cyan"></div>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
