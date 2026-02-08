import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NABPS - National Association of Ballot Printing Standards",
    short_name: "NABPS",
    description: "Setting the Standard for Ballot Printing Integrity. Industry coalition establishing certification and best practices for Vote by Mail systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#00AEEF",
    icons: [
      {
        src: "/images/nabps-logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
