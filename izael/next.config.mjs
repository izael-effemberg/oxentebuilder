/** @type {import('next').NextConfig} */
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
const inferredGithubPagesBasePath =
  process.env.GITHUB_ACTIONS === "true" && repositoryName && !repositoryName.endsWith(".github.io")
    ? `/${repositoryName}`
    : "";
const basePath = configuredBasePath === "none" ? "" : configuredBasePath || inferredGithubPagesBasePath;

const nextConfig = {
  agentRules: false,
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true
  }
};

export default nextConfig;
