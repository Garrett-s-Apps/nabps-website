interface CertificationBadgeProps {
  level: "gold" | "silver" | "bronze";
  size?: "sm" | "md" | "lg";
}

const badgeConfig = {
  gold: {
    gradient: "from-yellow-400 via-yellow-500 to-yellow-600",
    ring: "ring-yellow-500/30",
    glow: "shadow-[0_0_20px_rgba(251,191,36,0.3)]",
    icon: (
      <svg className="h-full w-full" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
  },
  silver: {
    gradient: "from-gray-300 via-gray-400 to-gray-500",
    ring: "ring-gray-400/30",
    glow: "shadow-[0_0_20px_rgba(156,163,175,0.3)]",
    icon: (
      <svg className="h-full w-full" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
  },
  bronze: {
    gradient: "from-orange-400 via-orange-500 to-orange-600",
    ring: "ring-orange-500/30",
    glow: "shadow-[0_0_20px_rgba(249,115,22,0.3)]",
    icon: (
      <svg className="h-full w-full" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
  },
};

const sizeConfig = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-16 w-16",
};

export function CertificationBadge({ level, size = "md" }: CertificationBadgeProps) {
  const config = badgeConfig[level];

  return (
    <div className={`relative flex-shrink-0 ${sizeConfig[size]}`}>
      {/* Badge */}
      <div
        className={`flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br ${config.gradient} ring-4 ${config.ring} ring-offset-2 shadow-soft`}
      >
        <div className="h-1/2 w-1/2 text-white drop-shadow-lg">
          {config.icon}
        </div>
      </div>
    </div>
  );
}
