

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure `pageExtensions`` to include MDX files
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	// Optionally, add any other Next.js config below
	output: "export", // Will export all routes as static html
	basePath: "/nextjs-onlineshop",
};

// Merge MDX config with Next.js config
export default nextConfig
