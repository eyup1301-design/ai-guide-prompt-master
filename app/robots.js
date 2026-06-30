export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/feedback", "/admin"],
    },
    sitemap: "https://wrompt.com/sitemap.xml",
  };
}