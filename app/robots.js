export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/feedback"],
    },
    sitemap: "https://wrompt.com/sitemap.xml",
  };
}