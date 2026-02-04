"use client";

interface NewsCategoryNavProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categoryCounts: Record<string, number>;
}

const categoryIcons = {
  all: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
    </svg>
  ),
  announcement: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
  ),
  news: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
    </svg>
  ),
};

const categoryDescriptions = {
  all: "View all news and announcements",
  announcement: "Official NABPS announcements and updates",
  news: "Industry news and developments",
};

const categories = [
  { value: "all", label: "All Posts" },
  { value: "announcement", label: "Announcements" },
  { value: "news", label: "Industry News" },
];

export function NewsCategoryNav({
  selectedCategory,
  onCategoryChange,
  categoryCounts,
}: NewsCategoryNavProps) {
  return (
    <div className="sticky top-20 overflow-hidden rounded-lg bg-white shadow-elevated">
      <div className="p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-key/60">
          News Categories
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
